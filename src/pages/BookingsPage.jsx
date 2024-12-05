// src/pages/BookingsPage.jsx
import React from 'react';
import BookingList from '../components/bookings/BookingList';
import { NavLink } from 'react-router-dom';
import Button from '../components/common/Button';

const BookingsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-brand-text">Your Bookings</h1>
        <NavLink to="/tools">
          <Button label="Book a Tool" variant="primary" size="large" />
        </NavLink>
      </div>
      <BookingList />
    </div>
  );
};

export default BookingsPage;
