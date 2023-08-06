import React, { useState, useEffect } from 'react';
import { emailList, draftedReplies } from '../utils/emailScanner';
import { draftReply } from '../utils/draftReplies';
import { setPriority } from '../utils/prioritySetting';
import { sendNotification } from '../utils/notificationSystem';

const Dashboard = () => {
  const [emails, setEmails] = useState([]);
  const [drafts, setDrafts] = useState([]);
  const [priorityEmails, setPriorityEmails] = useState([]);

  useEffect(() => {
    setEmails(emailList);
    setDrafts(draftedReplies);
    setPriorityEmails(setPriority(emailList));
  }, []);

  const handleDraft = (email) => {
    const draft = draftReply(email);
    setDrafts([...drafts, draft]);
    sendNotification('draftCreated');
  };

  return (
    <div id="dashboardContainer">
      <h1>Welcome to your Dashboard</h1>
      <div className="email-list">
        {emails.map((email, index) => (
          <div key={index} className="email-item">
            <h2>{email.subject}</h2>
            <p>{email.body}</p>
            <button onClick={() => handleDraft(email)}>Draft Reply</button>
          </div>
        ))}
      </div>
      <div className="draft-list">
        {drafts.map((draft, index) => (
          <div key={index} className="draft-item">
            <h2>{draft.subject}</h2>
            <p>{draft.body}</p>
            <button>Review Draft</button>
          </div>
        ))}
      </div>
      <div className="priority-email-list">
        {priorityEmails.map((email, index) => (
          <div key={index} className="priority-email-item">
            <h2>{email.subject}</h2>
            <p>{email.body}</p>
            <button onClick={() => handleDraft(email)}>Draft Reply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;