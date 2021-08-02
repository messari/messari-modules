import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createPalette, {
  PaletteOptions,
  SimplePaletteColorOptions,
} from '@material-ui/core/styles/createPalette';

import MessariColors, { grey } from './messariColors';
import mixins from './mixins';

export function createMessariTheme(type: keyof typeof MessariColors) {
  function color(key: keyof PaletteOptions) {
    const set = MessariColors[type][key];
    const [main, light, dark] = Array.isArray(set) ? set : [set];
    return (
      set && {
        [key]: {
          main,
          light,
          dark,
          contrastText: MessariColors[type][`${key}Contrast`],
        } as SimplePaletteColorOptions,
      }
    );
  }

  const palette = createPalette({
    type,
    background: {
      default: MessariColors[type].background,
      paper: MessariColors[type].paperBackground,
    },
    text: {
      primary: MessariColors[type].text,
      secondary: MessariColors[type].textSubtle,
    },
    action: {
      active: MessariColors[type].selection,
      hover: MessariColors[type].selectionHover,
    },
    divider: MessariColors[type].divider,
    grey: grey[type],
    ...color('primary'),
    ...color('secondary'),
    ...color('success'),
    ...color('warning'),
    ...color('info'),
    ...color('error'),
  });

  const breakpoints = createBreakpoints({});

  const fontWeightLight = 300;
  const fontWeightRegular = 400;
  const fontWeightMedium = 500;
  const fontWeightBold = 600;

  return createMuiTheme({
    palette,
    mixins: mixins(palette),
    breakpoints,
    typography: {
      fontFamily: ['Avenir', 'system-ui', 'sans-serif'].join(','),
      fontSize: 14,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold,
      h1: {
        fontSize: '2rem',
        letterSpacing: '-0.06em',
        fontWeight: fontWeightBold,
        lineHeight: 2,
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: fontWeightBold,
        lineHeight: 2,
        [breakpoints.up('sm')]: {
          fontSize: '1.6rem',
        },
      },
      h3: {
        fontSize: '1.4rem',
        fontWeight: fontWeightBold,
        lineHeight: 2,
        [breakpoints.down('sm')]: {
          fontSize: '1.4rem',
        },
      },
      h4: {
        fontSize: '1.2rem',
        fontWeight: fontWeightBold,
        lineHeight: 1.4,
        [breakpoints.down('sm')]: {
          fontSize: '1.1rem',
        },
      },
      h5: {
        fontSize: '1.2rem',
        lineHeight: 1,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: fontWeightBold,
        lineHeight: 1.4,
      },
      body1: {
        fontSize: '.875rem',
        fontWeight: fontWeightRegular,
      },
      body2: {
        fontSize: '1rem',
        fontWeight: fontWeightRegular,
      },
      subtitle1: {
        fontSize: '.875rem',
        fontWeight: fontWeightBold,
      },
      subtitle2: {
        fontSize: '.8rem',
        fontWeight: fontWeightBold,
        lineHeight: 1.2,
      },
      caption: {
        fontSize: '.8rem',
        fontWeight: fontWeightMedium,
        lineHeight: 1.2,
      },
    },
    overrides: {
      MuiBackdrop: {
        root: {
          backgroundColor:
            type === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(35,58,79,0.9)',
        },
      },
    },
  });
}
