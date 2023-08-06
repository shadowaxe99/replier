import axios from 'axios';
import { userState } from '../components/Login';

export const authenticateUser = async (username, password) => {
  try {
    const response = await axios.post('/api/authenticate', {
      username,
      password
    });

    if (response.data.success) {
      userState.loggedIn = true;
      userState.username = username;
      return { success: true, message: 'loginSuccess' };
    } else {
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    console.error('Error during authentication:', error);
    return { success: false, message: error.message };
  }
};

export const implementOAuth = async (provider) => {
  try {
    const response = await axios.get(`/api/authenticate/${provider}`);

    if (response.data.url) {
      window.location.href = response.data.url;
    } else {
      console.error('Error during OAuth:', response.data.message);
    }
  } catch (error) {
    console.error('Error during OAuth:', error);
  }
};