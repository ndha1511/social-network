import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SnackbarState } from "./types";

const initialState: SnackbarState = {
  open: false,
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar: (state, action: PayloadAction<SnackbarState>) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.horizontal = action.payload.horizontal;
      state.vertical = action.payload.vertical;
    },
    closeSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
