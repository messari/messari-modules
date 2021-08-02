import { makeStyles, Divider } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor:
      theme.palette.type === "dark" ? theme.palette.grey[700] : "#bbd3e8",
    margin: theme.spacing(0.5, 1),
  },
}));

const MessariModuleHeaderDivider = () => {
  const classes = useStyles();

  return (
    <Divider orientation="vertical" flexItem className={classes.divider} />
  );
};

export default MessariModuleHeaderDivider;
