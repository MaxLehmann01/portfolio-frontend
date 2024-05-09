import { createTheme } from '@mui/material/styles';
import PaletteAdmin from "./PaletteAdmin";
import Typography from "./Typography";

const palette = PaletteAdmin();
const typography = Typography('Poppins, "Helvetica Neue", sans-serif');

const ThemeAdmin = createTheme({
  typography,
  palette,
  
});

export default ThemeAdmin;