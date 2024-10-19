import React from "react";
import GenericInputField from "../custom/GenericInputField";

const InputComponent = () => {
  return (
    <div>
      <GenericInputField
        label="Email address Ahmad"
        type="email"
        placeholder="name@example.com"
        controlId="emailInput"
        labelColor="blue"
        width="50%"
        height="50px"
        placeholderColor="purple"
        placeholderFontSize="50px"
        padding="10px"
        margin="10px"
        fontFamily="Arial"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        autoFocus="true"
        cursorBlink="true"
        customPlaceholderClass="custom-placeholder-lg" 
        backgroundColor="black"
      />

      <GenericInputField
        label="Username"
        controlId="usernameInput"
        // This will use the default type "text" and no placeholder
      />
    </div>
  );
};

export default InputComponent;
