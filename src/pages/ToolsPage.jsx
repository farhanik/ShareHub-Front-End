// src/pages/ToolsPage.jsx
import React from 'react';
import ToolList from '../components/tools/ToolList';
import { NavLink } from 'react-router-dom';
import Button from '../components/common/Button';

const ToolsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-brand-text">Available Tools</h1>
        <NavLink to="/tools/add">
          <Button label="Add a Tool" variant="primary" size="large" />
        </NavLink>
      </div>
      <ToolList />
    </div>
  );
};

export default ToolsPage;
