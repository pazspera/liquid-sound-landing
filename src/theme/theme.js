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
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "'Optimal LT Std', serif",
    },
    body2: {
      fontFamily: "'Optimal LT Std', serif",
    },
    button: {
      fontFamily: "'Optimal LT Std', serif",
    },
    subtitle1: {
      fontFamily: "'Optimal LT Std', serif",
    },
    subtitle2: {
      fontFamily: "'Optimal LT Std', serif",
    },
    caption: {
      fontFamily: "'Optimal LT Std', serif",
    },
    overline: {
      fontFamily: "'Optimal LT Std', serif",
    }
  }
});

export default theme;