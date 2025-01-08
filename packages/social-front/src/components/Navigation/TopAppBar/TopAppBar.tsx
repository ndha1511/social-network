import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";

import IconButton from "@/components/Inputs/Buttons/IconButton";
import TopAppBarSearch from "./components/Search";
import TabList from "./components/TabList";

const TopAppBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid container display="flex" flex={1}>
          <Grid
            size={3}
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
          >
            <Avatar>H</Avatar>

            <TopAppBarSearch />
          </Grid>
          <Grid size={6} display="flex" justifyContent="center">
            <TabList />
          </Grid>
          <Grid
            size={3}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            gap={1}
          >
            <Avatar>
              <IconButton icon="apps" />
            </Avatar>
            <Avatar>
              <IconButton icon="notifications" />
            </Avatar>
            <Avatar>
              <IconButton icon="forum" />
            </Avatar>
            <Avatar>
              <IconButton icon="account_circle" />
            </Avatar>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
