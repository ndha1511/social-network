"use client";

import { ReactNode } from "react";
import CompactLayout from "./CompactLayout/CompactLayout";
import ExpandLayout from "./ExpandLayout/ExpandLayout";

import Snackbar from "@/components/Feedback/Snackbar";
import useWidth from "@/hooks/useWidth";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { width } = useWidth();
  return (
    <>
      {width === "mobile" ? (
        <CompactLayout>{children}</CompactLayout>
      ) : (
        <ExpandLayout>{children}</ExpandLayout>
      )}
      <Snackbar />
    </>
  );
};

export default AppLayout;
