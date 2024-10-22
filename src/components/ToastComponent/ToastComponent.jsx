import React, { useState } from "react";
import GenericToast from "../../custom/components/Toast/GenericToast";

const ToastComponent = () => {
  const [showToast1, setShowToast1] = useState(true);
  const [showToast2, setShowToast2] = useState(true);
  const toastConfig = [
    {
      show: showToast1,
      onClose: () => setShowToast1(false),
      delay: 3000,
      autohide: true,
      bg: "success",
      closeButton: true,
      headerImg: "https://via.placeholder.com/20",
      headerTitle: "Toast 1",
      headerTime: "Just Now",
      body: "This is the body of Toast 1",
    },
    {
      show: showToast2,
      onClose: () => setShowToast2(false),
      delay: 5000,
      autohide: true,
      bg: "danger",
      closeButton: true,
      headerTitle: "Toast 2",
      headerTime: "2 minutes ago",
      body: "This is the body of Toast 2",
    },
  ];
  return (
    <div>
      <GenericToast toastConfig={toastConfig} defaultPosition="bottom-end" />
    </div>
  );
};

export default ToastComponent;
