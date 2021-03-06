import React, { useState } from 'react';
import Modal from "react-modal";
import RenderModal from '../shared/RenderModal';
import UserSubmitButton from '../shared/UserSubmitButton';
import UserInputField from '../shared/UserInputField';
import { API_ROOT } from '../../constants';

Modal.setAppElement("#root");

const ChatNewConversation = ({ user, currentUser }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [convoData, setConvoData] = useState({
    title: '',
    author_id: currentUser.id,
    receiver_id: user.id
  })

  const handleChange = (event) => {
    setConvoData({
      ...convoData, [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.token
    if (token) {
      try {
        const response = await fetch(`${API_ROOT}/users/${currentUser.id}/conversations`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ conversation: convoData })
        })

        if (!response) {
          return RenderModal('error', 'Please try again.')
        }

        setConvoData({ ...convoData, title: '' })
        toggleModal();
        RenderModal('success', 'Message sent!')
      } catch(error) {
        return RenderModal('error', 'Server error. Please try again.')
      }
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