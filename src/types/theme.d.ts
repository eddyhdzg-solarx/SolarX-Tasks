import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      gradient: string;
      glassBackground: {
        backgroundColor: string;
        backdropFilter: string;
      };
      blue: string;
      red: string;
      teal: string;
      yellow: string;
    };
  }

  interface ThemeOptions {
    custom?: {
      gradient?: string;
      glassBackground?: {
        backgroundColor?: string;
        backdropFilter?: string;
      };
      blue?: string;
      red?: string;
      teal?: string;
      yellow?: string;
    };
  }

  interface BreakpointOverrides {
    "2xl": true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    blue: true;
    red: true;
    teal: true;
    yellow: true;
  }
}
