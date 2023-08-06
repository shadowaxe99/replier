```javascript
import axios from 'axios';

const GMAIL_API = 'https://www.googleapis.com/gmail/v1/users';
const OUTLOOK_API = 'https://outlook.office.com/api/v2.0/me';

export const connectEmailAPI = async (platform, accessToken) => {
  let apiURL = '';
  switch (platform) {
    case 'gmail':
      apiURL = GMAIL_API;
      break;
    case 'outlook':
      apiURL = OUTLOOK_API;
      break;
    default:
      throw new Error('Invalid email platform');
  }

  try {
    const response = await axios.get(`${apiURL}/messages`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error connecting to email API:', error);
    throw error;
  }
};
```