import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const apiService = {
  // Authentication Endpoints
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Registration failed');
    }
  },

  // Cancel a booking by ID
cancelBooking: async (bookingId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/bookings/${bookingId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to cancel booking');
  }
},

  login: async (loginData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/login`, loginData);
      if (response.data.data) {
        localStorage.setItem('user', JSON.stringify(response.data.data));
      }
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Login failed');
    }
  },

  updateUserProfile: async (userId, profileData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/users/${userId}`, profileData);
      return response.data.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Failed to update profile');
    }
  },

  // Tool Endpoints
  getTools: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tools`);
      return response.data.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Failed to fetch tools');
    }
  },

  getToolById: async (toolId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tools/${toolId}`);
      return response.data.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Failed to fetch tool details');
    }
  },

  addTool: async (toolData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/tools`, toolData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Failed to add tool');
    }
  },

  // Booking Endpoints
  getUserBookings: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/bookings/borrower/${userId}`);
      return response.data.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Failed to fetch bookings');
    }
  },

  createBooking: async (bookingData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Booking creation failed');
    }
  },

  // Message Endpoints
  sendMessage: async (messageData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/messages/send`, messageData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Message sending failed');
    }
  },

  getMessagesByUser: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/messages/user/${userId}`);
      return response.data.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Failed to fetch messages');
    }
  },

  getConversation: async (senderId, receiverId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/messages/conversation`, {
        params: { senderId, receiverId },
      });
      return response.data.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Failed to fetch conversation');
    }
  },
};




export default apiService;
