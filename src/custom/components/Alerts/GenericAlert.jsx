import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './GenericAlert.css'; // Create a CSS file for additional styling
import { FaTimes } from 'react-icons/fa'; // Optional icon for dismiss

const GenericAlert = ({
  message,
  alertType,
  isDismissible,
  withIcon,
  onDismiss,
  icon,
  textColor,
  backgroundColor,
  borderColor,
}) => {
  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  if (!visible) {
    return null;
  }
  console.log("alertType", alertType)
  return (
    <div
      className={`alert alert-${alertType} ${isDismissible ? 'alert-dismissible' : ''}`}
      role="alert"
      style={{
        color: textColor,
        backgroundColor,
        borderColor,
      }}
    >
      {withIcon && icon && <span className="alert-icon">{icon}</span>}
      {message}
      {isDismissible && (
        <button type="button" className="btn-close" aria-label="Close" onClick={handleDismiss}>
          <FaTimes />
        </button>
      )}
    </div>
  );
};

// Define prop types
GenericAlert.propTypes = {
  message: PropTypes.string.isRequired,
  alertType: PropTypes.oneOf([
    'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',
  ]).isRequired, // Bootstrap alert types
  isDismissible: PropTypes.bool, // Allow the alert to be dismissible
  withIcon: PropTypes.bool, // Show icon with the alert
  icon: PropTypes.node, // Optional icon component
  onDismiss: PropTypes.func, // Function to call when alert is dismissed
  textColor: PropTypes.string, // Custom text color
  backgroundColor: PropTypes.string, // Custom background color
  borderColor: PropTypes.string, // Custom border color
};

// Define default props
GenericAlert.defaultProps = {
  isDismissible: false,
  withIcon: false,
  icon: null,
  textColor: null,
  backgroundColor: null,
  borderColor: null,
};

export default GenericAlert;
