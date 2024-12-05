import { useContext } from 'react';
import { AuthContext } from '../components/auth/AuthContext';

/**
 * Custom hook to use authentication utilities
 * @returns {Object} - Authentication methods and user data
 */
const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export default useAuth;
