"use client";
import { store } from "@/stores/store";
import theme from "@/themes/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      {/* TODO: custom dark mode */}
      <ThemeProvider theme={theme} noSsr defaultMode="system">
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default Provider;
