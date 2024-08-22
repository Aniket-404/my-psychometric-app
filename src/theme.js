import { createTheme } from '@mui/material/styles';

// Create a light theme
const theme = createTheme({
  palette: {
    mode: 'light', // Ensure mode is set to 'light'
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

export default theme;
