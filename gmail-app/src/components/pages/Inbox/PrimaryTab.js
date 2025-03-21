import React from "react";
import "./inbox.css";

const PrimaryTab = () => {
  return (
    <div className="primary-tab-container">
        {/* Heading for the Primary Tab */}
      <h2 className="typing-text">Welcome to Primary Tab</h2>
         {/* Description message for when there are no new emails */}
      <p className="primary-description">
        Your Primary tab is empty. Personal messages and messages that don’t
        appear in other tabs will be shown here. No new mail!
      </p>
    </div>
  );
};

export default PrimaryTab;
