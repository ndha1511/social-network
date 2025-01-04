import { IconButtonProps as MuiIconButtonProps } from "@mui/material/IconButton/index";

/**
 * @property [icon]: snack_case icon name
 */
export interface IconButtonProps extends MuiIconButtonProps {
  icon: string;
  variantIcon?: "filled" | "outlined" | "rounded";
}
