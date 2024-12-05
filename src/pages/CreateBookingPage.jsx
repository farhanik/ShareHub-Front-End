// src/pages/CreateBookingPage.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import bookingService from '../services/bookingService';

const CreateBookingPage = () => {
  const [bookingData, setBookingData] = useState({
    toolId: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookingService.createBooking(bookingData);
      toast.success('Booking created successfully!');
      setBookingData({ toolId: '', startDate: '', endDate: '' }); // Reset form
    } catch (error) {
      toast.error('Failed to create booking. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-brand-text mb-6">Create a Booking</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tool ID</label>
          <input
            type="text"
            name="toolId"
            value={bookingData.toolId}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={bookingData.startDate}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            name="endDate"
            value={bookingData.endDate}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button
          type="submit"
          className="button-primary"
        >
          Create Booking
        </button>
      </form>
    </div>
  );
};

export default CreateBookingPage;
