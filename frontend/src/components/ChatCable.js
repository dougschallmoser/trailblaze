import React from 'react';
import { ActionCableConsumer } from '@thrash-industries/react-actioncable-provider';

const ChatCable = ({ convos, handleReceivedMessage }) => {
  return (
    <>
      {convos.map(conversation => {
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