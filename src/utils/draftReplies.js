import axios from 'axios';
import { processNLP } from './nlpProcessing.py';

let draftedReplies = [];

export const draftReply = async (emailList, TemplateSchema) => {
  try {
    for (let email of emailList) {
      let context = await processNLP(email.content);
      let template = TemplateSchema.find(template => template.context === context);
      if (template) {
        let draft = {
          to: email.sender,
          subject: `Re: ${email.subject}`,
          body: template.body,
        };
        draftedReplies.push(draft);
      }
    }
    return draftedReplies;
  } catch (error) {
    console.error('Error drafting replies:', error);
  }
};

export const sendDraft = async (draft) => {
  try {
    let response = await axios.post('/api/sendEmail', draft);
    if (response.status === 200) {
      draftedReplies = draftedReplies.filter(d => d !== draft);
      return true;
    } else {
      throw new Error('Failed to send draft');
    }
  } catch (error) {
    console.error('Error sending draft:', error);
    return false;
  }
};

export const getDraftedReplies = () => {
  return draftedReplies;
};