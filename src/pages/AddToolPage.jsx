// src/pages/AddToolPage.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import toolService from '../services/toolService';

const AddToolPage = () => {
  const [toolData, setToolData] = useState({
    name: '',
    description: '',
    rentalPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToolData({ ...toolData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await toolService.addNewTool(toolData);
      toast.success('Tool added successfully!');
      setToolData({ name: '', description: '', rentalPrice: '' }); // Reset form
    } catch (error) {
      toast.error('Failed to add tool. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-brand-text mb-6">Add a New Tool</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tool Name</label>
          <input
            type="text"
            name="name"
            value={toolData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={toolData.description}
            onChange={handleChange}
            className="form-input"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Rental Price (per day)</label>
          <input
            type="number"
            name="rentalPrice"
            value={toolData.rentalPrice}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button
          type="submit"
          className="button-primary"
        >
          Add Tool
        </button>
      </form>
    </div>
  );
};

export default AddToolPage;
