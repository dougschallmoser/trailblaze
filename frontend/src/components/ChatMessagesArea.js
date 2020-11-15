import React from 'react';
import ChatNewMessageForm from './ChatNewMessageForm';
import { useSelector } from 'react-redux';

const ChatMessagesArea = ({ conversation: { id, title, messages } }) => {
  const currentUser = useSelector(state => state.currentUser);

  const orderedMessages = messages => {
    const sortedMessages = messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    )
    return sortedMessages.map(message => {
      const myMsg = () => {
        return (currentUser.id === message.user.id)
      }
      return (
      <li key={message.id} className={myMsg() ? "me" : "them"}>{message.text}</li>
      )
    })
  }

  return (
    <>
      <ul>{orderedMessages(messages)}</ul>
      <ChatNewMessageForm conversation_id={id} currentUserId={currentUser.id} />
    </>
  )
}

export default ChatMessagesArea;