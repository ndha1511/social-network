import { ReactNode } from "react";

export interface GridColumnProps {
  children?: ReactNode[] | ReactNode;
  col: number;
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
}
