import React from 'react';
import { connect } from 'react-redux';
import { API_ROOT } from '../constants';
import { ActionCableConsumer } from '@thrash-industries/react-actioncable-provider';
import ChatCable from './ChatCable';
import ChatMessagesList from './ChatMessagesList';
import ChatConversation from './ChatConversation';

class ChatConversationsList extends React.Component {
  state = {
    conversations: [],
    currentUserId: null,
    activeConversation: null
  }

  componentDidMount = () => {
    fetch(`${API_ROOT}/conversations`)
      .then(res => res.json())
      .then(conversations => {
        const userConvos = conversations.filter(convo => convo.author.id === this.props.currentUser || 
          convo.receiver.id === this.props.currentUser)
        this.setState({ ...this.state, conversations: userConvos })
      })
  }

  handleClick = (id) => {
    this.setState({ activeConversation: id })
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
          <h2>Messages</h2>
          {conversations.length === 0 ? <div>No messages.</div> : null}
          {mapConversations(conversations, this.handleClick, this.props.currentUser, this.handleAcceptConvo, this.handleRejectConvo, this.state.activeConversation)}
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

const mapConversations = (conversations, handleClick, currentUserId, handleAcceptConvo, handleRejectConvo, activeConversation) => {
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
              currentUserId={currentUserId}
            />
          </div>
        )
      }
    }
    return renderConvo()
  })
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.id
  }
}

export default connect(mapStateToProps)(ChatConversationsList);