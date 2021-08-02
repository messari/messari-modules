import { Theme, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { memo } from "react";

import { Connection } from "../../generated/graphql";
import { Column } from "./columns";
import BaseHeader from "./header";
import Pagination, { PaginationArgs, Sort } from "./pagination";
import Row from "./row";

export type GQLTableProps = {
  connection?: Partial<Connection> | null;
  Footer?: React.FC;
  columns: Column[];
  dense?: boolean;
  page?: number;
  pageSize?: number;
  sort?: Sort<string>;
  onSort?: (sort: Sort<string>) => void;
  onPaginate?: (args: PaginationArgs) => void;
  onRowClick?: React.MouseEventHandler;
  rowSelection?: boolean;
  stickyHeader?: boolean;
  tableLayout?: "fixed" | "auto";
};

const useStyles = makeStyles<Theme, GQLTableProps>((theme) => ({
  table: ({ tableLayout = "fixed" }) => ({
    borderCollapse: "separate",

    [theme.breakpoints.up("sm")]: {
      tableLayout,
    },
  }),
  head: ({ dense }) => ({
    "& th": {
      // ...theme.mixins.messari.infoPane,
      borderRightColor: dense ? theme.palette.background.default : undefined,
      borderBottomWidth: dense ? undefined : 1,
      borderRightWidth: 1,
      padding: dense ? theme.spacing(0.25, 0) : theme.spacing(0.5),
    },
    "& th:first-child": {
      paddingLeft: dense ? undefined : theme.spacing(1.5),
    },
    "& th:last-child": {
      borderRightWidth: 0,
      paddingRight: dense ? undefined : theme.spacing(1.5),
    },
    "& th.MuiTableCell-paddingNone": {
      padding: 0,
    },
  }),
  hideHeaders: {
    display: "none",
  },
  body: ({ dense }) => ({
    "& td": {
      borderBottom: "none",
      borderRight: dense ? undefined : "1px solid transparent",
      padding: dense ? theme.spacing(0, 0.5) : theme.spacing(0.75, 0.75),
    },
    "& td:first-child": {
      paddingLeft: dense ? undefined : theme.spacing(1.5),
    },
    "& td:last-child": {
      paddingRight: dense ? undefined : theme.spacing(1.5),
    },
    "& tr:nth-of-type(odd) td": {
      backgroundColor: theme.palette.background.default,
    },
    "& tr:nth-of-type(even) td": {
      // ...theme.mixins.messari.infoPane,
    },
    "& tr:hover td": {
      "@media (pointer: fine)": {
        cursor: ({ onRowClick }) => (onRowClick ? "pointer" : undefined),
        backgroundColor: theme.palette.action.hover,
      },
    },
    "& td.MuiTableCell-paddingNone": {
      padding: 0,
    },
  }),
  footer: {
    borderBottom: "none",
    // ...theme.mixins.messari.infoPane,
    borderTopColor: theme.palette.background.default,
    borderTopWidth: 1,
    padding: 0,
  },
  tableContainer: {
    height: "100%",
  },
}));

const GQLTable: React.FC<GQLTableProps> = (props) => {
  const {
    connection,
    Footer = () => null,
    columns,
    dense = false,
    sort,
    page = 1,
    pageSize = 0,
    onSort,
    onPaginate,
    onRowClick,
    stickyHeader = false,
  } = props;

  const classes = useStyles(props);
  const { edges, pageInfo, totalCount } = connection || {};

  const handleRowClick = React.useCallback(
    (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
      const { target } = event;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLButtonElement
      ) {
        return;
      }

      if (onRowClick) {
        onRowClick(event);
      }
      return;
    },
    [onRowClick]
  );

  if (!edges) {
    return <div>No data to display</div>;
  }

  const offset = (page - 1) * pageSize;
  const items = pageSize ? edges.slice(offset, offset + pageSize) : edges;

  return (
    <>
      <TableContainer className={classes.tableContainer}>
        <Table
          classes={{
            root: classes.table,
          }}
          stickyHeader={stickyHeader}
        >
          <TableHead className={classes.head}>
            <TableRow>
              {columns.map((column) => {
                const Header = column.Header || BaseHeader;
                return column.hidden ? null : (
                  <Header
                    dense={dense}
                    key={column.key}
                    column={column}
                    sortDirection={
                      column.sortBy === sort?.by && sort?.direction
                    }
                    onSort={onSort}
                  />
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody className={classes.body}>
            {items.map(({ node }, index) => (
              <TableRow key={node.id} onClickCapture={handleRowClick}>
                <Row
                  columns={columns}
                  dense={dense}
                  node={node}
                  rank={index + 1 + offset}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {(Footer || onPaginate) && (
        <div className={classes.footer}>
          {onPaginate && (
            <Pagination
              page={page}
              pageSize={pageSize}
              pageInfo={pageInfo}
              totalCount={totalCount || edges.length}
              onPaginate={onPaginate}
            />
          )}
          {Footer && <Footer />}
        </div>
      )}
    </>
  );
};

export default memo(GQLTable);
