import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions';

const Login = () => {
  // const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    username: '',
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
      username: '',
      password: '',
      bio: '',
      avatar: ''
    })
  }

  return (
    <div className="container signup">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input 
            className="form-control"
            type="text"
            name='username'
            value={loginData.username}
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

        <input type="submit" className="btn btn-primary"></input>
      </form>
    </div>
  )
}

export default Login;