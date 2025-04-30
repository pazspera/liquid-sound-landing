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
      fontWeight: 400,
    },
    h2: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 400,
    },
    h3: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 400,
    },
    h4: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 400,
    },
    h5: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 400,
    },
    h6: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "'Optimal LT Std', serif",
    },
    body2: {
      fontFamily: "'Optimal LT Std', serif",
    },
    button: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      letterSpacing: "2px",
    },
    subtitle1: {
      fontFamily: "'Optimal LT Std', serif",
    },
    subtitle2: {
      fontFamily: "'Optimal LT Std', serif",
      fontWeight: 600,
    },
    caption: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
    },
    overline: {
      fontFamily: "'Optimal LT Std', serif",
    }
  }
});

export default theme;