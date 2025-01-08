import { ThemeOptions } from "@mui/material/styles";

export const typography: ThemeOptions["typography"] = {
  textH1: {
    fontSize: "26px",
    fontWeight: 700,
  },
  textH2: {
    fontSize: "22px",
    fontWeight: 700,
  },
  regularXs: {
    fontSize: "10px",
    fontWeight: 400,
  },
  regularS: {
    fontSize: "12px",
    fontWeight: 400,
  },
  regularM: {
    fontSize: "15px",
    fontWeight: 400,
  },
  regularL: {
    fontSize: "17px",
    fontWeight: 400,
  },
  regularXl: {
    fontSize: "20px",
    fontWeight: 400,
  },
  boldXs: {
    fontSize: "10px",
    fontWeight: 700,
  },
  boldS: {
    fontSize: "12px",
    fontWeight: 700,
  },
  boldM: {
    fontSize: "15px",
    fontWeight: 700,
  },
  boldL: {
    fontSize: "17px",
    fontWeight: 700,
  },
  boldXl: {
    fontSize: "20px",
    fontWeight: 700,
  },
};

type TypographyVariant = keyof typeof typography;

export const getFontSize = (variant: TypographyVariant) => {
  const style = typography[variant] as {
    fontSize: string;
    fontWeight: string | number;
  };
  if (!style) {
    throw new Error(`Unknown typography variant: ${variant}`);
  }
  return {
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
  };
};
