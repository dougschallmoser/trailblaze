import React, { useState } from 'react';
import Modal from "react-modal";
import { API_ROOT, HEADERS } from '../constants';

Modal.setAppElement("#root");

const ChatNewConversation = ({ user, currentUser }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [sent, setSent] = useState(false)
  const [convoData, setConvoData] = useState({
    title: '',
    author_id: currentUser.id,
    receiver_id: user.id
  })

  const handleChange = (event) => {
    setConvoData(prev => {
      return {
        ...prev, [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_ROOT}/conversations`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ conversation: convoData })
    });
    setConvoData({ ...convoData, title: '' })
    setSent(true)
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const renderContent = () => {
    if (sent) {
      return (
        <>
          <div className="message-sent">Message Sent!</div>
        </>
      )
    } else {
      return (
        <>
          <div className="get-started">
            Reach out to <span className="main-color">{user.name}</span> ...
          </div>
          <form onSubmit={handleSubmit}>
            <div className="signup-input">
              <input 
                type="text"
                name='title'
                value={convoData.title}
                onChange={handleChange}
              />
            </div>

            <div className="submit-container">
              <input type="submit" className="user-submit" />
              </div>
          </form>
        </>
      )
    }
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