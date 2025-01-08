import MuiTabs from "@mui/material/Tabs";
import { TabIcon, TabItem, TabLabel, TabsProps, TabType } from "./types";
import Tab from "@mui/material/Tab";
import Icon from "@/components/DataDisplay/Icon";
import Tooltip from "@mui/material/Tooltip";
import { getBorderRadius } from "@/themes/theme";
import { BorderRadius } from "@/themes/types";
const Tabs = <T extends keyof TabType>({
  activeValue,
  handleChange,
  tabItems,
  type,
  hiddenIndicator,
  ...muiProps
}: TabsProps<T>) => {
  const changeTab = (_: React.SyntheticEvent, value: TabItem["value"]) => {
    handleChange(value);
  };
  return (
    <MuiTabs
      value={activeValue || false}
      onChange={changeTab}
      {...muiProps}
      sx={{
        "& .MuiTabs-flexContainer": {
          gap: 1,
          alignItems: "center",
          justifyContent: "center",
        },

        "& .MuiTabs-indicator": {
          height: 3,
          display: hiddenIndicator ? "none" : "block",
        },
      }}
    >
      {tabItems.map((tab) => {
        if (type === "icon") {
          return (
            <Tab
              value={tab.value}
              key={tab.value}
              icon={
                <Tooltip title={(tab as TabIcon).toolTip}>
                  <Icon
                    icon={(tab as TabIcon).icon}
                    variantIcon={
                      activeValue === tab.value ? "filled" : "outlined"
                    }
                    sx={{
                      fontSize: 32,
                    }}
                  />
                </Tooltip>
              }
            />
          );
        }
        return (
          <Tab
            value={tab.value}
            key={tab.value}
            label={(tab as TabLabel).label}
            sx={(theme) => ({
              borderRadius: getBorderRadius(BorderRadius.M),
              fontSize: theme.typography.boldM,
              backgroundColor:
                activeValue === tab.value
                  ? theme.palette.surface1.light || "inherit"
                  : "inherit",
              minHeight: 20,
              height: 35,
            })}
          />
        );
      })}
    </MuiTabs>
  );
};

export default Tabs;
