// theme.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#ff595e',
    },
    background: {
      default: '#efefef',
      paper: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#333',
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#efefef',
    },
    secondary: {
      main: '#ffca3a',
    },
    background: {
      default: '#001233',
      paper: '#0a1a2f',
    },
    text: {
      primary: '#fff',
      secondary: '#aaa',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
});
