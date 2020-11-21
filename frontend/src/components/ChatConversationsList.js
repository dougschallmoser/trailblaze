import React from 'react';
import { connect } from 'react-redux';
import RenderModal from './RenderModal';
import { ActionCableConsumer } from '@thrash-industries/react-actioncable-provider';
import { API_ROOT } from '../constants';
import ChatCable from './ChatCable';
import ChatMessagesList from './ChatMessagesList';
import ChatConversation from './ChatConversation';

class ChatConversationsList extends React.Component {
  state = {
    conversations: [],
    activeConversation: null,
    clicked: false
  }

  componentDidMount = async () => {
    const token = localStorage.token
    if (token) {
      const response = await fetch(`${API_ROOT}/users/${this.props.match.params.id}/conversations`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      const userConvos = await response.json();
      if (userConvos.error) {
        this.props.history.push('/')
        RenderModal('error', userConvos.error)
      } else {
        this.setState({ ...this.state, conversations: userConvos })
      }
    } else {
      RenderModal('error', 'You must be logged in to view that content')
    }
  }
  
  handleClick = (id) => {
    if (!this.state.clicked) {
      this.setState({ activeConversation: id, clicked: true })
    } else {
      this.setState({ activeConversation: null, clicked: false })
    }
  }

  handleReceivedConversation = response => {
    const { conversation } = response;
    this.setState({
      conversations: [...this.state.conversations, conversation]
    })
  }

  handleReceivedMessage = response => {
    const { message } = response;
    const conversations = [...this.state.conversations]
    const conversation = conversations.find(
      conversation => conversation.id === message.conversation_id
    );
    conversation.messages = [...conversation.messages, message]
    this.setState({ conversations })
  }

  handleAcceptConvo = updatedConvo => {
    const oldConversations = [...this.state.conversations]
    const conversations = oldConversations.filter(
      conversation => conversation.id !== updatedConvo.id
    )
    conversations.push(updatedConvo)
    this.setState({ conversations })
  }

  handleRejectConvo = rejectedConvo => {
    const oldConversations = [...this.state.conversations]
    const conversations = oldConversations.filter(
      conversation => conversation.id !== rejectedConvo.id
    )
    this.setState({ conversations })
  }

  render = () => {
    const { conversations, activeConversation } = this.state;

    return (
      <>
        <div className="conversationsList">
          <ActionCableConsumer
            channel={{ channel: 'ConversationsChannel' }}
            onReceived={this.handleReceivedConversation}
          />
          {this.state.conversations.length ? (
            <ChatCable
              conversations={conversations}
              handleReceivedMessage={this.handleReceivedMessage}
            />
          ) : null}
          <h2>MESSAGES</h2>
          {conversations.length === 0 ? <div>No messages.</div> : null}
          {showConversations(conversations, this.handleClick, this.props.currentUser,
            this.handleAcceptConvo, this.handleRejectConvo, this.state.activeConversation)
          }
        </div>
        <div className="messages">
          {activeConversation ? (
            <ChatMessagesList
              conversation={findActiveConversation(
                conversations,
                activeConversation
              )}
            />
          ) : null}
        </div>
      </>
    )
  }
}

const findActiveConversation = (conversations, activeConversation) => {
  return conversations.find(
    conversation => conversation.id === activeConversation
  )
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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.id
  }
}

export default connect(mapStateToProps)(ChatConversationsList);