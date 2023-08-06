import React, { useState } from 'react';
import { authenticateUser } from './authentication.js';
import { scanInbox } from './emailScanner.js';
import { draftReply } from './draftReplies.js';
import { customizeTemplate } from './templateCustomization.js';
import { setPriority } from './prioritySetting.js';
import { sendNotification } from './notificationSystem.js';

export const UserInteraction = () => {
  const [userState, setUserState] = useState(null);
  const [emailList, setEmailList] = useState([]);
  const [draftedReplies, setDraftedReplies] = useState([]);

  const handleLogin = async (username, password) => {
    const user = await authenticateUser(username, password);
    setUserState(user);
  };

  const handleInboxScan = async () => {
    const emails = await scanInbox(userState);
    setEmailList(emails);
  };

  const handleDraftReply = async (email, template) => {
    const draft = await draftReply(email, template);
    setDraftedReplies([...draftedReplies, draft]);
  };

  const handleTemplateCustomization = (templateId, newTemplate) => {
    customizeTemplate(templateId, newTemplate);
  };

  const handlePrioritySetting = (email, priority) => {
    setPriority(email, priority);
  };

  const handleNotifications = () => {
    sendNotification(draftedReplies);
  };

  return {
    handleLogin,
    handleInboxScan,
    handleDraftReply,
    handleTemplateCustomization,
    handlePrioritySetting,
    handleNotifications,
  };
};