import React from 'react';
import { useSelector } from 'react-redux';
import ChatNewMessage from './ChatNewMessage';

const ChatMessagesList = ({ conversation: { id, author, receiver, title, messages } }) => {
  const currentUser = useSelector(state => state.currentUser);

  const myMsg = (message) => {
    return (currentUser.id === message.user.id)
  }

  const displayOtherUserName = () => {
    if (currentUser.id === author.id) {
      return receiver.name
    }
    else if (currentUser.id === receiver.id) {
      return author.name
    }
  }

  const orderedMessages = messages => {
    const sortedMessages = messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    )
    return sortedMessages.map(message => {
      return (
      <li key={message.id} className={myMsg(message) ? "me" : "them"}>
        {message.text}
      </li>
      )
    })
  }

  return (
    <>
      <h3>
        Chatting with <span className="main-color">{displayOtherUserName()}</span>
      </h3>
      <ul>
        <li className={author.id === currentUser.id ? "me" : "them"}>{title}</li>
        {orderedMessages(messages)}
      </ul>
      <ChatNewMessage conversationId={id} currentUserId={currentUser.id} />
    </>
  )
}

export default ChatMessagesList;