import { IconButton, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import MessariTooltip from "./MessariTooltip";

const useStyles = makeStyles((theme: Theme) => ({
  actionButton: {
    padding: 0,
    marginRight: theme.spacing(1),

    "&:hover": {
      backgroundColor: "transparent",
    },

    "&:hover $actionIcon": {
      color: theme.palette.text.primary,
    },

    "&:last-child": {
      marginRight: 0,
    },
  },
  actionIcon: {
    color: theme.palette.type === "dark" ? theme.palette.grey[500] : "#6c8faf",
    fontSize: 18,
  },
}));

type MessariModuleHeaderLinkIconProps = {
  tooltip?: string;
  onClick?: () => void;
  to: string;
  Icon: React.ElementType;
};

const MessariModuleHeaderLinkIcon = ({
  tooltip,
  onClick = () => {},
  to,
  Icon,
}: MessariModuleHeaderLinkIconProps) => {
  const classes = useStyles();

  return tooltip ? (
    <MessariTooltip title={tooltip}>
      <a href={to} onClick={onClick}>
        <IconButton className={classes.actionButton} size="small">
          <Icon className={classes.actionIcon} />
        </IconButton>{" "}
      </a>
    </MessariTooltip>
  ) : (
    <a href={to} onClick={onClick}>
      <IconButton className={classes.actionButton} size="small">
        <Icon className={classes.actionIcon} />
      </IconButton>
    </a>
  );
};

export default MessariModuleHeaderLinkIcon;
