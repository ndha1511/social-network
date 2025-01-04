import Alert from "@/components/Feedback/Alert";
import { ReactNode } from "react";

const CompactLayout = ({}: { children: ReactNode }) => {
  return (
    <Alert
      severity="warning"
      color="warning"
      message="The compact layout has not been designed yet."
    />
  );
};

export default CompactLayout;
