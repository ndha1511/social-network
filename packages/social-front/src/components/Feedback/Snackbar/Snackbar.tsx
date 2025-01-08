import MuiSnackbar from "@mui/material/Snackbar";
import { SnackbarProps } from "./types";
import useSnackbar from "./reducer/hooks";
import Alert from "../Alert";

const Snackbar = ({
  // eslint-disable-next-line no-magic-numbers -- close snackbar after 5 seconds
  autoHideDuration = 5000,
  ...muiProps
}: SnackbarProps) => {
  const { closeSnackbar, snackbarState } = useSnackbar();
  return (
    <MuiSnackbar
      onClose={closeSnackbar}
      open={snackbarState.open}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{
        vertical: snackbarState.vertical || "bottom",
        horizontal: snackbarState.horizontal || "left",
      }}
      {...muiProps}
    >
      <Alert
        severity={snackbarState.severity}
        color={snackbarState.severity}
        onClose={closeSnackbar}
        message={snackbarState.message}
      />
    </MuiSnackbar>
  );
};

export default Snackbar;
