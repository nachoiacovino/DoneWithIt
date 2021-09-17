interface Colors {
  primary: string;
  secondary: string;
  black: string;
  white: string;
  medium: string;
  light: string;
}

export type ColorKeys = keyof Colors;

const colors: Colors = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  black: "#000",
  white: "#fff",
  medium: "#6e6969",
  light: '#f8f4f4'
};

export default colors;