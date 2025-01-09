import Grid from "@mui/material/Grid2";

import { GridColumnProps } from "./types";

const GridColumn = ({ children, col, justifyContent }: GridColumnProps) => {
  return (
    <Grid
      size={col}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent={justifyContent}
      gap={1}
    >
      {children}
    </Grid>
  );
};

export default GridColumn;
