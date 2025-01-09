import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { ReactNode } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TopAppBar from "@/components/Navigation/TopAppBar";
import NavigationRail from "@/components/Navigation/NavigationRail/NavigationRail";

const ExpandLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack>
      <TopAppBar />
      <Stack height="100vh">
        <Toolbar />
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" />}
          flex={1}
        >
          <NavigationRail />
          <Box
            display="flex"
            p={2}
            flexGrow={1}
            overflow="auto"
            maxHeight="calc(100vh - 56px)"
          >
            {children}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ExpandLayout;
