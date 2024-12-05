// src/components/tools/ToolList.jsx
import React, { useEffect, useState } from 'react';
import apiService from '../../services/apiService';
import Button from '../common/Button';

const ToolList = () => {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTools = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedTools = await apiService.getTools();
        setTools(fetchedTools);
      } catch (err) {
        setError('Failed to load tools. Please try again later.');
        console.error('Error fetching tools:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  if (loading) {
    return <div className="text-center text-brand-primary">Loading tools...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  if (tools.length === 0) {
    return <div className="text-center text-brand-text">No tools available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

const ToolCard = ({ tool }) => {
  return (
    <div className="border border-gray-200 rounded shadow-card p-4 bg-white">
      <h3 className="text-lg font-bold text-brand-text mb-2">{tool.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-brand-secondary font-medium">
          ${tool.rentalRate} / day
        </span>
        <Button
          label="Details"
          variant="primary"
          size="small"
          onClick={() => console.log(`Tool ID: ${tool.id}`)}
        />
      </div>
    </div>
  );
};

export default ToolList;
