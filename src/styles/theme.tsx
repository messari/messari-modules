import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";

import { createMessariTheme } from "./createMessariTheme";

export const themes = {
  day: createMessariTheme("light"),
  night: createMessariTheme("dark"),
};

export type ThemeName = keyof typeof themes;

const defaultName: ThemeName = "night";

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={themes[defaultName]}>{children}</MuiThemeProvider>
  );
};
