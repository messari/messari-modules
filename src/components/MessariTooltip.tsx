import {
  createStyles,
  Theme,
  Tooltip,
  TooltipProps,
  withStyles,
} from '@material-ui/core';
import React from 'react';

const styles = createStyles((theme: Theme) => ({
  tooltip: {
    ...theme.typography.caption,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1, 1.5),
  },
  arrow: {
    color: theme.palette.primary.main,
  },
  popperInteractive: {
    '& .MuiTooltip-tooltip': {
      padding: theme.spacing(2),
    },
  },
}));

/**
 * Messari specific implementation of the Material UI Tooltip component
 * which applies our preferred default styling and props.
 *
 * API:
 *
 * - [Tooltip API](https://material-ui.com/api/tooltip/)
 */
const MessariTooltip = withStyles(styles, {
  arrow: true,
  name: 'MessariTooltip',
})((props: TooltipProps) => (
  <Tooltip arrow={props.arrow !== undefined ? props.arrow : true} {...props} />
));

export default MessariTooltip;
