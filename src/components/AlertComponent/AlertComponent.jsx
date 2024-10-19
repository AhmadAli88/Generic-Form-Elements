import React from "react";
import { FaExclamationCircle } from "react-icons/fa"; // Example icon
import GenericAlert from "../../custom/components/Alerts/GenericAlert";

const AlertComponent = () => {
  return (
    <div>
      <h2>Alert Examples</h2>

      <GenericAlert
        message="A simple primary alert—check it out!"
        alertType="primary"
      />

      <GenericAlert
        message="A simple success alert with icon!"
        alertType="success"
        withIcon={true}
        icon={<FaExclamationCircle />} // Example icon for success
      />

      <GenericAlert
        message="A dismissible warning alert!"
        alertType="warning"
        isDismissible={true}
        onDismiss={() => console.log("Alert dismissed!")}
      />

      <GenericAlert
        message="A custom styled dark alert!"
        alertType="dark"
        textColor="white"
        backgroundColor="black"
        borderColor="gray"
      />
    </div>
  );
};

export default AlertComponent;
