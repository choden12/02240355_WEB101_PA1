import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Star,
  Clock,
  SendHorizontal,
  Pencil,
  StickyNote,
  MoreHorizontal,
} from "lucide-react";
import "../../src/styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* logo */}
      <div className="logo-container">
        <img src="/image.png" alt="Gmail Logo" className="gmail-logo" />
      </div>
      <button className="compose-btn">
        <Pencil size={16} style={{ marginRight: "2vh", color: "black" }} />
        Compose
      </button>

      <ul className="sidebar-menu">
        {[
          { name: "Inbox", path: "/", icon: <Mail /> },
          { name: "Starred", path: "/starred", icon: <Star /> },
          { name: "Snoozed", path: "/snooze", icon: <Clock /> },
          { name: "Sent", path: "/sent", icon: <SendHorizontal /> },
          { name: "Drafts", path: "/drafts", icon: <StickyNote /> },
          { name: "More", path: "/more", icon: <MoreHorizontal /> },
          {},
        ].map((item, index) => (
          <li key={index} className="menu-item">
            <Link to={item.path}>
              <span className="icon">{item.icon}</span> {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
