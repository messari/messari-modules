import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,

    "& a": {
      color: "inherit",
      textDecoration: "none",

      "&:hover": {
        color: theme.palette.primary.main,
        textDecoration: "underline",
      },
    },
  },
}));

const MessariModuleTitle: React.FC = ({ children }) => {
  const classes = useStyles();

  return <span className={classes.root}>{children}</span>;
};

export default MessariModuleTitle;
