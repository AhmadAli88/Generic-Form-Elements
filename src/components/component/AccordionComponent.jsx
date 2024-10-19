import React from 'react';

import { FaChevronDown } from 'react-icons/fa'; // Using a sample icon
import GenericAccordion from '../../custom/components/Accordian/GenericAccordian';

const AccordionComponent = () => {
  const accordionItems = [
    {
      header: 'Accordion Item #1',
      content: (
        <div>
          <strong>This is the first item's accordion body.</strong> 
          It's content can be anything, such as text, images, or even another React component.
        </div>
      ),
    },
    {
      header: 'Accordion Item #2',
      content: (
        <div>
          <strong>This is the second item's accordion body.</strong> 
          It is hidden by default until expanded.
        </div>
      ),
    },
    {
      header: 'Accordion Item #3',
      content: (
        <div>
          <strong>This is the third item's accordion body.</strong> 
          You can customize each accordion item's content and style.
        </div>
      ),
    },
  ];

  return (
    <div>
      <h2>Accordion Example</h2>
      <GenericAccordion
        items={accordionItems}
        alwaysOpen={true}
        defaultOpenIndex={0}
        onToggle={(index) => console.log(`Toggled: ${index}`)}
        // icon={<FaChevronDown />} // Example of using an icon
        headerColor="blue"
        bodyColor="#f8f9fa"
        borderColor="#ccc"
      />
    </div>
  );
};

export default AccordionComponent;
