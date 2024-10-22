import React from "react";
import GenericTabs from "../../custom/components/Tabs/GenericTabs";

const TabsComponent = () => {
  const tabsConfig = [
    {
      eventKey: "home",
      title: "Home",
      content: <div>Tab content for Home</div>,
    },
    {
      eventKey: "profile",
      title: "Profile",
      content: <div>Tab content for Profile</div>,
    },
    {
      eventKey: "contact",
      title: "Contact",
      content: <div>Tab content for Contact</div>,
      disabled: true, // Disable this tab
    },
  ];

  return (
    <div>
      <GenericTabs tabsConfig={tabsConfig} defaultKey="profile" />
    </div>
  );
};

export default TabsComponent;
