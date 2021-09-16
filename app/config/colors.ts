export type ColorKeys = "primary" | "secondary" | "black" | "white" | "medium";

type Colors = {
  [key in ColorKeys]: string;
};

const colors: Colors = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  black: "#000",
  white: "#fff",
  medium: "#6e6969",
};

export default colors;