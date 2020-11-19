import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../actions';
import UserInputField from './UserInputField';
import UserSubmitButton from './UserSubmitButton';
import Modal from "react-modal";

Modal.setAppElement("#root");

const UserSignup = () => {
  
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    email: '', name: '', password: '', dob: '',
    bio: '', gender: 1, avatar: '', lat: null, lng: null
  })

  useEffect(() => {
    if (isOpen) {
      window.navigator.geolocation.getCurrentPosition(
        position => setUserData(prevUserData => {
          return {
            ...prevUserData, lat: position.coords.latitude, lng: position.coords.longitude
          }
        })
      )
    }

  }, [isOpen])

  const handleChange = (event) => {
    setUserData(prevUserData => {
      return {
        ...prevUserData, [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(userData))
    setUserData({
      email: '', name: '', password: '', dob: '', bio: '', gender: 1, avatar: '', lat: null, lng: null
    })
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div onClick={toggleModal}>SIGNUP</div>
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
          <div className="get-started">GET STARTED</div>
          <form onSubmit={handleSubmit}>
            <UserInputField
              label="First Name:"
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />

            <UserInputField
              label="Email:"
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />

            <UserInputField
              label="Password:"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />

            <UserInputField
              label="Birthdate:"
              type="date"
              name="dob"
              value={userData.dob}
              onChange={handleChange}
            />

            <div className="signup-input">
              <label>Gender:</label>
              <select value={userData.gender} onChange={handleChange} name="gender">
                <option value='1' disabled>Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="nonbinary">Non-binary</option>
                <option value="nondisclose">Prefer not to say</option>
              </select>
            </div>

            <div className="signup-input">
              <label>Bio:</label>
              <textarea 
                name='bio'
                value={userData.bio}
                onChange={handleChange}
                maxLength={150}
              />
              <div id="char-remaining">
                {150 - userData.bio.length} characters remaining
              </div>
            </div>

            <UserInputField
              label="Avatar:"
              type="text"
              name="avatar"
              value={userData.avatar}
              onChange={handleChange}
            />

            <UserSubmitButton />
          </form>
        </div>
      </Modal>
    </>
  )
}

// Alternative to useDispatch hook:
// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: data => dispatch(addUser(data))
//   }
// }

export default UserSignup;