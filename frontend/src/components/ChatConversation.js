import React from 'react';
import faker from 'faker';

const ChatConversation = ({ conversation }) => {
  return (
    <>
      <div className="circular-portrait">
        <img src={faker.image.avatar()} alt={conversation.receiver.name} />
      </div>
      <span>{conversation.receiver.name}</span>
      <p>{conversation.messages[conversation.messages.length - 1].text}</p>
    </>
  )
}

export default ChatConversation;