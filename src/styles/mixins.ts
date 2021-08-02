import { hexToRgb } from "@material-ui/core";
import createMixins from "@material-ui/core/styles/createMixins";
import { createTheme } from "@material-ui/core/styles";
import { Palette } from "@material-ui/core/styles/createPalette";

// get original configs to be used for following `createMixins`
const { breakpoints, spacing, shape } = createTheme();

const desktopHeaderHeight = 72;

const theme = (palette: Palette) => {
  const isLight = palette.type === "light";

  return createMixins(breakpoints, spacing, {
    messari: {
      desktopHeaderHeight,
      pageContainer: {
        width: "100%",
        height: `calc(100vh - ${desktopHeaderHeight}px)`,
        overflow: "auto",
        position: "relative",
        zIndex: 1,
        "@media print": {
          height: "auto",
        },
      },
      infoPane: {
        backgroundColor: palette.info.light,
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: palette.divider,
      },
      darkBorder: {
        borderWidth: isLight ? 0 : 1,
        borderStyle: "solid",
        borderColor: isLight ? "transparent" : palette.divider,
      },
      lightBorder: {
        borderWidth: isLight ? 1 : 0,
        borderStyle: "solid",
        borderColor: isLight ? palette.divider : "transparent",
      },
      stickyHeader: {
        position: "sticky",
        top: 0,
        zIndex: 2,
        width: "100%",
        display: "flex",
        alignItems: "center",
        borderBottom: `1px solid ${palette.divider}`,
      },
      ctaButton: {
        color: palette.primary.contrastText,
        backgroundColor: palette.primary.main,
        "&:hover": {
          backgroundColor: palette.primary.dark,
        },
      },
    },
    pattern: {
      fieldOutline: {
        padding: spacing(1),
        backgroundColor: palette.background.default,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: isLight
          ? "rgba(0, 0, 0, .23)"
          : "rgba(255, 255, 255, .23)",
        borderRadius: shape.borderRadius,
      },
      newLayer: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      listReset: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
      },
      fadeDown: {
        background: `linear-gradient(to bottom, ${hexToRgb(
          palette.background.default
        ).replace(")", ", 0)")}, ${palette.background.default})`,
      },
    },
  });
};

export default theme;
