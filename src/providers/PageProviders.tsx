import { CacheProvider, EmotionCache } from "@emotion/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { createEmotionCache } from "theme";
import { MUIThemeProvider } from "./muiThemeProvider/MUIThemeProvider";
import { SnackbarProvider } from "./snackbarProvider/SnackbarProvider";

const clientSideEmotionCache = createEmotionCache();

interface PageProvidersProps {
  emotionCache?: EmotionCache;
  children: React.ReactNode;
  session: Session | null;
}

export function PageProviders({
  children,
  emotionCache = clientSideEmotionCache,
  session,
}: PageProvidersProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <CacheProvider value={emotionCache}>
        <MUIThemeProvider>
          <SnackbarProvider>
            <SessionProvider session={session}>{children}</SessionProvider>
          </SnackbarProvider>
        </MUIThemeProvider>
      </CacheProvider>
    </ThemeProvider>
  );
}
