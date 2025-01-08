import { TabsProps as MuiTabsProps } from "@mui/material/Tabs/index";

export interface TabItem {
  value: string | number;
}

export interface TabLabel extends TabItem {
  label: string;
}

export interface TabIcon extends TabItem {
  icon: string;
  toolTip?: string;
}

export interface TabType {
  label: TabLabel[];
  icon: TabIcon[];
}

export interface TabsProps<T extends keyof TabType> extends MuiTabsProps {
  tabItems: TabType[T];
  activeValue: TabItem["value"] | false;
  type: T;
  hiddenIndicator?: boolean;
  handleChange: (value: TabItem["value"] | false) => void;
}
