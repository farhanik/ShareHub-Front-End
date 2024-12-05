/**
 * Validates if a field is not empty
 * @param {string} value - The value to validate
 * @returns {string|null} - Returns error message or null if valid
 */
export const validateRequired = (value) => {
    return value.trim() === '' ? 'This field is required.' : null;
  };
  
  /**
   * Validates an email format
   * @param {string} email - The email to validate
   * @returns {string|null} - Returns error message or null if valid
   */
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? null : 'Please enter a valid email address.';
  };
  
  /**
   * Validates a password (minimum 8 characters, including 1 letter and 1 number)
   * @param {string} password - The password to validate
   * @returns {string|null} - Returns error message or null if valid
   */
  export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password)
      ? null
      : 'Password must be at least 8 characters long and include 1 letter and 1 number.';
  };
  
  /**
   * Validates a phone number (10-15 digits, optional "+" at the start)
   * @param {string} phoneNumber - The phone number to validate
   * @returns {string|null} - Returns error message or null if valid
   */
  export const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    return phoneRegex.test(phoneNumber)
      ? null
      : 'Please enter a valid phone number (10-15 digits).';
  };
  
  /**
   * Validates a numeric value (e.g., rental rates, prices)
   * @param {string|number} value - The value to validate
   * @returns {string|null} - Returns error message or null if valid
   */
  export const validateNumeric = (value) => {
    return isNaN(value) || value <= 0
      ? 'Please enter a valid number greater than 0.'
      : null;
  };
  