import React from "react";
import GenericDropdown from "../../custom/components/Dropdown/GenericDropdown";

const DropdownComponent = () => {
    const handleSelect = (item) => {
        console.log(`Selected: ${item.label}`);
      };
    
      const dropdownItems = [
        { label: 'Profile', eventKey: 'profile', props: { className: 'custom-item' } },
        { label: 'Settings', eventKey: 'settings' },
        { label: 'Logout', eventKey: 'logout' },
      ];
  return (
    <div>
      <h1>Custom Dropdown Example</h1>
      <GenericDropdown
        title="User Options"
        items={dropdownItems}
        onSelect={handleSelect}
        variant="primary"
        className="my-custom-dropdown"
        dropdownProps={{ align: "end" }} // Additional props for the Dropdown
        buttonProps={{ size: "lg" }} // Additional props for the button
      />
    </div>
  );
};

export default DropdownComponent;
