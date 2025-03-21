import React, { useState } from "react";
import {
  Inbox,
  Tag,
  Users,
  Info,
  RotateCcw,
  MoreVertical,
  Square,
} from "lucide-react";
import "../../../../src/styles.css";
import PrimaryTab from "./PrimaryTab";
import PromotionsTab from "./PromotionsTab";
import SocialTab from "./SocialTab";
import UpdatesTab from "./UpdatesTab";

const InboxPage = () => {
  const [activeTab, setActiveTab] = useState("primary");

  const tabs = [
    { name: "primary", label: "Primary", icon: <Inbox size={16} /> },
    { name: "promotions", label: "Promotions", icon: <Tag size={16} /> },
    { name: "social", label: "Social", icon: <Users size={16} /> },
    { name: "updates", label: "Updates", icon: <Info size={16} /> },
  ];

  // Map tab names to the corresponding components
  const tabContent = {
    primary: <PrimaryTab />,
    promotions: <PromotionsTab />,
    social: <SocialTab />,
    updates: <UpdatesTab />,
  };

  return (
    <div className="mailbox-container">
      <div className="top-icons">
        <Square size={18} className="icon" />
        <RotateCcw size={18} className="icon" />
        <MoreVertical size={18} className="icon" />
      </div>
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`tab-button ${activeTab === tab.name ? "active" : ""}`}
            onClick={() => setActiveTab(tab.name)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="tab-content">{tabContent[activeTab]}</div>
    </div>
  );
};

export default InboxPage;
