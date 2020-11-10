import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions';
import GoogleMap from '../GoogleMap';

const RequestCreate = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    username: '',
    password: '',
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
      bio: '',
      avatar: ''
    })
  }

  return (
    <div className="container">
      <div>
        <div>
          <GoogleMap />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="">

              <label>Trail:</label>
              <input 
                className=""
                type="text"
                name='username'
                value={userData.username}
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label>Group Size:</label>
              <input 
                className=""
                type="password"
                name='password'
                value={userData.password}
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label>Date:</label>
              <textarea 
                className=""
                name='bio'
                value={userData.bio}
                onChange={handleChange}
              />
            </div>
            
            <div className="">
              <label>Description:</label>
              <input 
                className=""
                type="text"
                name='avatar'
                value={userData.avatar}
                onChange={handleChange}
              />
            </div>

            <input type="submit" className=""></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RequestCreate;