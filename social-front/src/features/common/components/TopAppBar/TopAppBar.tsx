import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import TextField from "@/components/Inputs/TextFields/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Icon from "@/components/DataDisplay/Icon";
import IconButton from "@/components/Inputs/Buttons/IconButton";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TopAppBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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

            <TextField
              placeholder="Nhập để tìm kiếm"
              sx={{
                width: 220,
              }}
            />
          </Grid>
          <Grid size={6} display="flex" justifyContent="center">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTabs-flexContainer": {
                  gap: 3,
                  alignItems: "center",
                  justifyContent: "center",
                },

                "& .MuiTabs-indicator": {
                  height: 3,
                },
              }}
              variant="fullWidth"
            >
              <Tab
                icon={
                  <Icon icon="home" fontSize="large" variantIcon="outlined" />
                }
                {...a11yProps(0)}
              />
              <Tab
                icon={
                  <Icon icon="group" fontSize="large" variantIcon="outlined" />
                }
                {...a11yProps(1)}
              />
              <Tab
                icon={
                  <Icon
                    icon="video_library"
                    fontSize="large"
                    variantIcon="outlined"
                  />
                }
                {...a11yProps(2)}
              />
              <Tab
                icon={
                  <Icon
                    icon="videogame_asset"
                    fontSize="large"
                    variantIcon="outlined"
                  />
                }
                {...a11yProps(3)}
              />
            </Tabs>
          </Grid>
          <Grid
            size={3}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            gap={1}
          >
            <Avatar>
              <IconButton
                icon="apps"
                sx={{
                  color: (theme) => theme.palette.common.black,
                }}
              />
            </Avatar>
            <Avatar>
              <IconButton
                icon="notifications"
                sx={{
                  color: (theme) => theme.palette.common.black,
                }}
              />
            </Avatar>
            <Avatar>
              <IconButton
                icon="forum"
                sx={{
                  color: (theme) => theme.palette.common.black,
                }}
              />
            </Avatar>
            <Avatar>
              <IconButton
                icon="account_circle"
                sx={{
                  color: (theme) => theme.palette.common.black,
                }}
              />
            </Avatar>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
