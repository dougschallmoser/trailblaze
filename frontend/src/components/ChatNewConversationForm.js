import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { API_ROOT, HEADERS } from '../constants';

const ChatNewConversationForm = () => {

  const currentUser = useSelector(state => state.currentUser);
  const [convo, setConvo] = useState({ title: '', author_id: 1, receiver_id: 2 });

  const handleChange = e => {
    setConvo({ ...convo, title: e.target.value })
  };

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`${API_ROOT}/conversations`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(convo)
    });
    setConvo({ ...convo, title: '' });
  };

  return (
    <div className="newConversationForm">
      <form onSubmit={handleSubmit}>
        <label>New Conversation:</label>
        <br />
        <input
          type="text"
          value={convo.title}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ChatNewConversationForm;