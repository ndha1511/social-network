import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { SnackbarState } from "../types";
import { openSnackbar as openSnackbarReducer } from "../SnackbarReducer";
import { closeSnackbar as closeSnackbarReducer } from "../SnackbarReducer";

const useSnackbar = () => {
  const snackbarState: SnackbarState = useAppSelector(
    (state) => state.snackbar
  );
  const dispatch = useAppDispatch();

  const openDevSnackbar = () => {
    dispatch(
      openSnackbarReducer({
        message: "Feature under development",
        severity: "warning",
      })
    );
  };

  const closeSnackbar = () => {
    dispatch(closeSnackbarReducer());
  };

  const openSnackbar = (
    message: string,
    severity?: SnackbarState["severity"],
    vertical?: SnackbarState["vertical"],
    horizontal?: SnackbarState["horizontal"]
  ) => {
    dispatch(openSnackbarReducer({ message, severity, vertical, horizontal }));
  };
  return { snackbarState, openDevSnackbar, openSnackbar, closeSnackbar };
};

export default useSnackbar;
