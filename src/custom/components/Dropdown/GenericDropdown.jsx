import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const GenericDropdown = ({
  title = 'Dropdown Button',               // Title of the dropdown button
  id = 'dropdown-basic-button',            // ID for the dropdown button
  items = [],                              // Array of dropdown items (objects)
  onSelect = () => {},                     // Callback when an item is selected
  variant = 'secondary',                   // Button variant (e.g., 'primary', 'secondary', etc.)
  className = '',                          // Additional custom class for the dropdown
  dropdownProps = {},                      // Additional props for the Dropdown component
  buttonProps = {},                        // Additional props for the DropdownButton component
}) => {
  return (
    <Dropdown {...dropdownProps}>
      <DropdownButton id={id} title={title} variant={variant} className={className} {...buttonProps}>
        {items.map((item, index) => (
          <Dropdown.Item 
            key={index} 
            eventKey={item.eventKey} 
            onSelect={() => onSelect(item)}
            {...item.props} // Spread any additional props for the item
          >
            {item.label}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Dropdown>
  );
};

export default GenericDropdown;
