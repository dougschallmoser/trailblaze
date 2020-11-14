import React, { useState, useEffect } from 'react';
import { API_ROOT, HEADERS } from '../constants';

const ChatNewMessageForm = (props) => {

  const [message, setMessage] = useState({
    text: '', conversation_id: props.conversation_id, user_id: 1
  })

  useEffect(() => {
    setMessage({ ...message, conversation_id: props.conversation_id })
  }, [props])

  // componentDidUpdate = nextProps => {
  //   this.setState({ conversation_id: nextProps.conversation_id });
  // };

  const handleChange = e => {
    setMessage({ ...message, text: e.target.value })
  };

  const handleSubmit = e => {
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
        <label>New Message:</label>
        <br />
        <input
          type="text"
          value={message.text}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ChatNewMessageForm;