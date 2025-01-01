/* eslint-disable no-restricted-imports */
import Icon from "@/components/Display/Icon";
import MuiIconButton from "@mui/material/IconButton";
import { IconButtonProps } from "./types";
import useSnackbar from "@/components/Notifications/Snackbar/reducer/hooks";

const IconButton = ({
  icon,
  variantIcon,
  onClick,
  ...muiProps
}: IconButtonProps) => {
  const { openDevSnackbar } = useSnackbar();
  return (
    <MuiIconButton
      onClick={
        onClick
          ? onClick
          : () => {
              openDevSnackbar();
            }
      }
      {...muiProps}
    >
      <Icon icon={icon} variantIcon={variantIcon} />
    </MuiIconButton>
  );
};

export default IconButton;
