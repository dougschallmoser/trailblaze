import React, { useState } from 'react';
import faker from 'faker';
import Moment from 'react-moment';
import { API_ROOT, HEADERS } from '../constants';

const ChatConversation = ({ conversation, currentUserId, acceptConvo, rejectConvo, selected }) => {

  const [clicked, setClicked] = useState(false);

  const displayOtherUserName = () => {
    if (currentUserId === conversation.author.id) {
      return conversation.receiver.name
    }
    else if (currentUserId === conversation.receiver.id) {
      return conversation.author.name
    }
  }

  const recentMessage = () => {
    if (conversation.messages.length === 0) {
      return null
    }
    return conversation.messages[conversation.messages.length - 1]
  }

  const handleClick = (event) => {
    event.stopPropagation();
    setClicked(prevState => !prevState)
  }

  const handleAccept = () => {
    fetch(`${API_ROOT}/conversations/${conversation.id}`, {
      method: 'PATCH',
      headers: HEADERS,
      body: JSON.stringify({ conversation: {accepted: true} })
    }).then(response => response.json())
    .then(conversation => acceptConvo(conversation))
  }

  const handleReject = () => {
    fetch(`${API_ROOT}/conversations/${conversation.id}`, {
      method: 'DELETE',
      headers: HEADERS
    });
    rejectConvo(conversation)
  }

  const renderDropdown = 
    <div className="dropdown-menu-chat">
      <div className="dropdown-content-chat">
        <div className="dropdown-content-padding">
          <div className="dropdown-content-item">
            <button onClick={handleReject} className="user-submit">Delete Conversation</button>
          </div>
        </div>
        <div className="dropdown-content-bottom">
          <button className="close-button" onClick={handleClick}>Close</button>
        </div>
      </div>
    </div>

  const renderConversation = () => {
    if (conversation.accepted) {
      return (
        <>
          <div className="circular-portrait">
            <img src={faker.image.avatar()} alt={displayOtherUserName()} />
          </div>
          <span id="chat-time">
            <Moment format="h:mm a on MM/DD/YYYY">
              {(recentMessage() && recentMessage().created_at) || conversation.created_at}
            </Moment>
          </span>
          <span id="chat-user">{displayOtherUserName()}</span><br/>
          <p id="chat-preview">{(recentMessage() && recentMessage().text) || conversation.title} </p>
          {selected ? <div onClick={handleClick} className="three-dots">&#8230;</div> : null}
          {clicked ? renderDropdown : null}
        </>
      )
    } else if (!conversation.accepted && conversation.receiver.id === currentUserId) {
      return (
        <>
          <div className="circular-portrait">
            <img src={faker.image.avatar()} alt={displayOtherUserName()} />
          </div>
          <span id="chat-time">
            <Moment format="h:mm a on MM/DD/YYYY">
              {conversation.created_at}
            </Moment>
          </span>
          <span>{displayOtherUserName()}</span><br/>
          <p id="chat-preview">{conversation.title} </p>
          <button className="message-accept" onClick={handleReject}>Reject</button>
          <button className="message-accept" onClick={handleAccept}>Accept</button>
        </>
      )
    } else if (!conversation.accepted && conversation.author.id === currentUserId) {
      return (
        <>
          <div className="circular-portrait">
            <img src={faker.image.avatar()} alt={displayOtherUserName()} />
          </div>
          <span id="chat-time">
            <Moment format="h:mm a on MM/DD/YYYY">
              {conversation.created_at}
            </Moment>
          </span>
          <span>{displayOtherUserName()}</span><br/>
          <p id="chat-preview">{conversation.title}</p>
          <div className="pending-conversation">Pending acceptance from {displayOtherUserName()}</div>
        </>
      )
    }
    else {
      return null
    }
  }

  return renderConversation()
}

export default ChatConversation;