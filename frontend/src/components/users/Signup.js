import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../actions';

const Signup = () => {
  // const currentUser = useSelector(state => state.currentUser);
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
    <div className="container signup">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input 
            className="form-control"
            type="text"
            name='username'
            value={userData.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input 
            className="form-control"
            type="password"
            name='password'
            value={userData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Bio:</label>
          <textarea 
            className="form-control"
            name='bio'
            value={userData.bio}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>Avatar:</label>
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
  )
}

// Alternative to useDispatch hook:
// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: data => dispatch(addUser(data))
//   }
// }

export default Signup;