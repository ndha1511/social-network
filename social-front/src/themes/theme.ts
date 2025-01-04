/* eslint-disable no-magic-numbers */
"use client";
import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";
import { BorderRadius } from "./types";
import { getFontSize, typography } from "./typography";
import { palette } from "./palette";
import { shadows } from "./shadow";

const openSans = localFont({
  src: "../assets/fonts/OpenSans.ttf",
});

export const customBorderRadius = [2, 4, 6, 8, 10, 12, 14, 18, 24, 999];

export const getBorderRadius = (size: BorderRadius): number => {
  return customBorderRadius[size];
};

const theme = createTheme({
  breakpoints: {
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
        root: ({ theme }) => ({
          borderRadius: getBorderRadius(BorderRadius.Full),
          fontFamily: openSans.style.fontFamily,
          textTransform: "none",
          "&.MuiButton-contained": {
            boxShadow: theme.shadows[1],
            "&:hover": {
              boxShadow: theme.shadows[2],
            },
          },
        }),
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
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: theme.shadows[1],
          borderRadius: 0,
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: theme.shadows[1],
          borderRadius: getBorderRadius(BorderRadius.Xl),
        }),
      },
    },
    MuiSnackbar: {
      defaultProps: {
        sx: {
          "& .MuiPaper-root": {
            borderRadius: 0.5,
          },
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        sx: {
          borderRadius: 0,
        },
      },
    },
  },
  palette: palette,
  shadows: shadows,
  typography: typography,
});

export default theme;
