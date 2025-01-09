import { Theme } from "@mui/material/styles";
import { AvatarIconProps } from "../types";

export const getActiveColorIcon = (
  theme: Theme,
  variant: AvatarIconProps["variant"],
  active: AvatarIconProps["active"]
): string => {
  if (active) {
    switch (variant) {
      case "secondary":
        return theme.palette.secondary.main;
      case "info":
        return theme.palette.info.main;
      case "error":
        return theme.palette.error.main;
      case "success":
        return theme.palette.success.main;
      case "warning":
        return theme.palette.warning.main;
      default:
        return theme.palette.primary.main;
    }
  }
  return theme.palette.darkGray;
};

export const getBgActiveColorAvatar = (
  theme: Theme,
  variant: AvatarIconProps["variant"],
  active: AvatarIconProps["active"]
): string => {
  const defaultColor = theme.palette.surface7.main;
  if (active) {
    switch (variant) {
      case "secondary":
        return theme.palette.surface2.light || defaultColor;
      case "info":
        return theme.palette.surface5.light || defaultColor;
      case "error":
        return theme.palette.surface6.light || defaultColor;
      case "success":
        return theme.palette.surface4.light || defaultColor;
      case "warning":
        return theme.palette.surface3.light || defaultColor;
      default:
        return theme.palette.surface1.light || defaultColor;
    }
  }
  return defaultColor;
};
