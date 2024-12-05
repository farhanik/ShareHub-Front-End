import { useState } from 'react';

/**
 * Custom hook for making API calls with loading and error handling
 * @param {Function} apiFunction - The API function to be executed
 * @returns {Object} - API call utility functions and state
 */
const useApi = (apiFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Executes the provided API function
   * @param  {...any} args - Arguments to pass to the API function
   * @returns {Promise<void>} - Resolves when the API call is complete
   */
  const execute = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiFunction(...args);
      setData(response);
      return response;
    } catch (err) {
      setError(err);
      console.error('API error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    execute,
  };
};

export default useApi;
