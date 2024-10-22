import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const GenericSpinner = ({
  animation = 'border',  // Type of animation: 'border' or 'grow'
  variant = 'primary',   // Color variant: 'primary', 'secondary', 'success', etc.
  size = null,           // Spinner size: 'sm' for small or null for default
  role = 'status',       // Role attribute for accessibility: 'status' or 'alert'
  className = '',        // Additional custom classes
  style = {},            // Inline styles
  visuallyHiddenLabel = 'Loading...', // Label for screen readers
  as = 'div',            // Custom element type, e.g., 'span' or 'div'
  spinnerProps = {},     // Additional props for Spinner component
}) => {
  return (
    <Spinner
      animation={animation}
      variant={variant}
      size={size}
      role={role}
      className={className}
      style={style}
      as={as}
      {...spinnerProps} // Spread additional spinner props
    >
      <span className="visually-hidden">{visuallyHiddenLabel}</span>
    </Spinner>
  );
};

export default GenericSpinner;
