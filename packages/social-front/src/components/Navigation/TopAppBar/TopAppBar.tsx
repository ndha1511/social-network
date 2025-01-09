import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid2";

import TopAppBarSearch from "./Search";
import TabList from "./TabList";
import GridColumn from "@/components/Layout/GridLayout/GridColumn";
import ApplicationList from "./ApplicationList";
import Notifications from "./Notifications";
import Messages from "./Messages";
import AccountMenu from "./AccountMenu";
import Avatar from "@/components/DataDisplay/Avatar";

const TopAppBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid container display="flex" flex={1}>
          <GridColumn col={3}>
            {/* TODO: svg logo */}
            <Avatar avatar="https://static.vecteezy.com/system/resources/previews/017/047/854/original/cute-cat-illustration-cat-kawaii-chibi-drawing-style-cat-cartoon-vector.jpg" />
            <TopAppBarSearch />
          </GridColumn>

          <GridColumn col={6} justifyContent="center">
            <TabList />
          </GridColumn>

          <GridColumn col={3} justifyContent="flex-end">
            <ApplicationList />
            <Messages />
            <Notifications />
            <AccountMenu />
          </GridColumn>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
