/* eslint-disable no-magic-numbers */
"use client";
import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";
import { BorderRadius } from "./types";

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
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: openSans.style.fontFamily,
        },
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
    textH1: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    textH2: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    regularXs: {
      fontSize: "10px",
      fontWeight: "regular",
    },
    regularS: {
      fontSize: "12px",
      fontWeight: "regular",
    },
    regularM: {
      fontSize: "14px",
      fontWeight: "regular",
    },
    regularL: {
      fontSize: "16px",
      fontWeight: "regular",
    },
    regularXl: {
      fontSize: "18px",
      fontWeight: "regular",
    },
    boldXs: {
      fontSize: "10px",
      fontWeight: "bold",
    },
    boldS: {
      fontSize: "12px",
      fontWeight: "bold",
    },
    boldM: {
      fontSize: "14px",
      fontWeight: "bold",
    },
    boldL: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    boldXl: {
      fontSize: "18px",
      fontWeight: "bold",
    },
  },
});

export default theme;
