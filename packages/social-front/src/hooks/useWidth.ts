import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useMemo } from "react";

const useWidth = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("mobile", "tablet"));
  const isTablet = useMediaQuery(theme.breakpoints.between("tablet", "laptop"));
  const isLaptop = useMediaQuery(
    theme.breakpoints.between("laptop", "desktop")
  );

  const width: "mobile" | "tablet" | "laptop" | "desktop" = useMemo(() => {
    if (isMobile) {
      return "mobile";
    }
    if (isTablet) {
      return "tablet";
    }
    if (isLaptop) {
      return "laptop";
    }
    return "desktop";
  }, [isMobile, isTablet, isLaptop]);

  const isCompact = useMemo(() => {
    return ["mobile", "tablet"].includes(width);
  }, [width]);

  return { width, isCompact };
};

export default useWidth;
