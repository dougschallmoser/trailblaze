import React, { useState, useEffect } from 'react';
import RenderModal from './RenderModal';
import { API_ROOT } from '../constants';

const ChatNewMessage = ({ convoId, currentUserId }) => {

  const [message, setMessage] = useState({
    text: '', conversation_id: '', user_id: currentUserId
  })

  const messageInput = React.createRef();

  useEffect(() => {
    setMessage(message => {
      return {...message, conversation_id: convoId}
    })
  }, [convoId])

  useEffect(() => {
    messageInput.current.scrollIntoView();
  })

  const handleChange = (e) => {
    setMessage({ ...message, text: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.token
    if (token) {
      try {
        const response = await fetch(`${API_ROOT}/messages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(message)
        })

        if (!response) {
          return RenderModal('error', 'Please try again.')
        }
        
        setMessage({ ...message, text: '', conversation_id: convoId })
      } catch(error) {
        return RenderModal('error', 'Server error. Please try again.')
      }
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