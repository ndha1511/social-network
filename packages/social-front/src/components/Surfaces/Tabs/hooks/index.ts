import { useState } from "react";
import { TabIcon, TabItem, TabLabel } from "../types";

const useTabs = <T extends TabIcon | TabLabel>(
  tabItems: T[],
  initActiveTab?: TabItem["value"]
) => {
  const tabValue = initActiveTab
    ? tabItems.map((item) => item.value).includes(initActiveTab)
      ? initActiveTab
      : false
    : tabItems[0].value;
  const [activeTab, setActiveTab] = useState<TabItem["value"] | false>(
    tabValue
  );
  const handleChange = (value: TabItem["value"] | false) => {
    setActiveTab(value);
  };
  return { activeTab, handleChange, tabItems };
};

export default useTabs;
