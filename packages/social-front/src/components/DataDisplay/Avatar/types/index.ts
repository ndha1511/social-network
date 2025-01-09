import { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar/index";

export interface AvatarProps {
  active?: boolean;
  tooltip?: string;
  sx?: MuiAvatarProps["sx"];
  type?: "icon" | "icon-button" | "image";
  variant?: "primary" | "secondary" | "warning" | "error" | "success" | "info";
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
  avatar: string;
  badgeCount?: number;
}
