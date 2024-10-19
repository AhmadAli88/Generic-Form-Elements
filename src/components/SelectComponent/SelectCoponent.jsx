import React, { useState } from 'react';
import GenericSelect from '../../custom/Select/GenericSelect';
import { FaChevronDown } from 'react-icons/fa'; // Example icon

const SelectComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const options = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
  ];

  return (
    <div>
      <h2>Select an Option</h2>
      <GenericSelect
        options={options}
        width="250px"
        height="50px"
        placeholder="Open this select menu"
        withIcon={true} // Pass as boolean
        boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)" // Control box shadow
        onChange={handleSelectChange}
        value={selectedValue}
      />
    </div>
  );
};

export default SelectComponent;
