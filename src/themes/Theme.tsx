import { createTheme } from '@mui/material/styles';
import Palette from "./Palette";
import Typography from "./Typography";

const palette = Palette();
const typography = Typography('Poppins, "Helvetica Neue", sans-serif');

const Theme = createTheme({
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

export default Theme;