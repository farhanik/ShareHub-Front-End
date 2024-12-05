// src/components/auth/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../../services/apiService';
import Button from '../common/Button';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiService.register(formData);
      toast.success('Registration successful! Please log in.');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      toast.error(error.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-background">
      <div className="w-full max-w-md bg-white shadow-card p-6 rounded">
        <h1 className="text-2xl font-bold mb-4 text-center text-brand-text">Register</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-brand-text">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-text">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-brand-text">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-brand-text">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-brand-text">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-brand-text">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Button
              type="submit"
              label={loading ? 'Registering...' : 'Register'}
              variant="primary"
              size="medium"
              disabled={loading}
            />
          </div>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-brand-primary hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
