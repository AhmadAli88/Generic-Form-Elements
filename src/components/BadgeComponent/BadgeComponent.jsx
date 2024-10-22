import React from "react";
import GenericBadge from "../../custom/components/Badge/GenericBadge";

const BadgeComponent = () => {
    const handleBadgeClick = () => {
        alert('Badge clicked!');
      };
  return (
    <div>
      <h1>
        Example heading{" "}
        <GenericBadge text="New" bg="success" onClick={handleBadgeClick} />
      </h1>
      <h2>
        Example heading <GenericBadge text="Updated" bg="primary" />
      </h2>
      <h3>
        Example heading <GenericBadge text="Sale" bg="danger" pill={true} />
      </h3>
      <h4>
        Example heading <GenericBadge text="Coming Soon" bg="warning" />
      </h4>
      <h5>
        Example heading <GenericBadge text="Beta" bg="info" />
      </h5>
      <h6>
        Example heading{" "}
        <GenericBadge text="Featured" bg="light" textColor="dark" />
      </h6>
    </div>
  );
};

export default BadgeComponent;
