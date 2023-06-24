export interface ITheme {
  colors: IColors;
  fonts: IFonts;
}

interface IColors {
  white: string;
  black: string;
  main: string;
}

interface IFonts {
  primary: string;
}