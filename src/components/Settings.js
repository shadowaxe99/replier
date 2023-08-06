import React, { useState } from 'react';
import '../styles/Settings.css';

const Settings = () => {
  const [template, setTemplate] = useState('');
  const [priority, setPriority] = useState('');

  const handleTemplateChange = (event) => {
    setTemplate(event.target.value);
    // Call to the function to customize the template
    customizeTemplate(template);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
    // Call to the function to set the priority
    setPriority(priority);
  };

  return (
    <div id="settingsForm">
      <h2>Settings</h2>
      <form>
        <label>
          Customize Response Template:
          <textarea value={template} onChange={handleTemplateChange} />
        </label>
        <label>
          Set Priority:
          <input type="text" value={priority} onChange={handlePriorityChange} />
        </label>
        <input type="submit" value="Save Settings" />
      </form>
    </div>
  );
};

export default Settings;