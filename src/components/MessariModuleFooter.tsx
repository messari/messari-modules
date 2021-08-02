import { makeStyles, Theme } from "@material-ui/core";
import React from "react";

type MessariModuleFooterProps = {
  light?: boolean;
};

const useStyles = makeStyles<Theme, MessariModuleFooterProps>((theme) => ({
  root: {
    backgroundColor: ({ light }) =>
      theme.palette.type === "dark"
        ? light
          ? theme.palette.grey[900]
          : theme.palette.grey.A400
        : light
        ? theme.palette.grey[50]
        : theme.palette.grey[100],
  },
}));

const MessariModuleFooter: React.FC<MessariModuleFooterProps> = (props) => {
  const { children } = props;
  const classes = useStyles(props);

  return <div className={classes.root}>{children}</div>;
};

export default MessariModuleFooter;
