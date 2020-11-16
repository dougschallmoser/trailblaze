import React, { useState } from 'react';
import { API_ROOT, HEADERS } from '../constants';

const ChatNewMessage = (props) => {

  const [message, setMessage] = useState({
    text: '', conversation_id: props.conversation_id, user_id: props.currentUserId
  })

  // useEffect(() => {
  //   setMessage({ ...message, conversation_id: props.conversation_id })
  // }, [props])

  const handleChange = (e) => {
    setMessage({ ...message, text: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(message)
    });
    setMessage({ ...message, text: '' })
  };

  return (
    <div className="newMessageForm">
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
  );
}

export default ChatNewMessage;