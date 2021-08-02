import { makeStyles, Theme, useTheme } from "@material-ui/core";
import TableCell, {
  SortDirection as MuiSortDirection,
} from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import classNames from "classnames";
import React, { PropsWithChildren, ReactNode } from "react";

import { SortDirection as GqlSortDirection } from "../../generated/graphql";
import { Column } from "./columns";
import { Sort } from "./pagination";

export type HeaderProps = PropsWithChildren<{
  column: Column;
  dense: boolean;
  sortDirection?: GqlSortDirection | false;
  onSort?: (sort: Sort<string>) => void;
  before?: ReactNode;
  after?: ReactNode;
}>;

const useStyles = makeStyles<Theme, HeaderProps>((theme) => ({
  sortLabel: {
    display: "flex",
    position: "unset",
    padding: theme.spacing(0.5),
    "&:hover": {
      color: "inherit",
    },
  },
  centered: {
    justifyContent: "center",
  },
  sortIcon: {
    margin: theme.spacing(-1, 0),
    visibility: "hidden",
  },
  activeLabel: {
    "& $sortIcon": {
      visibility: "visible",
    },
  },
  labelText: ({ dense }) => ({
    ...theme.typography.caption,
    textTransform: "uppercase",
    lineHeight: 1,
    color: dense
      ? theme.palette.text.secondary
      : theme.typography.caption.color,
  }),
  cell: ({ column, dense }) => ({
    minWidth: dense || column.width ? column.width : 120,
    left: column.sticky ? 0 : undefined,
    position: column.sticky ? "sticky" : undefined,
    zIndex: column.sticky ? 5 : undefined,
  }),
}));

const IconComponent: React.FC = (props) => {
  const theme = useTheme();
  return (
    <ArrowDropDown
      {...props}
      style={{
        color: theme.palette.primary.main,
      }}
    />
  );
};

const Header = React.forwardRef<HTMLTableHeaderCellElement, HeaderProps>(
  (props, ref) => {
    const { column, sortDirection, onSort, children, before, after } = props;
    const classes = useStyles(props);
    const muiDir: MuiSortDirection = String(sortDirection).match(/^asc/i)
      ? "asc"
      : "desc";

    const handleClick = () =>
      onSort &&
      onSort({
        by: String(column.sortBy),
        direction:
          sortDirection === GqlSortDirection.DESC
            ? GqlSortDirection.ASC
            : GqlSortDirection.DESC,
      });

    const centered = column.align === "center";
    const active = !!sortDirection;

    return (
      <TableCell
        key={column.key}
        width={column.width}
        align={column.align}
        sortDirection={muiDir}
        ref={ref}
        className={classes.cell}
      >
        {column.label ? (
          <TableSortLabel
            disabled={!column.sortBy}
            hideSortIcon={centered || !onSort}
            active={active}
            direction={muiDir}
            onClick={handleClick}
            IconComponent={IconComponent}
            classes={{
              root: classNames({
                [classes.sortLabel]: true,
                [classes.centered]: centered,
              }),
              active: classNames(classes.activeLabel),
              icon: classNames(classes.sortIcon),
            }}
          >
            {before}
            <span className={classNames(classes.labelText)}>
              {column.label}
            </span>
            {children}
            {after}
          </TableSortLabel>
        ) : (
          children
        )}
      </TableCell>
    );
  }
);

export default Header;
