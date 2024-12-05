// src/components/bookings/BookingList.jsx
import React, { useEffect, useState } from 'react';
import apiService from '../../services/apiService';
import Button from '../common/Button';
import { toast } from 'react-toastify';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      setError(null);

      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
          toast.error('You must be logged in to view your bookings.');
          return;
        }

        const fetchedBookings = await apiService.getUserBookings(user.id);
        setBookings(fetchedBookings);
      } catch (err) {
        setError('Failed to load bookings. Please try again later.');
        console.error('Error fetching bookings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div className="text-center text-brand-primary">Loading bookings...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  if (bookings.length === 0) {
    return <div className="text-center text-brand-text">You have no bookings.</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-brand-text mb-6">Your Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

const BookingCard = ({ booking }) => {
  const { tool, startDate, endDate, status, notes } = booking;

  return (
    <div className="border border-gray-200 rounded shadow-card p-4 bg-white">
      <h3 className="text-lg font-bold text-brand-text mb-2">
        {tool ? tool.name : `Tool ID: ${booking.toolId}`}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        <strong>Start:</strong> {new Date(startDate).toLocaleString()}
      </p>
      <p className="text-sm text-gray-600 mb-4">
        <strong>End:</strong> {new Date(endDate).toLocaleString()}
      </p>
      <p className="text-sm text-gray-600 mb-4">
        <strong>Status:</strong> {status}
      </p>
      <p className="text-sm text-gray-600 mb-4">
        <strong>Notes:</strong> {notes || 'No notes provided'}
      </p>
      <div className="flex justify-between">
        <Button
          label="View Tool"
          variant="secondary"
          size="small"
          onClick={() => console.log(`View Tool ID: ${booking.toolId}`)}
        />
        <Button
          label="Cancel Booking"
          variant="danger"
          size="small"
          onClick={() => console.log(`Cancel Booking ID: ${booking.id}`)}
        />
      </div>
    </div>
  );
};

export default BookingList;
