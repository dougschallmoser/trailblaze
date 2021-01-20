import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserInputField from './UserInputField';
import UserSubmitButton from './UserSubmitButton';
import { loginUser } from '../actions';
import Modal from "react-modal";

Modal.setAppElement("#root");

const UserSignup = () => {
  
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setLoginData(prevUser => {
      return {
        ...prevUser, [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(loginData))
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div onClick={toggleModal}>LOGIN</div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="user-modal"
        overlayClassName="user-modal-overlay"
        closeTimeoutMS={0}
      >
        <div className="modal-container">
          <div className="user-form-div">
            <button
              className="close-button-user"
              onClick={toggleModal}
            >
            x</button><br/>
            <div className="get-started">WELCOME BACK!</div>
            <form onSubmit={handleSubmit}>
              <UserInputField
                label="Email:"
                type="text"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />
              <UserInputField
                label="Password:"
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />            
              <UserSubmitButton />
            </form>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default UserSignup;