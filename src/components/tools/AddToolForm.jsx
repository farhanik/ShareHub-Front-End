// src/components/tools/AddToolForm.jsx
import React, { useState } from 'react';
import apiService from '../../services/apiService';
import Button from '../common/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddToolForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    rentalRate: '',
    category: '',
    condition: '',
    available: true,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        toast.error('You must be logged in to add a tool.');
        navigate('/login');
        return;
      }

      const toolData = {
        ...formData,
        owner: { id: user.id }, // Assuming backend expects owner object with ID
      };

      await apiService.addTool(toolData);
      toast.success('Tool added successfully!');
      navigate('/tools');
    } catch (error) {
      console.error('Error adding tool:', error);
      toast.error(error.message || 'Failed to add tool. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-lg mx-auto bg-white shadow-card p-6 rounded">
        <h1 className="text-2xl font-bold text-brand-text mb-4 text-center">
          Add a New Tool
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-text">
              Tool Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-brand-text"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="rentalRate"
              className="block text-sm font-medium text-brand-text"
            >
              Rental Rate (per day)
            </label>
            <input
              type="number"
              id="rentalRate"
              name="rentalRate"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.rentalRate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-brand-text">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="condition" className="block text-sm font-medium text-brand-text">
              Condition
            </label>
            <input
              type="text"
              id="condition"
              name="condition"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.condition}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="available"
              name="available"
              className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded"
              checked={formData.available}
              onChange={handleChange}
            />
            <label htmlFor="available" className="ml-2 block text-sm text-brand-text">
              Available for Renting
            </label>
          </div>
          <div>
            <Button
              type="submit"
              label={loading ? 'Adding...' : 'Add Tool'}
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

export default AddToolForm;
