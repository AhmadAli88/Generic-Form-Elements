import React, { useState } from "react";
import GenericCheckbox from "../../custom/Checkbox/CHeckbox";


const CheckboxComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div>
      <GenericCheckbox
        label="Accept Terms and Conditions"
        name="terms"
        id="termsCheckbox"
        defaultChecked={isChecked}
        checkColor="green" // Custom checked color
        focusColor="orange" // Custom focus color
        size="lg" // Large size checkbox
        onChange={handleCheckboxChange}
      />

      <GenericCheckbox
        label="Subscribe to Newsletter"
        name="subscribe"
        id="subscribeCheckbox"
        disabled={true} // Disabled checkbox
        size="md" // Medium size checkbox
      />

      <GenericCheckbox
        label="Enable Notifications"
        name="notifications"
        id="notificationsCheckbox"
        size="sm" // Small size checkbox
        checkColor="purple" // Custom checked color
        focusColor="pink" // Custom focus color
        onChange={handleCheckboxChange}
      />

      <div>
        <p>Checkbox is {isChecked ? "checked" : "unchecked"}</p>
      </div>
    </div>
  );
};

export default CheckboxComponent;
