import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#4f8e3e',
    },
  },
  typography: {
    fontFamily: [
      "Helvedica Neue",
    // '-apply-system',
    //'BlinkMacSystemFont',
    //'Segoe UI',
    //'Roboto',
    //'Arial',
    //'sans-serif',
    //"Apple Color Emoji",
    //"Segoe UI Emoji",
    //"Segoe UI Symbol",
  ].join(','),
  }
});

theme = responsiveFontSizes(theme);

export default theme;