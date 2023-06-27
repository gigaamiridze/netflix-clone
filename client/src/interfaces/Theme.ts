export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  transition: string;
}

interface IColors {
  white: string;
  black: string;
  main: string;
  transparentBlack: string;
  gray: string;
  lightGray: string;
}

interface IFonts {
  primary: string;
}