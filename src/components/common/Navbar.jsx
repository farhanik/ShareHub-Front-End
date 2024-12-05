// src/components/common/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../components/auth/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center bg-brand-primary text-white px-6 py-4 shadow-lg">
      <div className="text-xl font-semibold">
        <NavLink to="/" className="hover:underline">
          ShareHub
        </NavLink>
      </div>
      <div className="flex space-x-4 items-center">
        <NavLink to="/tools" className="hover:underline">
          Tools
        </NavLink>
        <NavLink to="/bookings" className="hover:underline">
          Bookings
        </NavLink>
        <NavLink to="/messages" className="hover:underline">
          Messages
        </NavLink>
        {user ? (
          <>
            <span className="font-medium">{user.firstName}</span>
            <button
              onClick={logout}
              className="bg-brand-secondary text-white px-3 py-1 rounded hover:bg-opacity-80"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="hover:underline">
              Login
            </NavLink>
            <NavLink to="/register" className="hover:underline">
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
