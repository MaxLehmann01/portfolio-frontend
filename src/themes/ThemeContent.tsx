import { createTheme } from '@mui/material/styles';
import PaletteContent from "./PaletteContent";
import Typography from "./Typography";

const palette = PaletteContent();
const typography = Typography('Poppins, "Helvetica Neue", sans-serif');

const ThemeContent = createTheme({
  typography,
  palette,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: "linear-gradient(#121315, rgba(11, 8, 29, 1))"
        }
      }
    }
  }
});

export default ThemeContent;