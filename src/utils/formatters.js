/**
 * Formats a date to a readable string
 * @param {string|Date} date - The date to format
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} - The formatted date string
 */
export const formatDate = (date, options = {}) => {
    try {
      const defaultOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(
        new Date(date)
      );
    } catch {
      return 'Invalid Date';
    }
  };
  
  /**
   * Formats a number as currency
   * @param {number} value - The number to format
   * @param {string} currency - The currency code (e.g., 'USD')
   * @returns {string} - The formatted currency string
   */
  export const formatCurrency = (value, currency = 'USD') => {
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
      }).format(value);
    } catch {
      return 'Invalid Amount';
    }
  };
  
  /**
   * Formats a phone number (e.g., "+1234567890" to "+1 (234) 567-890")
   * @param {string} phoneNumber - The phone number to format
   * @returns {string} - The formatted phone number
   */
  export const formatPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+?(\d{1,3})(\d{3})(\d{3})(\d{4})$/;
    const match = phoneNumber.match(phoneRegex);
  
    if (!match) {
      return 'Invalid Phone Number';
    }
  
    const [, countryCode, areaCode, firstPart, secondPart] = match;
    return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
  };
  
  /**
   * Truncates a string to a specified length
   * @param {string} str - The string to truncate
   * @param {number} maxLength - The maximum length of the string
   * @returns {string} - The truncated string
   */
  export const truncateString = (str, maxLength) => {
    if (!str || str.length <= maxLength) {
      return str;
    }
    return `${str.substring(0, maxLength)}...`;
  };
  
  /**
   * Formats a numeric value with commas as thousand separators
   * @param {number} value - The numeric value to format
   * @returns {string} - The formatted number with commas
   */
  export const formatNumberWithCommas = (value) => {
    try {
      return value.toLocaleString('en-US');
    } catch {
      return 'Invalid Number';
    }
  };
  