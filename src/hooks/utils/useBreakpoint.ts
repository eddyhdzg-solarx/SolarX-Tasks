import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export function useBreakpoint(breakpoint: Breakpoint) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(breakpoint));
}
