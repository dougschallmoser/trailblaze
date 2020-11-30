import React, { useState } from 'react';
import Modal from "react-modal";
import RenderModal from './RenderModal';
import UserSubmitButton from './UserSubmitButton';
import UserInputField from './UserInputField';
import { API_ROOT } from '../constants';

Modal.setAppElement("#root");

const ChatNewConversation = ({ user, currentUser }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [convoData, setConvoData] = useState({
    title: '',
    author_id: currentUser.id,
    receiver_id: user.id
  })

  const handleChange = (event) => {
    setConvoData(prev => {
      return {...prev, [event.target.name]: event.target.value}
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.token
    if (token) {
      const response = await fetch(`${API_ROOT}/users/${currentUser.id}/conversations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ conversation: convoData })
      })
      .catch(() => {
        RenderModal('error', 'Server error. Please try again.')
      });
      if (!response) {return null}
      
      setConvoData({ ...convoData, title: '' })
      toggleModal();
      RenderModal('success', 'Message sent!')
    }
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const renderContent = () => {
    return (
      <>
        <div className="get-started">
          Reach out to <span className="main-color">{user.name}</span> ...
        </div>
        <form onSubmit={handleSubmit}>
          <UserInputField
            type="text"
            name="title"
            value={convoData.title}
            onChange={handleChange}
          />  
          <UserSubmitButton />
        </form>
      </>
    )
  }

  return (
    <>
      <button onClick={toggleModal} className="message-button">+ Message</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="user-modal"
        overlayClassName="user-modal-overlay"
        closeTimeoutMS={0}
      >
        <div className="modal-container">
          <button className="close-button-user" onClick={toggleModal}>x</button><br/>
          {renderContent()}
        </div>
      </Modal>
    </>
  )
}

export default ChatNewConversation;