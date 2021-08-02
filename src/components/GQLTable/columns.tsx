import { Theme, makeStyles } from "@material-ui/core";
import Box, { BoxProps } from "@material-ui/core/Box";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import React from "react";
import get from "lodash.get";

import { Node } from "../../generated/graphql";
import { HeaderProps } from "./header";

export type Column = {
  key: string;
  label?: string;
  width?: string | number;
  align?: TableCellProps["align"];
  Component?: CellRenderer;
  Header?: React.FC<HeaderProps>;
  sortBy?: string;
  hidden?: boolean;
  sticky?: boolean;
};

export type CellRendererProps = {
  column: Column;
  dense: boolean;
  rank: number;
  node: Node;
};

export type CellRenderer = React.FC<CellRendererProps>;

const useStyles = makeStyles((theme: Theme) => ({
  typography: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  stickyCell: {
    left: 0,
    position: "sticky",
  },
  sourceLink: {
    marginLeft: theme.spacing(1),
    color: theme.palette.grey[600],
    fontSize: "0.8em",
  },
  link: {
    color: "inherit",
  },
}));

export const Cell: React.FC<
  {
    dense: boolean;
    typo?: TypographyProps["variant"];
    alignTop?: boolean;
    ellipsis?: boolean;
    column: Column;
  } & BoxProps
> = ({
  children,
  dense,
  typo,
  ellipsis = false,
  alignTop,
  column: { align, width },
  ...boxProps
}) => {
  const classes = useStyles();
  const defaultTypographyVariant = dense ? "caption" : "body1";

  return (
    <TableCell
      align={align}
      style={alignTop ? { verticalAlign: "top" } : undefined}
      width={width}
    >
      <Box py={0.5} display={ellipsis ? "flex" : undefined} {...boxProps}>
        <Typography
          className={classes.typography}
          noWrap={ellipsis}
          variant={typo || defaultTypographyVariant}
        >
          {children}
        </Typography>
      </Box>
    </TableCell>
  );
};

export const EmptyCell: React.FC<{ column: Column; dense: boolean }> = ({
  column,
  dense,
}) => {
  return (
    <Cell column={column} dense={dense}>
      -
    </Cell>
  );
};

export const BaseRenderer: CellRenderer = ({ dense, node, column }) => (
  <Cell column={column} dense={dense} ellipsis>
    {get(node, column.key)}
  </Cell>
);
