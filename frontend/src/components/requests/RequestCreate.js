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
      <div className="row">
        <div className="col-xs-6">
          <GoogleMap />
        </div>
        <div className="col-xs-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">

              <label>Trail:</label>
              <input 
                className="form-control"
                type="text"
                name='username'
                value={userData.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Group Size:</label>
              <input 
                className="form-control"
                type="password"
                name='password'
                value={userData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Date:</label>
              <textarea 
                className="form-control"
                name='bio'
                value={userData.bio}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Description:</label>
              <input 
                className="form-control"
                type="text"
                name='avatar'
                value={userData.avatar}
                onChange={handleChange}
              />
            </div>

            <input type="submit" className="btn btn-primary"></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RequestCreate;