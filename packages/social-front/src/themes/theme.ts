/* eslint-disable no-magic-numbers */
"use client";
import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";
import { BorderRadius } from "./types";
import { getFontSize, typography } from "./typography";
import { palette } from "./palette";
import { shadows } from "./shadow";
import { CSSObject } from "styled-components";

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
        root: ({ theme, ownerState }) => {
          const baseStyles: CSSObject = {
            borderRadius: getBorderRadius(BorderRadius.Full),
            fontFamily: openSans.style.fontFamily,
            textTransform: "none",
            "&.MuiButton-contained": {
              boxShadow: theme.shadows[1],
              "&:hover": {
                boxShadow: theme.shadows[2],
              },
            },
          };

          const getColor = (): CSSObject => {
            switch (ownerState.color) {
              case "primary":
                return {
                  "&:hover": {
                    backgroundColor: theme.palette.surface1.main,
                  },
                };
              case "secondary":
                return {
                  "&:hover": {
                    backgroundColor: theme.palette.surface2.main,
                  },
                };
              case "warning":
                return {
                  "&:hover": {
                    backgroundColor: theme.palette.surface3.main,
                  },
                };
              case "success": {
                return {
                  "&:hover": {
                    backgroundColor: theme.palette.surface4.main,
                  },
                };
              }
              case "info": {
                return {
                  "&:hover": {
                    backgroundColor: theme.palette.surface5.main,
                  },
                };
              }
              case "error": {
                return {
                  "&:hover": {
                    backgroundColor: theme.palette.surface6.main,
                  },
                };
              }
              default:
                return {};
            }
          };

          const customState = (): CSSObject => {
            switch (ownerState.variant) {
              case "outlined":
                return {
                  ...getColor(),
                };
              default:
                return {};
            }
          };

          return { ...baseStyles, ...customState };
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
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: getBorderRadius(BorderRadius.Xs),
          "&:hover": {
            backgroundColor: theme.palette.surface7.main,
          },
        }),
      },
    },
    MuiAvatar: {
      defaultProps: {
        sx: (theme) => ({
          backgroundColor: theme.palette.surface7.main,
        }),
      },
    },
  },
  palette: palette,
  shadows: shadows,
  typography: typography,
});

export default theme;
