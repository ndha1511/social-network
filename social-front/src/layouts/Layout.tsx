"use client";
import Snackbar from "@/components/Notifications/Snackbar";
import useSnackbar from "@/components/Notifications/Snackbar/reducer/hooks";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ReactNode } from "react";
import CompactLayout from "./CompactLayout/CompactLayout";
import ExpandLayout from "./ExpandLayout/ExpandLayout";

const Layout = ({ children }: { children: ReactNode }) => {
  const { snackbarState } = useSnackbar();
  const theme = useTheme();
  const isCompact = useMediaQuery(theme.breakpoints.down("tablet"));
  return (
    <>
      {isCompact ? (
        <CompactLayout>{children}</CompactLayout>
      ) : (
        <ExpandLayout>{children}</ExpandLayout>
      )}
      <Snackbar
        open={snackbarState.open}
        message={snackbarState.message}
        severity={snackbarState.severity}
        anchorOrigin={{
          vertical: snackbarState.vertical || "bottom",
          horizontal: snackbarState.horizontal || "left",
        }}
      />
    </>
  );
};

export default Layout;
