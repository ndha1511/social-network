import { AvatarProps } from "@/components/DataDisplay/Avatar";
import { ButtonProps } from "@/components/Inputs/Buttons/Button";
import { IconButtonProps } from "@/components/Inputs/Buttons/IconButton";

export interface PopoverLayoutProps<T extends "avatar" | "icon" | "button"> {
  actionType: T;
  popoverContent: React.ReactNode;
  actionProps: TypeProps[T];
  toolTip?: string;
}

export interface TypeProps {
  avatar: AvatarProps;
  icon: IconButtonProps;
  button: ButtonProps;
}
