import React from 'react';
import Badge from 'react-bootstrap/Badge';

const GenericBadge = ({
  text = 'Default Badge',         // Text displayed inside the badge
  bg = 'secondary',               // Background color variant of the badge (e.g., 'primary', 'secondary', 'success', etc.)
  textColor = 'white',            // Text color for the badge (if needed)
  pill = false,                   // If true, renders the badge as a pill (rounded corners)
  className = '',                 // Additional custom class for styling
  style = {},                     // Additional styles for the badge
  onClick = () => {},             // Click handler for the badge
  badgeProps = {},                // Additional props for the Badge component
}) => {
  return (
    <Badge
      bg={bg}
      style={{ color: textColor, ...style }} // Apply text color and any additional styles
      pill={pill}
      className={className}
      onClick={onClick}             // Optional click event
      {...badgeProps}               // Spread additional props for the badge
    >
      {text}
    </Badge>
  );
};

export default GenericBadge;
