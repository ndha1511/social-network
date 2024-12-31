import { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField/index";
import { FieldError, FieldValue, FieldValues } from "react-hook-form";

export interface TextFieldCustomProps<TField extends FieldValues> {
  field?: FieldValue<TField>;
  fieldError?: FieldError;
}

export type TextFieldProps<TField extends FieldValues> =
  TextFieldCustomProps<TField> & MuiTextFieldProps;
