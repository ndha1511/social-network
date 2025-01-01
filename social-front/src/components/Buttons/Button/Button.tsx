// eslint-disable-next-line no-restricted-imports
import MuiButton from "@mui/material/Button";
import { ButtonProps } from "./types";

const Button = ({ children, type, onClick, ...muiProps }: ButtonProps) => {
  return (
    <MuiButton
      type={type}
      onClick={
        type === "submit"
          ? undefined
          : onClick
            ? onClick
            : () => {
                // TODO: open snackbar
                alert("default action");
              }
      }
      {...muiProps}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
