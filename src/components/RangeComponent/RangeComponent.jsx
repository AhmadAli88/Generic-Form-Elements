import React, { useState } from 'react';
import GenericRange from '../../custom/formElements/Range/GenericRange';


const RangeComponent = () => {
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (e) => {
    setRangeValue(Number(e.target.value));
  };

  return (
    <div>
      <h2>Range Slider Example</h2>
      <GenericRange
        label="Volume"
        id="volumeRange"
        min={0}
        max={100}
        step={1}
        value={rangeValue}
        onChange={handleRangeChange}
        width="300px"
        height="8px"
        rangeColor="green"
        trackColor="lightgray"
        thumbColor="yellow"
        labelColor="blue"
      />
      <p>Selected Value: {rangeValue}</p>
    </div>
  );
};

export default RangeComponent;
