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
  lightgrey: string;
  backgroundLayout: string;
  transparent: string;
  linkColor: string;
  greyOpac50: string;
  greyOpac10: string;
};

export type ThemeBase = {
  dark: boolean;
  colors: DefaultThemColors;
  fonts: Fonts;
};

export type Theme = ThemeBase;

export type Font = {
  fontFamily: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
};
export type Fonts = {
  primary: Font;
  primarySemiBold: Font;
  primaryBold: Font;
  secondary: Font;
  secondarySemiBold: Font;
  secondaryBold: Font;
};
