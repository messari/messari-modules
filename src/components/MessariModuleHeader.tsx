import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor:
      theme.palette.type === "dark" ? theme.palette.grey.A400 : "#e2f0fd",
    padding: theme.spacing(0.5, 1),
    marginBottom: 1,
  },
}));

const MessariModuleHeader: React.FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

export default MessariModuleHeader;
