import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
    setLoginData({
      email: '',
      password: ''
    })
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div onClick={toggleModal}>Login</div>
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
          <div className="get-started">WELCOME BACK!</div>
          <form onSubmit={handleSubmit}>
            <div className="signup-input">
              <label>Email:</label>
              <input 
                type="text"
                name='email'
                value={loginData.email}
                onChange={handleChange}
              />
            </div>

            <div className="signup-input">
              <label>Password:</label>
              <input 
                type="password"
                name='password'
                value={loginData.password}
                onChange={handleChange}
              />
            </div>

            <div className="submit-container">
              <input type="submit" className="user-submit" />
              </div>
          </form>
        </div>
      </Modal>
    </>

  )
}

export default UserSignup;