import {
  Container as MuiContainer,
  styled,
  experimental_sx as sx,
} from "@mui/material";

export const Container = styled(MuiContainer)(({ theme }) =>
  sx({
    [theme.breakpoints.only("sm")]: {
      px: 2,
    },
  })
);
