import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions';

const UserLogin = () => {
  
  const dispatch = useDispatch();

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
      password: '',
      bio: '',
      avatar: ''
    })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            className="form-control"
            type="text"
            name='email'
            value={loginData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input 
            className="form-control"
            type="password"
            name='password'
            value={loginData.password}
            onChange={handleChange}
          />
        </div>

        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default UserLogin;