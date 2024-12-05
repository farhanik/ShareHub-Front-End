// src/components/common/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-secondary text-white py-4 text-center">
      <p>&copy; 2024 ShareHub. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
