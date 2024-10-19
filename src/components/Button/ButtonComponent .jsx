import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Example icons
import GenericButton from '../../custom/components/Button/GenericButton';


const ButtonComponent = () => {
  const handleClick = (label) => {
    console.log(`${label} button clicked`);
  };

  return (
    <div>
      <h2>Button Examples</h2>
      
      <GenericButton
        label="Primary"
        buttonType="primary"
        onClick={() => handleClick('Primary')}
      />
      
      <GenericButton
        label="Success"
        buttonType="success"
        withIcon={true}
        icon={<FaCheck />}
        onClick={() => handleClick('Success')}
      />

      <GenericButton
        label="Danger"
        buttonType="danger"
        size="lg"
        onClick={() => handleClick('Danger')}
      />

      <GenericButton
        label="Warning Block"
        buttonType="warning"
        block={true}
        onClick={() => handleClick('Warning Block')}
      />

      <GenericButton
        label="Disabled Info"
        buttonType="info"
        disabled={true}
      />

      <GenericButton
        label="Dark with Custom Variant"
        buttonType="dark"
        variant={{ backgroundColor: '#000', color: '#fff' }} // Custom style variant
        onClick={() => handleClick('Dark')}
      />
    </div>
  );
};

export default ButtonComponent;
