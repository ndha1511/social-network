/* eslint-disable no-restricted-imports */
import React from "react";
import MuiTextField from "@mui/material/TextField";
import { FieldValues } from "react-hook-form";
import { TextFieldProps } from "./types";

const TextField = <TField extends FieldValues>({
  field,
  fieldError,
  ...muiProps
}: TextFieldProps<TField>) => {
  const { value, onChange, ...muiPropsRest } = muiProps || {};
  return (
    <MuiTextField
      value={field?.value || value || ""}
      onChange={field?.onChange || onChange}
      error={!!fieldError}
      helperText={fieldError?.message}
      {...muiPropsRest}
    />
  );
};

export default TextField;
