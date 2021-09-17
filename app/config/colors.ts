interface Colors {
  primary: string;
  secondary: string;
  black: string;
  white: string;
  medium: string;
  light: string;
  dark: string;
  danger: string;
}

export type ColorKeys = keyof Colors;

const colors: Colors = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  black: "#000",
  white: "#fff",
  medium: "#6e6969",
  light: '#f8f4f4',
  dark: '#0c0c0c',
  danger: '#ff5252'
};

export default colors;