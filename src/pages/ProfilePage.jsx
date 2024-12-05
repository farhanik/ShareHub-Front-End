// src/pages/ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';
import Button from '../components/common/Button';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setUser(storedUser);
        setFormData({
          firstName: storedUser.firstName,
          lastName: storedUser.lastName,
          email: storedUser.email,
          phoneNumber: storedUser.phoneNumber,
          address: storedUser.address,
        });
      } else {
        toast.error('You must be logged in to view your profile.');
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const updatedUser = await apiService.updateUserProfile(user.id, formData);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      toast.success('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error(error.message || 'Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="text-center text-brand-text">
        Please log in to view your profile.
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-lg mx-auto bg-white shadow-card p-6 rounded">
        <h1 className="text-2xl font-bold text-brand-text mb-4 text-center">
          Your Profile
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              disabled
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
            />
          </div>
          <div>
            <Button
              type="submit"
              label={loading ? 'Updating...' : 'Update Profile'}
              variant="primary"
              size="large"
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
