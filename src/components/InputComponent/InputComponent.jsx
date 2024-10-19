import React from "react";
import GenericInputField from "../../custom/SimpleInput/GenericInputField";


const InputComponent = () => {
  return (
    <div>
      <GenericInputField
        label="Email address"
        type="email"
        placeholder="name@example.com"
        controlId="emailInput"
        labelColor="blue"
        width="50%"
        height="50px"
        placeholderColor="purple"
        placeholderFontSize="50px"
        padding="10px"
        margin="10px 40px"
        fontFamily="Verdana"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        autoFocus="true"
        cursorBlink="true"
        customPlaceholderClass="custom-placeholder"
        backgroundColor="black"
        border="5px solid lightcoral"
      />
    </div>
  );
};

export default InputComponent;
