import React, { useState } from "react";
import "../Sent/sent.css";
import {
  Mail,
  Star,
  Clock,
  Trash2,
  Archive,
  CheckSquare,
  Square,
} from "lucide-react";
// This is for drafts data
const draftEmails = [
  {
    id: 1,
    recipient: "Sangay Choden",
    subject: "Project Update",
    snippet: "Hey Sangay, here's the latest update on the project...",
    time: "11:30 AM",
    starred: false,
    hasAttachment: true,
  },
  {
    id: 2,
    recipient: "Yeshey Lhamo",
    subject: "Meeting Agenda",
    snippet: "Please find the agenda for our upcoming meeting attached.",
    time: "10:15 AM",
    starred: true,
    hasAttachment: false,
  },
  {
    id: 3,
    recipient: "Marketing Team",
    subject: "New Campaign Strategy",
    snippet: "Hello Team, let's discuss our new campaign strategy...",
    time: "9:00 AM",
    starred: false,
    hasAttachment: true,
  },
  {
    id: 4,
    recipient: "Sangay Choden",
    subject: "Project Update",
    snippet: "Hey Sangay, here's the latest update on the project...",
    time: "11:30 AM",
    starred: false,
    hasAttachment: true,
  },
  {
    id: 5,
    recipient: "Yeshey Lhaden",
    subject: "Meeting Agenda",
    snippet: "Please find the agenda for our upcoming meeting attached.",
    time: "10:15 AM",
    starred: true,
    hasAttachment: false,
  },
  {
    id: 6,
    recipient: "Marketing Team",
    subject: "New Campaign Strategy",
    snippet: "Hello Team, let's discuss our new campaign strategy...",
    time: "9:00 AM",
    starred: false,
    hasAttachment: true,
  },
];

const Draft = () => {
  const [hoveredEmail, setHoveredEmail] = useState(null);
  const [selectedEmails, setSelectedEmails] = useState([]);

  // Toggle selection for a single email
  const toggleSelectEmail = (id) => {
    setSelectedEmails((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((emailId) => emailId !== id)
        : [...prevSelected, id]
    );
  };

  // Select/Deselect all emails
  const toggleSelectAll = () => {
    if (selectedEmails.length === draftEmails.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(draftEmails.map((email) => email.id));
    }
  };

  return (
    <div className="mailbox">
      <h2>Draft Emails</h2>

      {/* Header Controls */}
      <div className="email-header">
        <button className="icon-btn" onClick={toggleSelectAll}>
          {selectedEmails.length === draftEmails.length ? (
            <CheckSquare size={18} />
          ) : (
            <Square size={18} />
          )}
        </button>
        {selectedEmails.length > 0 && (
          <div className="bulk-actions">
            <button className="icon-btn">
              <Archive size={18} />
            </button>
            <button className="icon-btn">
              <Trash2 size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Email List */}
      <div className="email-list">
        {draftEmails.map((email) => (
          <div
            key={email.id}
            className={`email-item ${
              selectedEmails.includes(email.id) ? "selected" : ""
            }`}
            onMouseEnter={() => setHoveredEmail(email.id)}
            onMouseLeave={() => setHoveredEmail(null)}
          >
            {/* Checkbox to select individual emails */}
            <input
              type="checkbox"
              checked={selectedEmails.includes(email.id)}
              onChange={() => toggleSelectEmail(email.id)}
            />

            <button className="icon-btn">
              <Star size={16} color={email.starred ? "gold" : "gray"} />
            </button>

            <span className="recipient">{email.recipient}</span>
            <span className="subject">
              {email.subject} - <span className="snippet">{email.snippet}</span>
            </span>

            {/* Show mail icon only on hover */}
            {hoveredEmail === email.id && email.hasAttachment && (
              <Mail size={16} color="red" />
            )}

            <span className="time">{email.time}</span>

            {/* Show action buttons only on hover */}
            {hoveredEmail === email.id && (
              <div className="actions">
                <button className="icon-btn">
                  <Archive size={16} />
                </button>
                <button className="icon-btn">
                  <Trash2 size={16} />
                </button>
                <button className="icon-btn">
                  <Clock size={16} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Draft;
