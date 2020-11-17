import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../actions';
import Modal from "react-modal";

Modal.setAppElement("#root");

const UserSignup = () => {
  
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    email: '', name: '', password: '', dob: '', bio: '', gender: 1, avatar: '', lat: null, lng: null
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

  const toggleModal = () => {setIsOpen(!isOpen)}

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
            <div className="signup-input">
              <label>First Name:</label>
              <input 
                type="text"
                name='name'
                value={userData.name}
                onChange={handleChange}
              />
            </div>

            <div className="signup-input">
              <label>Email:</label>
              <input 
                type="text"
                name='email'
                value={userData.email}
                onChange={handleChange}
              />
            </div>

            <div className="signup-input">
              <label>Password:</label>
              <input 
                type="password"
                name='password'
                value={userData.password}
                onChange={handleChange}
              />
            </div>

            <div className="signup-input">
              <label>Birthdate:</label>
              <input 
                type="date"
                name='dob'
                value={userData.dob}
                onChange={handleChange}
              />
            </div>

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
              />
            </div>
            
            <div className="signup-input">
              <label>Avatar:</label>
              <input 
                type="text"
                name='avatar'
                value={userData.avatar}
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

// Alternative to useDispatch hook:
// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: data => dispatch(addUser(data))
//   }
// }

export default UserSignup;