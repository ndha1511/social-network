// eslint-disable-next-line no-restricted-imports
import MuiButton from "@mui/material/Button";
import { ButtonProps } from "./types";
import useSnackbar from "@/components/Feedback/Snackbar/reducer/hooks";

const Button = ({ children, type, onClick, ...muiProps }: ButtonProps) => {
  const { openDevSnackbar } = useSnackbar();
  return (
    <MuiButton
      type={type}
      onClick={
        type === "submit"
          ? undefined
          : onClick
            ? onClick
            : () => {
                openDevSnackbar();
              }
      }
      {...muiProps}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
