import Tabs, { TabIcon } from "@/components/Surfaces/Tabs";
import useTabs from "@/components/Surfaces/Tabs/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const TabList = () => {
  const router = useRouter();
  const path = usePathname();
  const { tabItems, activeTab, handleChange } = useTabs<TabIcon>(
    [
      { icon: "home", value: "/", toolTip: "Trang chủ" },
      {
        icon: "group",
        value: "/friends",
        toolTip: "Bạn bè",
      },
      {
        icon: "video_library",
        value: "/watch",
        toolTip: "Video",
      },
      {
        icon: "videogame_asset",
        value: "/gaming",
        toolTip: "Trò chơi",
      },
    ],
    path
  );

  useEffect(() => {
    if (!tabItems.map((item) => item.value).includes(path)) {
      handleChange(false);
    } else {
      handleChange(path);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const handleChangeTab = (value: string | number | false) => {
    router.push(`${value}`);
  };

  return (
    <Tabs
      tabItems={tabItems}
      activeValue={activeTab}
      handleChange={handleChangeTab}
      type="icon"
    />
  );
};

export default TabList;
