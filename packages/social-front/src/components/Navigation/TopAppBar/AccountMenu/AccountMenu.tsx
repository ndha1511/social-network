import PopoverLayout from "@/components/Layout/PopoverLayout";
import Box from "@mui/material/Box";
import React from "react";

const AccountMenu = () => {
  return (
    <PopoverLayout
      actionType="avatar"
      actionProps={{
        avatar:
          "https://static.vecteezy.com/system/resources/previews/017/047/854/original/cute-cat-illustration-cat-kawaii-chibi-drawing-style-cat-cartoon-vector.jpg",
        sx: {
          cursor: "pointer",
        },
      }}
      popoverContent={
        <Box width={500} height={600}>
          test
        </Box>
      }
      toolTip="Tài khoản"
    />
  );
};

export default AccountMenu;
