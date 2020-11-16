import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const ChatCable = ({ conversations, handleReceivedMessage }) => {
  return (
    <>
      {conversations.map(conversation => {
        return (
          <ActionCableConsumer
            key={conversation.id}  
            channel={{ channel: 'MessagesChannel', conversation: conversation.id }}
            onReceived={handleReceivedMessage}
          />
        )
      })}
    </>
  )
}

export default ChatCable;