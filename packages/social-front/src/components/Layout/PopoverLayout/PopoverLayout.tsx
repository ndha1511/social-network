import Avatar, { AvatarProps } from "@/components/DataDisplay/Avatar";
import { PopoverLayoutProps } from "./types";
import Button, { ButtonProps } from "@/components/Inputs/Buttons/Button";
import IconButton, {
  IconButtonProps,
} from "@/components/Inputs/Buttons/IconButton";
import MuiPopover from "@mui/material/Popover/Popover";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

const PopoverLayout = <T extends "avatar" | "icon" | "button">({
  popoverContent,
  actionProps,
  actionType,
  toolTip,
}: PopoverLayoutProps<T>) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      {actionType === "avatar" && (
        <Avatar
          tooltip={toolTip}
          handleClick={handleClick}
          {...(actionProps as AvatarProps)}
        />
      )}
      {actionType === "button" && (
        <Tooltip title={toolTip}>
          <Button onClick={handleClick} {...(actionProps as ButtonProps)} />
        </Tooltip>
      )}
      {actionType === "icon" && (
        <Tooltip title={toolTip}>
          <IconButton
            onClick={handleClick}
            {...(actionProps as IconButtonProps)}
          />
        </Tooltip>
      )}
      <MuiPopover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {popoverContent}
      </MuiPopover>
    </>
  );
};

export default PopoverLayout;
