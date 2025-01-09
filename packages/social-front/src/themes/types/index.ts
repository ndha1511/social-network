import { SimplePaletteColorOptions } from "@mui/material/styles";

/* eslint-disable no-magic-numbers */
declare module "@mui/material/styles" {
  /** Define variant for typography */
  interface TypographyVariants {
    regularXs: React.CSSProperties;
    regularS: React.CSSProperties;
    regularM: React.CSSProperties;
    regularL: React.CSSProperties;
    regularXl: React.CSSProperties;
    boldXs: React.CSSProperties;
    boldS: React.CSSProperties;
    boldM: React.CSSProperties;
    boldL: React.CSSProperties;
    boldXl: React.CSSProperties;
    textH1: React.CSSProperties;
    textH2: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    regularXs?: React.CSSProperties;
    regularS?: React.CSSProperties;
    regularM?: React.CSSProperties;
    regularL?: React.CSSProperties;
    regularXl?: React.CSSProperties;
    boldXs?: React.CSSProperties;
    boldS?: React.CSSProperties;
    boldM?: React.CSSProperties;
    boldL?: React.CSSProperties;
    boldXl?: React.CSSProperties;
    textH1?: React.CSSProperties;
    textH2?: React.CSSProperties;
  }

  /** break points */
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }

  interface Palette {
    surface1: SimplePaletteColorOptions;
    surface2: SimplePaletteColorOptions;
    surface3: SimplePaletteColorOptions;
    surface4: SimplePaletteColorOptions;
    surface5: SimplePaletteColorOptions;
    surface6: SimplePaletteColorOptions;
    surface7: SimplePaletteColorOptions;
    darkGray: string;
  }

  interface PaletteOptions {
    surface1?: SimplePaletteColorOptions;
    surface2?: SimplePaletteColorOptions;
    surface3?: SimplePaletteColorOptions;
    surface4?: SimplePaletteColorOptions;
    surface5?: SimplePaletteColorOptions;
    surface6?: SimplePaletteColorOptions;
    surface7?: SimplePaletteColorOptions;
    darkGray?: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    regularXs: true;
    regularS: true;
    regularM: true;
    regularL: true;
    regularXl: true;
    boldXs: true;
    boldS: true;
    boldM: true;
    boldL: true;
    boldXl: true;
    textH1: true;
    textH2: true;
  }
}

export enum BorderRadius {
  Xs = 0,
  S = 1,
  M = 2,
  L = 3,
  Xl = 4,
  Xxl = 5,
  Ultra = 6,
  Huge = 7,
  Massive = 8,
  Full = 9,
}
