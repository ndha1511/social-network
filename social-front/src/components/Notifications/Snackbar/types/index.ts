import { SnackbarProps as MuiSnackbarProps } from "@mui/material/Snackbar/index";

export interface SnackbarProps extends MuiSnackbarProps {
  message?: string;
  severity?: "success" | "info" | "warning" | "error";
}
