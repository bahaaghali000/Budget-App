import { useState } from 'react';
import './Tabs.css';

const Tabs = ({ children }) => {
  const tabsContent = children.map((tab) => tab.props.children);

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="tabs">
      <div className="tabs_titles">
        {children.map((child, index) => (
          <div
            className={`tabs_title ${activeTab === index + 1 && 'active'}`}
            key={`tabs_title-${index + 1}`}
            onClick={() => setActiveTab(index + 1)}
          >
            {child.props.title}
          </div>
        ))}
      </div>

      <div className="tab_content">{tabsContent[activeTab - 1]}</div>
    </div>
  );
};

export default Tabs;
