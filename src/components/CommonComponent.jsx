import React from "react";
import CommonFields from "../custom/CommonFields";

const CommonComponent = () => {
  const fields = [
    {
      label: "Email address",
      type: "email",
      placeholder: "name@example.com",
      controlId: "emailInput",
      
    },
    {
      label: "Example textarea",
      type: "textarea",
      placeholder: "Enter some text",
      controlId: "textareaInput",
      rows: 5,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      controlId: "passwordInput",
    },
    {
      label: "Age",
      type: "number",
      placeholder: "Enter your age",
      controlId: "passwordInput",
    },
  ];

  return (
    <div>
      <h2>Reusable Form Component</h2>
      <CommonFields fields={fields} formClassName="parent-main" />
    </div>
  );
};

export default CommonComponent;
