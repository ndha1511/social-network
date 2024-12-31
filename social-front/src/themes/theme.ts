/* eslint-disable no-magic-numbers */
"use client";
import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";
import { BorderRadius } from "./types";
import { getFontSize, typography } from "./typography";

const openSans = localFont({
  src: "../assets/fonts/OpenSans.ttf",
});

export const customBorderRadius = [2, 4, 6, 8, 10, 12, 14, 18, 24, 999];

export const getBorderRadius = (size: BorderRadius): number => {
  return customBorderRadius[size];
};

const theme = createTheme({
  breakpoints: {
    // TODO: config responsive
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: getBorderRadius(BorderRadius.Full),
          fontWeight: 500,
          fontFamily: openSans.style.fontFamily,
          textTransform: "none",
        },
      },
      defaultProps: {
        variant: "outlined",
        sx: {
          ...getFontSize("regularM"),
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: openSans.style.fontFamily,
        },
      },
      defaultProps: {
        variant: "regularM",
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: getBorderRadius(BorderRadius.Full),
          "& .MuiOutlinedInput-root": {
            borderRadius: getBorderRadius(BorderRadius.Full),
          },
        },
      },
      defaultProps: {
        size: "small",
        variant: "outlined",
        slotProps: {
          input: {
            sx: {
              fontFamily: openSans.style.fontFamily,
              ...getFontSize("regularM"),
            },
          },
          formHelperText: {
            sx: {
              fontFamily: openSans.style.fontFamily,
              ...getFontSize("regularM"),
            },
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#7C4DFF",
      dark: "#5837B5",
    },
    secondary: {
      main: "#FB0FFF",
      dark: "#B20BB5",
    },
    warning: {
      main: "#FF961F",
      dark: "#E8891C",
    },
    success: {
      main: "#00854E",
      dark: "#004F2E",
    },
    error: {
      main: "#EA0001",
      dark: "#c50018",
    },
    info: {
      main: "#4761E6",
      dark: "#004db2",
    },
  },
  typography: {
    ...typography,
  },
});

export default theme;
