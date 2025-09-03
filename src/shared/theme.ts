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
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#333',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: ' #f2f4f8',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#001233',
          '&.Mui-checked': {
            color: '#001233',
          },
        },
      },
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
      paper: '#0A111C',
    },
    text: {
      primary: '#fff',
      secondary: '#aaa',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#101c2f',
        },
      },
    },
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
