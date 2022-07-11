type DefaultThemColors = {
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  background: string;
  error: string;
  textColor: string;
  shadowColor: string;
  black: string;
  white: string;
  backgroundLayout: string;
};

export type ThemeBase = {
  dark: boolean;
  colors: DefaultThemColors;
};

export type Theme = ThemeBase;