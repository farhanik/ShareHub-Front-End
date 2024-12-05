// src/components/messages/MessageList.jsx
import React, { useEffect, useState } from 'react';
import apiService from '../../services/apiService';
import Button from '../common/Button';
import { toast } from 'react-toastify';

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      setError(null);

      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
          toast.error('You must be logged in to view your messages.');
          return;
        }

        const fetchedMessages = await apiService.getMessagesByUser(user.id);
        setMessages(fetchedMessages);
      } catch (err) {
        setError('Failed to load messages. Please try again later.');
        console.error('Error fetching messages:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <div className="text-center text-brand-primary">Loading messages...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  if (messages.length === 0) {
    return <div className="text-center text-brand-text">You have no messages.</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-brand-text mb-6">Your Messages</h1>
      <div className="space-y-4">
        {messages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

const MessageCard = ({ message }) => {
  const { sender, receiver, content, timestamp, relatedBooking } = message;

  return (
    <div className="border border-gray-200 rounded shadow-card p-4 bg-white">
      <div className="flex justify-between">
        <span className="text-sm text-gray-600">
          <strong>From:</strong> {sender.username}
        </span>
        <span className="text-sm text-gray-600">
          <strong>To:</strong> {receiver.username}
        </span>
      </div>
      <p className="text-sm text-gray-800 mt-2 mb-4">{content}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">
          <strong>Related Booking:</strong>{' '}
          {relatedBooking ? `ID: ${relatedBooking.id}` : 'None'}
        </span>
        <span className="text-sm text-gray-500">{new Date(timestamp).toLocaleString()}</span>
      </div>
      <div className="mt-4">
        <Button
          label="Reply"
          variant="primary"
          size="small"
          onClick={() => console.log(`Reply to Message ID: ${message.id}`)}
        />
      </div>
    </div>
  );
};

export default MessageList;
