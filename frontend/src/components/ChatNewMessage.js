import React, { useState, useEffect } from 'react';
import { API_ROOT } from '../constants';

const ChatNewMessage = ({ conversationId, currentUserId }) => {

  const [message, setMessage] = useState({
    text: '', conversation_id: '', user_id: currentUserId
  })

  const messageInput = React.createRef();

  useEffect(() => {
    setMessage(message => {
      return {...message, conversation_id: conversationId}
    })
  }, [conversationId])

  useEffect(() => {
    messageInput.current.scrollIntoView();
  })

  const handleChange = (e) => {
    setMessage({ ...message, text: e.target.value })
  }

  const handleSubmit = (e) => {
    const token = localStorage.token
    if (token) {
      e.preventDefault();
      fetch(`${API_ROOT}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(message)
      })
      setMessage({ ...message, text: '', conversation_id: conversationId })
    }
  }

  return (
    <div className="newMessageForm" ref={messageInput}>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={message.text}
            onChange={handleChange}
            className="message-input"
          />
        <div className="submit-container">
          <input type="submit" value="&#8593;" className="message-submit" />
        </div>
      </form>
    </div>
  )
}

export default ChatNewMessage;