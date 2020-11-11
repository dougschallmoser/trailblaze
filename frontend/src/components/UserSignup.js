import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../actions';

const UserSignup = () => {
  
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    username: '',
    password: '',
    dob: '',
    bio: '',
    avatar: ''
  })

  const handleChange = (event) => {
    setUserData(prevUser => {
      return {
        ...prevUser, [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(userData))
    setUserData({
      username: '',
      password: '',
      dob: '',
      bio: '',
      avatar: ''
    })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="">
          <label>Username:</label>
          <input 
            className=""
            type="text"
            name='username'
            value={userData.username}
            onChange={handleChange}
          />
        </div>

        <div className="">
          <label>Password:</label>
          <input 
            className=""
            type="password"
            name='password'
            value={userData.password}
            onChange={handleChange}
          />
        </div>

        <div className="">
          <label>Birthdate:</label>
          <input 
            className=""
            type="date"
            name='dob'
            value={userData.dob}
            onChange={handleChange}
          />
        </div>

        <div className="">
          <label>Bio:</label>
          <textarea 
            className=""
            name='bio'
            value={userData.bio}
            onChange={handleChange}
          />
        </div>
        
        <div className="">
          <label>Avatar:</label>
          <input 
            className=""
            type="text"
            name='avatar'
            value={userData.avatar}
            onChange={handleChange}
          />
        </div>

        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  )
}

// Alternative to useDispatch hook:
// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: data => dispatch(addUser(data))
//   }
// }

export default UserSignup;