"use client";
import MessageLoading from "@/components/Feedback/Loading/MessageLoading/MessageLoading";
import PostLoading from "@/components/Feedback/Loading/PostLoading/PostLoading";
import Tabs, { TabLabel } from "@/components/Surfaces/Tabs";
import useTabs from "@/components/Surfaces/Tabs/hooks";
import Box from "@mui/material/Box";
import React from "react";

const DemoTabs = () => {
  const { tabItems, handleChange, activeTab } = useTabs<TabLabel>([
    { label: "Hộp thư", value: 1 },
    { label: "Cộng đồng", value: 2 },
  ]);
  return (
    <Box p={2} width={300}>
      <Tabs
        type="label"
        tabItems={tabItems}
        handleChange={handleChange}
        activeValue={activeTab}
        hiddenIndicator
      />

      <MessageLoading />
      <PostLoading />
    </Box>
  );
};

export default DemoTabs;
