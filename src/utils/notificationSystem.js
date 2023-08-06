```javascript
import { draftedReplies } from './draftReplies.js';

export function sendNotification() {
  if (draftedReplies.length > 0) {
    // Assuming we have a UI component to show notifications
    // This is a placeholder function, replace it with actual implementation
    showNotification(`You have ${draftedReplies.length} drafted replies awaiting review.`);
  }
}

function showNotification(message) {
  // This is a placeholder function, replace it with actual implementation
  console.log(message);
}
```