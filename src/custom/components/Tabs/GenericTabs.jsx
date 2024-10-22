import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function GenericTabs({ tabsConfig, defaultKey }) {
  return (
    <Tabs defaultActiveKey={defaultKey} id="generic-tab-example" className="mb-3">
      {tabsConfig.map((tab) => (
        <Tab key={tab.eventKey} eventKey={tab.eventKey} title={tab.title} disabled={tab.disabled}>
          {tab.content}
        </Tab>
      ))}
    </Tabs>
  );
}

export default GenericTabs;
