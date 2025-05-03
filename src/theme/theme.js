import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#242B74",
    }, 
    secondary: {
      main: "#7EBDC2",
    },
    background: {
      default: "#FDF8ED",
      footer: "#ACD5D8"
    },
    text: {
      primary: "#161413",
      secondary: (theme) => theme.palette.primary.main,
      white: (theme) => theme.palette.common.white,
      hoverLinks: "#489399"
    },
    common: {
      black: "#161413",
      white: "#FFFDF7"
    },
    custom: {
      grayLight: "#D0CBC8",
      grayMedium: "#837872",
      grayDark: "#2C2826",
    },
    success: {
      main: "#2A6041",
    },
    error: {
      main: "#F76E64",
    },
    info: {
      main: "#58A0D1",
    },
    warning: {
      main: "#E6A637",
    }
  },
  typography: {
    fontFamily: "'Optimal LT Std', serif",
    h1: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 400,
      fontSize: "48px"
    },
    h2: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 400,
    },
    h3: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontWeight: 400,
      fontSize: "42px",
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
      lineHeight: 1.3,
    },
    body1: {
      fontFamily: "'Optimal LT Std', serif",
    },
    body2: {
      fontFamily: "'Optimal LT Std', serif",
    },
    body3: {
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
  },
  layout: {
    sectionPadding: "48px",
    titlePadding: "0 0 16px 0",
    errorPadding: "8px 0",
    footerPadding: "24px"
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#7EBDC2",
          color: "#242B74",
          "&:hover": {
            backgroundColor: "#ACD5D8",
          }
        }
      }
    }
  }
});

theme = createTheme(theme, {
  typography: {
    h1: {
      ...theme.typography.h1,
      [theme.breakpoints.up("lg")]: {
        fontSize: "44px"
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "40px"
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "36px"
      }
    },
    h3: {
      ...theme.typography.h3,
      [theme.breakpoints.up("lg")]: {
        fontSize: "38px"
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "36px"
      },
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: "32px"
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px"
      }
    },
    body3: {
      ...theme.typography.body3,
      [theme.breakpoints.up("lg")]: {
        fontSize: "20px"
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "18px"
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px"
      }
    }
  }
})

export default theme;