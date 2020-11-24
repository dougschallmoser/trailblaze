import { API_ROOT } from '../constants';
import RenderModal from '../components/RenderModal';

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
      RenderModal('error', data.message)
    } else {
      localStorage.setItem('token', data.jwt)
      dispatch({ type: 'LOGIN_USER', payload: data.user })
      RenderModal('success', 'You have successfully logged in!')
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
      RenderModal('error', data.error.join("\r\n"))
    } else {
      localStorage.setItem('token', data.jwt)
      dispatch({ type: 'LOGIN_USER', payload: data.user })
      RenderModal('success', 'Account successfully created. You are now logged in.')
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
        RenderModal('error', data.message)
        localStorage.removeItem("token")
      } else {
        dispatch({ type: 'LOGIN_USER', payload: data.user })
      }
    }
  }
}