/* eslint-disable no-restricted-imports */

import MuiIconButton from "@mui/material/IconButton";
import { IconButtonProps } from "./types";
import Icon from "@/components/DataDisplay/Icon";
import useSnackbar from "@/components/Feedback/Snackbar/reducer/hooks/useSnackbar";

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
