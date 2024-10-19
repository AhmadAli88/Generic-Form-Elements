import React, { useState } from "react";
import GenericRadioButton from "../../custom/Radio/Radio";

const RadioComponent = () => {
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.id);
  };

  return (
    <div>
      <h2>Choose an option</h2>
      <GenericRadioButton
        label="Option 1"
        name="radioGroup"
        id="radio1"
        defaultChecked={selectedRadio === "radio1"}
        color="blue" // Custom color for radio button
        size="lg" // Large size radio button
        onChange={handleRadioChange}
      />
      <div className="mt-4">
        <GenericRadioButton
          label="Option 2"
          name="radioGroup"
          id="radio2"
          defaultChecked="false"
          color="green"
          boxShadow="none"
          size="md"
          onChange={handleRadioChange}
        />
      </div>

      <GenericRadioButton
        label="Disabled Option"
        name="radioGroup"
        id="radio3"
        disabled={true}
        color="red"
        size="sm" // Small size radio button
      />

      <div>
        <p>Selected Radio: {selectedRadio}</p>
      </div>
    </div>
  );
};

export default RadioComponent;
