import PopoverLayout from "@/components/Layout/PopoverLayout";

const ApplicationList = () => {
  return (
    <PopoverLayout
      actionType="avatar"
      actionProps={{
        avatar: "apps",
        type: "icon-button",
      }}
      popoverContent={<>ApplicationList</>}
      toolTip="Menu"
    />
  );
};

export default ApplicationList;
