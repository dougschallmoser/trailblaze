import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ActionCableConsumer } from '@thrash-industries/react-actioncable-provider';
import { API_ROOT } from '../constants';
import RenderModal from './RenderModal';
import ChatCable from './ChatCable';
import ChatMessagesList from './ChatMessagesList';
import ChatConversation from './ChatConversation';

function ChatConversationsList({ match }) {

  const [convoData, setConvoData] = useState({
    conversations: [],
    activeConversation: null,
    clicked: false
  })

  const { conversations, activeConversation, clicked } = convoData;
  const history = useHistory();
  const currentUser = useSelector(state => state.currentUser.id);

  const fetchConversations = async () => {
    const token = localStorage.token
    if (token) {
      try {
        const response = await fetch(`${API_ROOT}/users/${match.params.id}/conversations`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })

        if (!response) {
          return RenderModal('error', 'Please try again.')
        }

        const userConvos = await response.json();

        if (userConvos.error) {
          history.push('/')
          RenderModal('error', userConvos.error)
        } else {
          setConvoData({ ...convoData, conversations: userConvos })
        }
      } catch(error) {
        return RenderModal('error', 'Server error. Please try again.')
      }
    } else {
      RenderModal('error', 'You must be logged in to view that content')
    }
  }

  useEffect(() => {
    fetchConversations();
  }, [])
  
  const handleClick = (id) => {
    if (!clicked) {
      setConvoData({ ...convoData, activeConversation: id, clicked: true })
    } else {
      setConvoData({ ...convoData, activeConversation: null, clicked: false })
    }
  }

  const handleReceivedConvo = response => {
    const { conversation } = response;
    setConvoData({
      ...convoData,
      conversations: [...convoData.conversations, conversation]
    })
  }

  const handleReceivedMessage = response => {
    const { message } = response;
    const conversations = [...convoData.conversations]
    const conversation = conversations.find(
      conversation => conversation.id === message.conversation_id
    );
    conversation.messages = [...conversation.messages, message]
    setConvoData({ ...convoData, conversations })
  }

  const handleAcceptConvo = updatedConvo => {
    const conversations = [...convoData.conversations].filter(
      conversation => conversation.id !== updatedConvo.id
    )
    conversations.push(updatedConvo)
    setConvoData({ ...convoData, conversations })
  }

  const handleRejectConvo = rejectedConvo => {
    const conversations = [...convoData.conversations].filter(
      conversation => conversation.id !== rejectedConvo.id
    )
    setConvoData({ ...convoData, conversations })
  }

  return (
    <div className="main-container">
      <div className="conversations-list">
        <ActionCableConsumer
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={handleReceivedConvo}
        />
        {conversations.length ? 
          (<ChatCable
            convos={conversations}
            handleReceivedMessage={handleReceivedMessage}
          />) : null
        }
        <h2>MESSAGES</h2>
        {conversations.length === 0 ? <div>No messages.</div> : null}
        {showConversations(conversations, handleClick, currentUser,
          handleAcceptConvo, handleRejectConvo, activeConversation)
        }
      </div>
      <div className="messages">
        {activeConversation ? 
          (<ChatMessagesList
            convo={findActiveConvo(conversations, activeConversation)}
          />) : null
        }
      </div>
    </div>
  )
}

// Helper Functions

const findActiveConvo = (convos, activeConvo) => {
  return convos.find(conversation => conversation.id === activeConvo)
}

const showConversations = (conversations, handleClick, currentUserId, handleAcceptConvo, handleRejectConvo, activeConversation) => {
  return conversations.map(conversation => {

    const selected = () => {
      return activeConversation === conversation.id
    }
    
    const renderConvo = () => {
      if (!conversation.accepted) {
        return (
          <div className="conversation-item no-cursor" key={conversation.id}>
            <ChatConversation
              conversation={conversation}
              currentUserId={currentUserId}
              acceptConvo={handleAcceptConvo}
              rejectConvo={handleRejectConvo}
            />
          </div>
        )
      } else {
        return (
          <div
            className={`conversation-item ${selected() ? "selected-convo" : ""}`}
            key={conversation.id}
            onClick={() => handleClick(conversation.id)}
          >
            <ChatConversation
              conversation={conversation}
              selected={selected()}
              currentUserId={currentUserId}
              rejectConvo={handleRejectConvo}
            />
          </div>
        )
      }
    }
    return renderConvo();
  })
}

export default ChatConversationsList;