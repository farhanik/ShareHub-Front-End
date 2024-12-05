import apiService from './apiService';

const bookingService = {
  /**
   * Fetch all bookings for the logged-in user
   * @param {string} userId - The ID of the user whose bookings are being fetched
   * @returns {Promise<Array>} - A list of bookings for the user
   */
  getUserBookings: async (userId) => {
    try {
      return await apiService.getUserBookings(userId);
    } catch (error) {
      throw error;
    }
  },

  /**
   * Create a new booking for a tool
   * @param {Object} bookingData - The data for the new booking
   * @returns {Promise<Object>} - The created booking's data
   */
  createBooking: async (bookingData) => {
    try {
      return await apiService.createBooking(bookingData);
    } catch (error) {
      throw error;
    }
  },

  /**
   * Cancel a booking by its ID
   * @param {string} bookingId - The ID of the booking to cancel
   * @returns {Promise<Object>} - The updated booking data after cancellation
   */
  cancelBooking: async (bookingId) => {
    try {
      const response = await apiService.cancelBooking(bookingId);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default bookingService;
