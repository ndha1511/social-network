import Alert from "@mui/material/Alert";
import { ReactNode } from "react";

const CompactLayout = ({}: { children: ReactNode }) => {
  return (
    <Alert severity="warning">
      The compact layout has not been designed yet.
    </Alert>
  );
};

export default CompactLayout;
