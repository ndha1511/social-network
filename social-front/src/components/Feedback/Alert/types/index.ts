import { AlertProps as MuiAlertProps } from "@mui/material/Alert/index";

export interface AlertProps extends MuiAlertProps {
  message?: string;
}
