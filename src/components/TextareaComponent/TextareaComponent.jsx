import React, { useState } from 'react';
import GenericTextarea from '../../custom/formElements/Textarea/GenericTextarea';


const TextareaComponent = () => {
  const [textValue, setTextValue] = useState('');

  const handleTextareaChange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div>
      <h2>Textarea Example</h2>
      <GenericTextarea
        label="Description"
        id="descriptionTextarea"
        rows={5}
        value={textValue}
        onChange={handleTextareaChange}
        placeholder="Enter your text here"
        width="100%"
        height="150px"
        backgroundColor="#f8f9fa"
        fontSize="14px"
        labelColor="blue"
        borderRadius="8px"
        // border="none"
      />
      <p>Current Text: {textValue}</p>
    </div>
  );
};

export default TextareaComponent;
