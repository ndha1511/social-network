import { Controller, FieldValues, Path } from "react-hook-form";
import { ControlTextFieldProps } from "./types";
import TextField from "../TextField";

const ControlTextField = <
  TField extends FieldValues,
  TName extends Path<TField>,
>({
  control,
  name,
  ...muiProps
}: ControlTextFieldProps<TField, TName>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField field={field} fieldError={error} {...muiProps} />
      )}
    />
  );
};

export default ControlTextField;
