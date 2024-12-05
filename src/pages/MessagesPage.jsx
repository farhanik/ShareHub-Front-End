// src/pages/MessagesPage.jsx
import React from 'react';
import MessageList from '../components/messages/MessageList';
import MessageForm from '../components/messages/MessageForm';

const MessagesPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-brand-text mb-6">Your Messages</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Message List */}
        <div>
          <MessageList />
        </div>
        {/* Send a New Message */}
        <div>
          <MessageForm receiverId={null} relatedBookingId={null} />
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
