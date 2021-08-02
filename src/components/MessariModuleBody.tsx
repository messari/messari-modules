import { makeStyles, Theme } from "@material-ui/core";
import React from "react";

export type MessariModuleBodyProps = {
  /** Add light background color to the body. */
  bg?: boolean;
  /** Classname to enhance body styling */
  className?: string;
  /** Add padding within the body. */
  padded?: boolean;
};

const useStyles = makeStyles<Theme, MessariModuleBodyProps>((theme) => ({
  root: {
    backgroundColor: ({ bg }) =>
      bg
        ? theme.palette.type === "dark"
          ? theme.palette.grey[900]
          : theme.palette.grey[50]
        : undefined,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: ({ padded }) => (padded ? theme.spacing(1) : undefined),
  },
}));

const MessariModuleBody: React.FC<MessariModuleBodyProps> = ({
  children,
  ...props
}) => {
  const classes = useStyles(props);

  return <div className={`${classes.root} ${props.className}`}>{children}</div>;
};

export default MessariModuleBody;
