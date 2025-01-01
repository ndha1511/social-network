/* eslint-disable no-restricted-imports */
import MuiIcon from "@mui/material/Icon";
import { IconProps } from "./types";

const Icon = ({ icon, variantIcon = "filled", ...muiProps }: IconProps) => {
  const getIconClass = (): string => {
    if (variantIcon === "filled") {
      return "material-icons";
    }
    if (variantIcon === "outlined") {
      return "material-icons-outlined";
    }
    return "material-icons-round";
  };
  return (
    <MuiIcon baseClassName={getIconClass()} {...muiProps}>
      {icon}
    </MuiIcon>
  );
};

export default Icon;
