import { common } from "@material-ui/core/colors";

const grey = {
  dark: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#EAECF0",
    300: "#DBDEE6",
    400: "#B3BACB",
    500: "#9299AA",
    600: "#6C7280",
    700: "#585E6A",
    800: "#38404A",
    900: "#16181d",
    A100: "#CCD2E0",
    A200: "#9DA5B8",
    A400: "#292F38",
    A700: "#585E6A",
  },
  light: {
    50: "#F8F9FC",
    100: "#F1F3F9",
    200: "#E9EDF6",
    300: "#D6DDEB",
    400: "#B2BACD",
    500: "#8F98AE",
    600: "#676F83",
    700: "#525C6F",
    800: "#353D50",
    900: "#171D2B",
    A100: "#CAD2E2",
    A200: "#9BA6BB",
    A400: "#272D3A",
    A700: "#515B70",
  },
};

const colors = {
  background: [common.white, "#080A0C"],
  paperBackground: [common.white, "#15181C"],
  divider: ["rgba(0, 0, 0, 0.12)", "rgba(255, 255, 255, 0.12)"],

  primary: [["#0091EA", "#AED8FD", "#004888"]],
  primaryContrast: [common.white],

  secondary: [["#8FB3C4"]],
  secondaryContrast: [common.white],
  error: [
    ["#F0162F", "#FFB9AE", "#9F1600"],
    ["#D92A00", "#FFB9AE", "#9F1600"],
  ],
  warning: [["#F19837", "#FFDBA9", "#f57c01"]],
  warningContrast: [common.white],
  success: [
    ["#00873C", "#ACFCC4", "#007624"],
    ["#009C3F", "#ACFCC4", "#007624"],
  ],

  info: [
    ["#233a4f", "#FAFBFD", "#e3edf4"],
    ["#15181C", "#15181C", "#080A0C"],
  ],
  infoContrast: ["#233a4f", common.white],

  text: [grey.light[900], grey.dark[100]],
  textSubtle: [grey.light[500], grey.dark[600]],
  selection: ["#4BA1EC", "#FAFBFD"],
  selectionHover: ["#AED8FD", "#004888"],
};

const keys = Object.keys(colors);

const mkReducer = (n: number) => (
  acc: Record<string, string>,
  key: string
) => ({
  ...acc,
  [key]: colors[key][n] || colors[key][0],
});

type MessariColors = Record<keyof typeof colors, string>;

const themeColors = {
  light: keys.reduce(mkReducer(0), {}) as MessariColors,
  dark: keys.reduce(mkReducer(1), {}) as MessariColors,
};

export { grey };

export default themeColors;
