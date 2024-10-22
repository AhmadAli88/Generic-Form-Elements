import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function GenericProgressBar({
  now = 0,                    // Current progress value
  min = 0,                    // Minimum value for progress
  max = 100,                  // Maximum value for progress
  striped = false,            // Whether the progress bar is striped
  animated = false,           // Whether the progress bar is animated
  variant = 'primary',        // Color variant of the progress bar
  label = `${now}%`,          // Label displayed on the progress bar
  visuallyHidden = false,     // Visually hide the label (for accessibility)
  className = '',             // Custom class names for the ProgressBar
  style = {},                 // Custom styles for the ProgressBar
}) {
  return (
    <ProgressBar
      now={now}
      min={min}
      max={max}
      striped={striped}
      animated={animated}
      variant={variant}
      label={label}
      visuallyHidden={visuallyHidden}
      className={className}
      style={style}
    />
  );
}

export default GenericProgressBar;
