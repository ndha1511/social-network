import theme from "@/themes/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      {/* TODO: custom dark mode */}
      <ThemeProvider theme={theme} noSsr defaultMode="system">
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default Provider;
