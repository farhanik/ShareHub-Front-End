// src/pages/HomePage.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/common/Button';

const HomePage = () => {
  return (
    <div className="bg-brand-background min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-brand-text mb-6">Welcome to ShareHub</h1>
        <p className="text-lg text-gray-700 mb-8">
          ShareHub is a community platform where neighbors can lend, borrow, and share tools, 
          skills, and resources to reduce waste and build stronger connections.
        </p>
        <div className="space-x-4">
          <NavLink to="/register">
            <Button label="Get Started" variant="primary" size="large" />
          </NavLink>
          <NavLink to="/login">
            <Button label="Login" variant="secondary" size="large" />
          </NavLink>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-brand-secondary mb-4">Why Choose ShareHub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon="🔧"
            title="Borrow Tools"
            description="Access a variety of tools for your projects without buying."
          />
          <FeatureCard
            icon="🤝"
            title="Collaborate Locally"
            description="Work with skilled neighbors to achieve your goals."
          />
          <FeatureCard
            icon="💬"
            title="Connect"
            description="Chat with community members to share ideas and advice."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-card rounded p-4 text-center">
    <div className="text-4xl">{icon}</div>
    <h3 className="text-xl font-semibold text-brand-text mt-4">{title}</h3>
    <p className="text-sm text-gray-600 mt-2">{description}</p>
  </div>
);

export default HomePage;
