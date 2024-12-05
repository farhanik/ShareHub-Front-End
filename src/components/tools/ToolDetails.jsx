// src/components/tools/ToolDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiService from '../../services/apiService';
import Button from '../common/Button';
import { toast } from 'react-toastify';

const ToolDetails = () => {
  const { toolId } = useParams(); // Retrieve the tool ID from the URL
  const navigate = useNavigate();

  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchToolDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedTool = await apiService.getToolById(toolId);
        setTool(fetchedTool);
      } catch (err) {
        setError('Failed to load tool details. Please try again later.');
        console.error('Error fetching tool details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchToolDetails();
  }, [toolId]);

  const handleBookNow = () => {
    // Navigate to booking form for this tool
    navigate(`/bookings/new?toolId=${toolId}`);
  };

  if (loading) {
    return <div className="text-center text-brand-primary">Loading tool details...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  if (!tool) {
    return <div className="text-center text-brand-text">Tool not found.</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-card p-6 rounded">
        <h1 className="text-3xl font-bold text-brand-text mb-4">{tool.name}</h1>
        <p className="text-sm text-gray-600 mb-6">{tool.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold text-brand-secondary">Details:</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Category:</strong> {tool.category}</li>
              <li><strong>Condition:</strong> {tool.condition}</li>
              <li><strong>Available:</strong> {tool.available ? 'Yes' : 'No'}</li>
              <li><strong>Rental Rate:</strong> ${tool.rentalRate} / day</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-brand-secondary">Owner Information:</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Name:</strong> {tool.owner.firstName} {tool.owner.lastName}</li>
              <li><strong>Contact:</strong> {tool.owner.email}</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex space-x-4">
          {tool.available && (
            <Button
              label="Book Now"
              variant="primary"
              size="large"
              onClick={handleBookNow}
            />
          )}
          <Button
            label="Back to Tools"
            variant="secondary"
            size="large"
            onClick={() => navigate('/tools')}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
