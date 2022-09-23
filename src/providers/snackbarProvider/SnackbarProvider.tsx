import { SnackbarProvider as Provider } from "notistack";
import { useBreakpoint } from "hooks";

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const md = useBreakpoint("md");
  const horizontal = md ? "right" : "center";

  return (
    <Provider
      preventDuplicate
      autoHideDuration={2500}
      anchorOrigin={{
        vertical: "bottom",
        horizontal,
      }}
    >
      {children}
    </Provider>
  );
}
