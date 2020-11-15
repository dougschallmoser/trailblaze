import React from 'react';
import faker from 'faker';
import Moment from 'react-moment';

const ChatConversation = ({ conversation, currentUserId }) => {

  const displayOtherUserName = () => {
    if (currentUserId === conversation.author.id) {
      return conversation.receiver.name
    }
    else if (currentUserId === conversation.receiver.id) {
      return conversation.author.name
    }
  }

  const recentMessage = () => {
    return conversation.messages[conversation.messages.length - 1]
  }

  return (
    <>
      <div className="circular-portrait">
        <img src={faker.image.avatar()} alt={displayOtherUserName()} />
      </div>
      <span id="chat-time"><Moment format="h:mm a on MM/DD/YYYY">{recentMessage().created_at}</Moment></span>
      <span>{displayOtherUserName()}</span><br/>
      <p id="chat-preview">{recentMessage().text} </p>
    </>
  )
}

export default ChatConversation;