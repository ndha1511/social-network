"use client";
import { getBorderRadius } from "@/themes/theme";
import { BorderRadius } from "@/themes/types";
import MuiGlobalStyles from "@mui/material/GlobalStyles";

const GlobalStyles = () => {
  return (
    <MuiGlobalStyles
      styles={{
        body: {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        "*::-webkit-scrollbar": {
          width: "8px",
        },
        "*::-webkit-scrollbar-track": {
          background: "#ebe9e7",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "#b0b5c0",
          borderRadius: getBorderRadius(BorderRadius.Xl),
        },
        "*::-webkit-scrollbar-thumb:hover": {
          background: "#a0a5af",
        },
      }}
    />
  );
};

export default GlobalStyles;
