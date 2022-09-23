import { styled, experimental_sx as sx } from "@mui/material";

export const Notch = styled("div")(
  sx({
    minHeight: "env(safe-area-inset-top)",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: "drawer",
    bgcolor: "background.default",
  })
);
