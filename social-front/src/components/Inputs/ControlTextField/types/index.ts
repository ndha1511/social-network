import { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField/index";
import { Control, FieldValues, Path } from "react-hook-form";

export interface ControlTextFieldCustomProps<
  TField extends FieldValues,
  TName extends Path<TField>,
> {
  control: Control<TField>;
  name: TName;
}

export type ControlTextFieldProps<
  TField extends FieldValues,
  TName extends Path<TField>,
> = ControlTextFieldCustomProps<TField, TName> & MuiTextFieldProps;
