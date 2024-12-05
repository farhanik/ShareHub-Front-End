import apiService from './apiService';

const authService = {
  /**
   * Register a new user
   * @param {Object} userData - The user data to register
   */
  register: async (userData) => {
    try {
      return await apiService.register(userData);
    } catch (error) {
      throw error;
    }
  },

  /**
   * Login a user and store the token in local storage
   * @param {Object} loginData - The login credentials
   */
  login: async (loginData) => {
    try {
      const response = await apiService.login(loginData);
      if (response.data) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data.user;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Logout a user and clear session data
   */
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  /**
   * Get the currently logged-in user's data
   * @returns {Object|null} The user data or null if not logged in
   */
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  /**
   * Get the authentication token
   * @returns {string|null} The token or null if not available
   */
  getToken: () => {
    return localStorage.getItem('token');
  },

  /**
   * Check if the user is authenticated
   * @returns {boolean} True if authenticated, false otherwise
   */
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  /**
   * Update the current user's profile
   * @param {string} userId - The ID of the user
   * @param {Object} profileData - The updated profile data
   */
  updateProfile: async (userId, profileData) => {
    try {
      const updatedUser = await apiService.updateUserProfile(userId, profileData);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
