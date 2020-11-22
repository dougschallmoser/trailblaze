import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../actions';
import UserInputField from './UserInputField';
import UserSubmitButton from './UserSubmitButton';
import Modal from "react-modal";

Modal.setAppElement("#root");

const UserSignup = () => {
  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    email: '', name: '', password: '', dob: '',
    bio: '', gender: 1, avatar: '', lat: null, lng: null
  })

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
  }

  const getLocation = () => {
    setLoading(true)
    window.navigator.geolocation.getCurrentPosition(
      position => setUserData(prevUserData => {
        return {
          ...prevUserData, lat: position.coords.latitude, lng: position.coords.longitude
        }
      })
    )
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const spinner = 
    <div className="spinner">
      <div className="double-bounce1 black"></div>
      <div className="double-bounce2 black"></div>
    </div>

  const renderLocationButton = () => {
    return (
      loading ? spinner : 
      <button onClick={getLocation} className="user-submit">
        GET MY LOCATION
      </button>
    )
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
          <div className="user-form-div">
            <button className="close-button-user" onClick={toggleModal}>x</button><br/>
            <div className="get-started">
              GET STARTED
            </div>
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

              <div className="get-location">
                {userData.lat ? <div className="main-color">Location received</div> 
                  : "Your location is required to create an account"
                }
                <div className="submit-container">
                  {!userData.lat && renderLocationButton()}
                </div>
              </div>
              {userData.lat ? <UserSubmitButton /> : null}
            </form>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default UserSignup;