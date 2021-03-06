import React, { useState } from 'react';
import Moment from 'react-moment';
import RenderModal from '../shared/RenderModal';
import { API_ROOT } from '../../constants';
import ChatRenderDropdown from './ChatRenderDropdown';

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

  const displayAvatar = () => {
    if (currentUserId === conversation.author.id) {
      return conversation.receiver.avatar
    }
    else if (currentUserId === conversation.receiver.id) {
      return conversation.author.avatar
    }
  }

  const recentMessage = () => {
    if (!conversation.messages.length) {
      return null
    }
    return conversation.messages[conversation.messages.length - 1]
  }

  const msgPreview = (msg) => {
    if (msg.length > 80) {
      return msg.substring(0, 80) + ' ...'
    }
    return msg
  }

  const handleClick = (event) => {
    event.stopPropagation();
    setClicked(!clicked)
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
      .catch(() => {
        RenderModal('error', 'Server error. Please try again.')
      })
      if (!response) {return null}

      const updatedConversation = await response.json();
      if (updatedConversation.error) {
        RenderModal('error', updatedConversation.error)
      } else {
        acceptConvo(updatedConversation)
      }
    } else {
      RenderModal('error', 'You must be logged in to view that content')
    }
  }

  const handleReject = async () => {
    const token = localStorage.token
    if (token) {
      const response = await fetch(`${API_ROOT}/conversations/${conversation.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .catch(() => {
        RenderModal('error', 'Server error. Please try again.')
      })
      if (!response) {return null}

      const jsonResponse = await response.json();
      if (jsonResponse.error) {
        RenderModal('error', jsonResponse.error)
      } else {
        rejectConvo(conversation)
      }
    } else {
      RenderModal('error', 'You must be logged in to view that content')
    }
  }

  const renderConversation = () => {
    if (conversation.accepted) {
      return (
        <>
          <div className="circular-portrait">
            <img src={displayAvatar()} alt={displayOtherUserName()} />
          </div>
          <span id="chat-time">
            <Moment format="h:mm a on MM/DD/YYYY">
              {(recentMessage() && recentMessage().created_at) || conversation.created_at}
            </Moment>
          </span>
          <span id="chat-user">{displayOtherUserName()}</span><br/>
          <p id="chat-preview">
            {(recentMessage() && msgPreview(recentMessage().text)) || msgPreview(conversation.title)}
          </p>
          {selected ? 
            <div onClick={handleClick} className="three-dots">&#8230;</div> 
          : null}
          {clicked ? 
            <ChatRenderDropdown handleReject={handleReject} handleClick={handleClick} /> 
          : null}
        </>
      )
    } else if (!conversation.accepted && conversation.receiver.id === currentUserId) {
      return (
        <>
          <div className="circular-portrait">
            <img src={displayAvatar()} alt={displayOtherUserName()} />
          </div>
          <span id="chat-time">
            <Moment format="h:mm a on MM/DD/YYYY">
              {conversation.created_at}
            </Moment>
          </span>
          <span>{displayOtherUserName()}</span><br/>
          <p id="chat-preview">{msgPreview(conversation.title)} </p>
          <button className="message-accept" onClick={handleReject}>Reject</button>
          <button className="message-accept" onClick={handleAccept}>Accept</button>
        </>
      )
    } else if (!conversation.accepted && conversation.author.id === currentUserId) {
      return (
        <>
          <div className="circular-portrait">
            <img src={displayAvatar()} alt={displayOtherUserName()} />
          </div>
          <span id="chat-time">
            <Moment format="h:mm a on MM/DD/YYYY">
              {conversation.created_at}
            </Moment>
          </span>
          <span>{displayOtherUserName()}</span><br/>
          <p id="chat-preview">{msgPreview(conversation.title)}</p>
          <div className="pending-conversation">
            Pending acceptance from {displayOtherUserName()}
          </div>
        </>
      )
    }
    else {
      return null
    }
  }

  return renderConversation();
}

export default ChatConversation;