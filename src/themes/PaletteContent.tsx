import { presetPalettes } from "@ant-design/colors";

const { red, gold, cyan, green, grey } = presetPalettes;
const greyColors = {
  0: grey[0],
  50: grey[1],
  100: grey[2],
  200: grey[3],
  300: grey[4],
  400: grey[5],
  500: grey[6],
  600: grey[7],
  700: grey[8],
  800: grey[9],
  900: grey[10],
  A50: grey[15],
  A100: grey[11],
  A200: grey[12],
  A400: grey[13],
  A700: grey[14],
  A800: grey[16]
};

const Palette = () => ({
  background: {
    default: "rgb(25, 22, 43)",
    paper: "#0f0e18",
  },
  text: {
    primary: "#fdfdfd",
    secondary: grey[3],
    disabled: grey[2]
  },
  action: {
    disabled: grey[3]
  },
  primary: {
    light: "#afcce9",
    main: "#9bbfe4",
    dark: "#87b2de",
    contrastText: "#252729"
  },
  secondary: {
    light: "#97b5ac",
    main: "#7ea398",
    dark: "#5f867b",
    contrastText: "#252729"
  },
  success: {
    light: green[3],
    main: green[5],
    dark: green[7],
    contrastText: "#ffffff"
  },
  warning: {
    light: gold[3],
    main: gold[5],
    dark: gold[7],
    contrastText: "#0b1910"
  },
  error: {
    light: red[2],
    main: red[4],
    dark: red[7],
    contrastText: "#ffffff"
  },
  info: {
    light: cyan[3],
    main: cyan[5],
    dark: cyan[7],
    contrastText: "#ffffff"
  },
  grey: greyColors
});

export default Palette;