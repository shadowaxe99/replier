```javascript
import { emailList } from './emailScanner';

const priorityKeywords = ['urgent', 'important', 'asap'];
const prioritySenders = ['boss@example.com', 'hr@example.com'];

export function setPriority() {
  emailList.forEach(email => {
    let isPriority = false;

    // Check if email is from a priority sender
    if (prioritySenders.includes(email.sender)) {
      isPriority = true;
    }

    // Check if email contains priority keywords
    priorityKeywords.forEach(keyword => {
      if (email.content.includes(keyword)) {
        isPriority = true;
      }
    });

    // Set email priority
    email.isPriority = isPriority;
  });
}
```