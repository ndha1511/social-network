export interface SnackbarState {
  open?: boolean;
  message?: string;
  severity?: "success" | "info" | "warning" | "error";
  vertical?: "top" | "bottom";
  horizontal?: "left" | "center" | "right";
}
