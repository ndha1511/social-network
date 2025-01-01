import { IconProps as MuiIconProps } from "@mui/material/Icon/index";

/**
 * @property [icon]: snack_case icon name
 */
export interface IconProps extends MuiIconProps {
  icon: string;
  variantIcon?: "filled" | "outlined" | "rounded";
}
