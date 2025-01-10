/* eslint-disable no-restricted-imports */
import React from "react";
import { AvatarProps } from "./types";
import MuiAvatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Icon from "../Icon";
import IconButton from "@/components/Inputs/Buttons/IconButton";
import { getActiveColorIcon, getBgActiveColorAvatar } from "./utils";
import Badge from "@mui/material/Badge";

const Avatar = ({
  active,
  sx,
  tooltip,
  variant = "primary",
  type = "image",
  handleClick,
  badgeCount = 0,
  avatar,
}: AvatarProps) => {
  return (
    <Tooltip title={tooltip}>
      <Badge
        badgeContent={badgeCount}
        color="error"
        sx={{
          "& .MuiBadge-badge": {
            top: 8,
            right: 4,
          },
        }}
      >
        <MuiAvatar
          sx={{
            ...sx,
            bgcolor: (theme) => getBgActiveColorAvatar(theme, variant, active),
            ":hover": {
              bgcolor: (theme) => getBgActiveColorAvatar(theme, variant, true),
            },
          }}
          src={type === "image" ? avatar : undefined}
          onClick={type === "image" ? handleClick : undefined}
        >
          {type === "icon" && (
            <Icon
              icon={avatar}
              sx={{
                color: (theme) => getActiveColorIcon(theme, variant, active),
              }}
            />
          )}
          {type === "icon-button" && (
            <IconButton
              icon={avatar}
              onClick={handleClick}
              sx={{
                color: (theme) => getActiveColorIcon(theme, variant, active),
              }}
            />
          )}
        </MuiAvatar>
      </Badge>
    </Tooltip>
  );
};

export default Avatar;
