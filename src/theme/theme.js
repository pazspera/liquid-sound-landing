import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#242B74",
    }, 
    secondary: {
      main: "#7EBDC2",
    }
  },
  typography: {
    fontFamily: "'Optimal LT Std', serif",
    h1: {
      fontFamily: "'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
    },
  }
});

export default theme;