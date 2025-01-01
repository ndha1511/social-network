import Alert from "@mui/material/Alert";
import MuiSnackbar from "@mui/material/Snackbar";
import { SnackbarProps } from "./types";
import useSnackbar from "./reducer/hooks";

const Snackbar = ({
  severity = "warning",
  message,
  // eslint-disable-next-line no-magic-numbers -- close snackbar after 5 seconds
  autoHideDuration = 5000,
  ...muiProps
}: SnackbarProps) => {
  const { closeSnackbar } = useSnackbar();
  return (
    <MuiSnackbar
      onClose={closeSnackbar}
      autoHideDuration={autoHideDuration}
      {...muiProps}
    >
      <Alert severity={severity}>{message}</Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
