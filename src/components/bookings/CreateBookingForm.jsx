// src/components/bookings/CreateBookingForm.jsx
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import apiService from '../../services/apiService';
import Button from '../common/Button';
import { toast } from 'react-toastify';

const CreateBookingForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const toolId = searchParams.get('toolId'); // Retrieve tool ID from query parameters

  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    notes: '',
  });

  const [loading, setLoading] = useState(false);

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
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        toast.error('You must be logged in to create a booking.');
        navigate('/login');
        return;
      }

      const bookingData = {
        toolId,
        startDate: formData.startDate,
        endDate: formData.endDate,
        notes: formData.notes,
        borrower: { id: user.id }, // Assuming backend expects borrower object with ID
      };

      await apiService.createBooking(bookingData);
      toast.success('Booking created successfully!');
      navigate('/bookings');
    } catch (error) {
      console.error('Error creating booking:', error);
      toast.error(error.message || 'Failed to create booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-lg mx-auto bg-white shadow-card p-6 rounded">
        <h1 className="text-2xl font-bold text-brand-text mb-4 text-center">
          Create a Booking
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-brand-text">
              Start Date
            </label>
            <input
              type="datetime-local"
              id="startDate"
              name="startDate"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-brand-text">
              End Date
            </label>
            <input
              type="datetime-local"
              id="endDate"
              name="endDate"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-brand-text">
              Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <Button
              type="submit"
              label={loading ? 'Creating...' : 'Create Booking'}
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

export default CreateBookingForm;
