import { createTheme } from '@mui/material/styles';
import { teal, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: teal[500],
    },
  },
});

export default theme
