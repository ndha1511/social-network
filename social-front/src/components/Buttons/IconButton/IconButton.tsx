/* eslint-disable no-restricted-imports */
import Icon from "@/components/Display/Icon";
import MuiIconButton from "@mui/material/IconButton";
import { IconButtonProps } from "./types";

const IconButton = ({
  icon,
  variantIcon,
  onClick,
  ...muiProps
}: IconButtonProps) => {
  return (
    <MuiIconButton
      onClick={
        onClick
          ? onClick
          : () => {
              // TODO: open snackbar
              alert("default click");
            }
      }
      {...muiProps}
    >
      <Icon icon={icon} variantIcon={variantIcon} />
    </MuiIconButton>
  );
};

export default IconButton;
