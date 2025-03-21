import React from "react";
import {
  Search,
  SlidersHorizontal,
  HelpCircle,
  Settings,
  Grid,
} from "lucide-react";
import "../../src/styles.css";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="search-container">
        <Search className="search-icon" />
        <input type="text" placeholder="Search mail" className="search-input" />
        <SlidersHorizontal className="filter-icon" />
      </div>

      <div className="icon-group">
        <HelpCircle className="topbar-icon" />
        <Settings className="topbar-icon" />
        <Grid className="topbar-icon" />
        <div className="profile-icon">S</div>
      </div>
    </div>
  );
};

export default Topbar;
