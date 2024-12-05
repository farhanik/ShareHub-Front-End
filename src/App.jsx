import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import AddToolPage from './pages/AddToolPage';
import ToolDetails from './components/tools/ToolDetails';
import BookingsPage from './pages/BookingsPage';
import CreateBookingPage from './pages/CreateBookingPage';
import MessagesPage from './pages/MessagesPage';
import ProfilePage from './pages/ProfilePage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './styles/tailwind.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />

          {/* Main content */}
          <main className="flex-grow">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />

              {/* Tools */}
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/tools/add" element={<AddToolPage />} />
              <Route path="/tools/:toolId" element={<ToolDetails />} />

              {/* Bookings */}
              <Route path="/bookings" element={<BookingsPage />} />
              <Route path="/bookings/new" element={<CreateBookingPage />} />

              {/* Messages */}
              <Route path="/messages" element={<MessagesPage />} />

              {/* Profile */}
              <Route path="/profile" element={<ProfilePage />} />

              {/* Auth */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
