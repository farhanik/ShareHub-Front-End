// src/components/messages/MessageForm.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import apiService from '../../services/apiService';
import Button from '../common/Button';

const MessageForm = ({ receiverId, relatedBookingId }) => {
  const [formData, setFormData] = useState({
    content: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        toast.error('You must be logged in to send a message.');
        return;
      }

      const messageData = {
        senderId: user.id,
        receiverId,
        content: formData.content,
        relatedBookingId: relatedBookingId || null,
      };

      await apiService.sendMessage(messageData);
      toast.success('Message sent successfully!');
      setFormData({ content: '' }); // Reset the form
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(error.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-card p-6 rounded">
      <h1 className="text-2xl font-bold text-brand-text mb-4 text-center">Send a Message</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-brand-text">
            Message Content
          </label>
          <textarea
            id="content"
            name="content"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <Button
            type="submit"
            label={loading ? 'Sending...' : 'Send Message'}
            variant="primary"
            size="large"
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
