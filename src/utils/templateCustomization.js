```javascript
import axios from 'axios';

const TemplateSchema = {
  id: String,
  title: String,
  content: String,
};

let draftedReplies = [];

const customizeTemplate = async (templateId, newContent) => {
  try {
    const response = await axios.put(`/api/templates/${templateId}`, {
      content: newContent,
    });

    if (response.status === 200) {
      console.log('Template updated successfully');
    }
  } catch (error) {
    console.error('Error updating template', error);
  }
};

const createTemplate = async (title, content) => {
  try {
    const response = await axios.post('/api/templates', {
      title,
      content,
    });

    if (response.status === 201) {
      console.log('Template created successfully');
    }
  } catch (error) {
    console.error('Error creating template', error);
  }
};

const deleteTemplate = async (templateId) => {
  try {
    const response = await axios.delete(`/api/templates/${templateId}`);

    if (response.status === 200) {
      console.log('Template deleted successfully');
    }
  } catch (error) {
    console.error('Error deleting template', error);
  }
};

export { customizeTemplate, createTemplate, deleteTemplate, TemplateSchema, draftedReplies };
```