import React from "react";
import GenericProgressBar from "../../custom/components/ProgressBar/GenericProgressBar";

const ProgressBarComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        width: "100%",
      }}
    >
      <h2>Progress Bars</h2>

      {/* Basic Progress Bar */}
      <GenericProgressBar now={60} />

      {/* Striped Progress Bar */}
      <GenericProgressBar now={80} striped={true} />

      {/* Animated Striped Progress Bar */}
      <GenericProgressBar
        now={40}
        striped={true}
        animated={true}
        variant="success"
      />

      {/* Custom Label */}
      <GenericProgressBar now={25} label="25% completed" variant="warning" />

      {/* Hidden Label */}
      <GenericProgressBar now={50} visuallyHidden={true} />

      {/* Customized with class and style */}
      <GenericProgressBar
        now={70}
        className="my-custom-progress-bar"
        style={{ height: "30px", backgroundColor: "#f5f5f5" }}
        variant="info"
      />
    </div>
  );
};

export default ProgressBarComponent;
