// src/components/auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import apiService from '../../services/apiService';
import Button from '../common/Button';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userData = await apiService.login({ email, password });
      login(userData.data); // Store the user in AuthContext
      toast.success('Login successful!');
      navigate('/tools'); // Redirect to tools page after successful login
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-background">
      <div className="w-full max-w-md bg-white shadow-card p-6 rounded">
        <h1 className="text-2xl font-bold mb-4 text-center text-brand-text">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-text">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-brand-text">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <Button
              type="submit"
              label={loading ? 'Logging in...' : 'Login'}
              variant="primary"
              size="medium"
              disabled={loading}
            />
          </div>
        </form>
        <p className="mt-4 text-sm text-center">
          Don’t have an account?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-brand-primary hover:underline"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
