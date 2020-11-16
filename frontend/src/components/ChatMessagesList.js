import React from 'react';
import ChatNewMessage from './ChatNewMessage';
import { useSelector } from 'react-redux';

const ChatMessagesList = ({ conversation: { id, author, title, messages } }) => {
  const currentUser = useSelector(state => state.currentUser);

  const myMsg = (message) => {
    return (currentUser.id === message.user.id)
  }

  const orderedMessages = messages => {
    const sortedMessages = messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    )
    return sortedMessages.map(message => {
      return (
      <li key={message.id} className={myMsg(message) ? "me" : "them"}>{message.text}</li>
      )
    })
  }

  return (
    <>
      <ul>
        <li className={author.id === currentUser.id ? "me" : "them"}>{title}</li>
        {orderedMessages(messages)}
      </ul>
      <ChatNewMessage conversation_id={id} currentUserId={currentUser.id} />
    </>
  )
}

export default ChatMessagesList;