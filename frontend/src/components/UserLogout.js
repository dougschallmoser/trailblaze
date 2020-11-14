import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../actions';
import Modal from "react-modal";

Modal.setAppElement("#root");

const UserLogout = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div onClick={toggleModal}>Logout</div>
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
          <div className="get-started">Are you sure you want to logout?</div>
          <div className="submit-container">
            <button className="user-submit" onClick={handleLogout}>Yes, log me out</button>
          </div>
        </div>
      </Modal>
    </>

  )
}

export default UserLogout;