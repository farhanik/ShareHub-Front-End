import apiService from './apiService';

const toolService = {
  /**
   * Fetch all tools from the backend
   * @returns {Promise<Array>} - A list of all available tools
   */
  getAllTools: async () => {
    try {
      return await apiService.getTools();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Fetch details of a specific tool by its ID
   * @param {string} toolId - The ID of the tool to retrieve
   * @returns {Promise<Object>} - The tool details
   */
  getToolById: async (toolId) => {
    try {
      return await apiService.getToolById(toolId);
    } catch (error) {
      throw error;
    }
  },

  /**
   * Add a new tool to the platform
   * @param {Object} toolData - The tool data to be added
   * @returns {Promise<Object>} - The added tool's data
   */
  addNewTool: async (toolData) => {
    try {
      return await apiService.addTool(toolData);
    } catch (error) {
      throw error;
    }
  },
};

export default toolService;
