import React, { useState } from 'react';
import faker from 'faker';
import Moment from 'react-moment';
import ChatRenderDropdown from './ChatRenderDropdown';
import { API_ROOT } from '../constants';

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

  const handleAccept = async () => {
    const token = localStorage.token
    if (token) {
      const response = await fetch(`${API_ROOT}/conversations/${conversation.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ conversation: {accepted: true} })
      })
      const newConversation = await response.json();
      acceptConvo(newConversation)
    }
  }

  const handleReject = () => {
    const token = localStorage.token
    if (token) {
      fetch(`${API_ROOT}/conversations/${conversation.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      rejectConvo(conversation)
    }
  }

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
          {clicked ? <ChatRenderDropdown handleReject={handleReject} handleClick={handleClick} /> : null}
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