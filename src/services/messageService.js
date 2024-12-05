import apiService from './apiService';

const messageService = {
  /**
   * Fetch all messages for the logged-in user
   * @param {string} userId - The ID of the user whose messages are being fetched
   * @returns {Promise<Array>} - A list of messages for the user
   */
  getMessagesByUser: async (userId) => {
    try {
      return await apiService.getMessagesByUser(userId);
    } catch (error) {
      throw error;
    }
  },

  /**
   * Send a new message to another user
   * @param {Object} messageData - The data for the new message
   * @returns {Promise<Object>} - The created message's data
   */
  sendMessage: async (messageData) => {
    try {
      return await apiService.sendMessage(messageData);
    } catch (error) {
      throw error;
    }
  },

  /**
   * Fetch a conversation between two users
   * @param {string} senderId - The ID of the sender
   * @param {string} receiverId - The ID of the receiver
   * @returns {Promise<Array>} - A list of messages between the two users
   */
  getConversation: async (senderId, receiverId) => {
    try {
      return await apiService.getConversation(senderId, receiverId);
    } catch (error) {
      throw error;
    }
  },
};

export default messageService;
