import React, { useState } from 'react';
import { connect } from 'react-redux';

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    bio: '',
    avatar: ''
  })

  const handleChange = (event) => {
    setUser(prevUser => {
      return {
        ...prevUser, [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('here')

  }

  return (
    <div className="container signup">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input 
            className="form-control"
            type="text"
            name='username'
            value={user.username}
            onChange={handleChange}
          /><br/>
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input 
            className="form-control"
            type="password"
            name='password'
            value={user.password}
            onChange={handleChange}
          /><br/>
        </div>

        <div className="form-group">
          <label>Bio:</label>
          <textarea 
            className="form-control"
            name='bio'
            value={user.bio}
            onChange={handleChange}
          /><br/>
        </div>
        
        <div className="form-group">
          <label>Avatar:</label>
          <input 
            className="form-control"
            type="text"
            name='avatar'
            value={user.avatar}
            onChange={handleChange}
          /><br/>
        </div>

        <input type="submit" className="btn btn-primary"></input>
      </form>
    </div>
  )
}

export default Signup;