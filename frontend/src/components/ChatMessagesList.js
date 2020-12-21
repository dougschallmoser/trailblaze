import React from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import ChatNewMessage from './ChatNewMessage';

const ChatMessagesList = ({ convo: { id, author, receiver, title, messages, created_at } }) => {
  
  const currentUser = useSelector(state => state.currentUser);

  const myMsg = message => {
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

  const formatDate = message => {
    return (
      <Moment format="h:mm a on MM/DD/YYYY">
        {message.created_at || message}
      </Moment>
    )
  }

  const renderMessages = messages => {
    const sortMessages = messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    )

    return sortMessages.map(message => {
      return (
        <div key={message.id}>
          <li className={myMsg(message) ? "chat-date-me" : "chat-date-them"}>
            {formatDate(message)}
          </li>
          <li className={myMsg(message) ? "me" : "them"}>
            {message.text}
          </li>
        </div>
      )
    })
  }

  return (
    <>
      <h3>
        Chatting with <span className="secondary-color">{displayOtherUserName()}</span>
      </h3>
      <ul>
        <li className={author.id === currentUser.id ? "chat-date-me" : "chat-date-them"}>
          {formatDate(created_at)}
        </li>
        <li className={author.id === currentUser.id ? "me" : "them"}>{title}</li>
        {renderMessages(messages)}
      </ul>
      <ChatNewMessage convoId={id} currentUserId={currentUser.id} />
    </>
  )
}

export default ChatMessagesList;