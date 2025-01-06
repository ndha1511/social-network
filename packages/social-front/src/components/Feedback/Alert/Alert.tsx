import Typography from "@mui/material/Typography";
import MuiAlert from "@mui/material/Alert";
import { AlertProps } from "./types";

const Alert = ({ message, ...muiProps }: AlertProps) => {
  return (
    <MuiAlert
      {...muiProps}
      slotProps={{
        closeButton: {
          color: muiProps.color,
        },
      }}
    >
      <Typography color={muiProps.color}>{message}</Typography>
    </MuiAlert>
  );
};

export default Alert;
