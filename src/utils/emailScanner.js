import { emailAPI } from './emailAPI';
import { nlpProcessing } from './nlpProcessing.py';

let emailList = [];

export const scanInbox = async (user) => {
  try {
    const emails = await emailAPI.getInbox(user);
    emails.forEach(email => {
      if (!email.read) {
        const category = nlpProcessing.categorizeEmail(email);
        emailList.push({
          id: email.id,
          sender: email.sender,
          subject: email.subject,
          body: email.body,
          category: category,
          read: false
        });
      }
    });
  } catch (error) {
    console.error('Error scanning inbox: ', error);
  }
};

export const getEmailList = () => {
  return emailList;
};