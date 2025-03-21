import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import InboxPage from "./components/pages/Inbox/Inbox";
import Sent from "./components/pages/Sent/Sent";
import Snoozed from "./components/pages/Snoozed/Snoozed";
import Drafts from "./components/pages/Drafts/Drafts";
import Starred from "./components/pages/Starred/Starred";
import More from "./components/pages/More/More";
import PrimaryTab from "./components/pages/Inbox/PrimaryTab";
import PromotionsTab from "./components/pages/Inbox/PromotionsTab";
import SocialTab from "./components/pages/Inbox/SocialTab";
import UpdatesTab from "./components/pages/Inbox/UpdatesTab";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <Routes>
            <Route path="/" element={<InboxPage />} />
            <Route path="/sent" element={<Sent />} />
            <Route path="/snooze" element={<Snoozed />} />
            <Route path="/drafts" element={<Drafts />} />
            <Route path="/starred" element={<Starred />} />
            <Route path="/more" element={<More />} />

            {/* for inbox tab */}
            <Route path="primary" element={<PrimaryTab />} />
            <Route path="promotions" element={<PromotionsTab />} />
            <Route path="social" element={<SocialTab />} />
            <Route path="updates" element={<UpdatesTab />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
