import { API_ROOT } from '../constants';
import Swal from 'sweetalert2'

export const loginUser = userData => {
  return async dispatch => {
    const response = await fetch(`${API_ROOT}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: userData })
    });
    const data = await response.json();
    if (data.message) {
      Swal.fire({
        icon: 'error',
        text: 'Invalid credentials. Please try again.',
        confirmButtonColor: '#1DA590',
        iconColor: '#B22222'
      })
    } else {
      localStorage.setItem('token', data.jwt)
      dispatch({ type: 'LOGIN_USER', payload: data.user })
      Swal.fire({
        icon: 'success',
        text: 'You have successfully logged in!',
        confirmButtonColor: '#1DA590',
        iconColor: '#1DA590'
      })
    }
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token")
    dispatch({ type: 'LOGOUT_USER' })
  }
}

export const addUser = userData => {
  return async dispatch => {
    const response = await fetch(`${API_ROOT}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: userData})
    });
    const data = await response.json();
    if (data.error) {
      Swal.fire({
        icon: 'error',
        text: data.error.join("\r\n"),
        confirmButtonColor: '#1DA590',
        iconColor: '#B22222'
      })
    } else {
      localStorage.setItem('token', data.jwt)
      dispatch({ type: 'LOGIN_USER', payload: data.user })
      Swal.fire({
        icon: 'success',
        title: 'Account created...',
        text: 'You are now logged in!',
        confirmButtonColor: '#1DA590',
        iconColor: '#1DA590'
      })
    }
  }
}

export const getUserProfile = () => {
  return async dispatch => {
    const token = localStorage.token;
    if (token) {
      const response = await fetch(`${API_ROOT}/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json();
      if (data.message) {
        dispatch({ type: 'ADD_ERROR', payload: data.message })
        localStorage.removeItem("token")
      } else {
        dispatch({ type: 'LOGIN_USER', payload: data.user })
      }
    }
  }
}