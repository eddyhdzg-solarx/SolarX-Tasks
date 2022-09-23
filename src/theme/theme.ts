import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const customTheme = {
  custom: {},
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl", "2xl"],
    values: {
      xs: 0,
      sm: 400,
      md: 768,
      lg: 1024,
      xl: 1440,
      "2xl": 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-colorInherit:not(:last-of-type)": {
            borderRightColor: "inherit",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          fontWeight: 600,
        },
        icon: {
          color: "inherit",
          fontSize: "inherit",
          marginRight: 0,
        },
      },
    },
  },
  typography: {
    fontFamily:
      "'Satoshi-Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    h1: {
      fontWeight: 700,
      lineHeight: "135%",
    },
    h2: {
      fontWeight: 500,
      lineHeight: "135%",
    },
    h3: {
      fontWeight: 600,
      lineHeight: "135%",
    },
    h4: {
      fontWeight: 700,
      lineHeight: "135%",
    },
    h5: {
      fontWeight: 500,
      lineHeight: "135%",
    },
    h6: {
      fontWeight: 700,
      lineHeight: "135%",
    },
    subtitle1: {
      fontWeight: 700,
      lineHeight: "150%",
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: "150%",
    },
    body1: {
      lineHeight: "150%",
    },
    body2: {
      lineHeight: "150%",
    },
    button: {
      fontWeight: 600,
      lineHeight: "150%",
      textTransform: "none",
    },
  },
  ...customTheme,
});

export const theme = responsiveFontSizes(darkTheme, {
  disableAlign: true,
});
