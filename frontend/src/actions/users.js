export const loginUser = userData => {
  return async dispatch => {
    const response = await fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: userData })
    });
    const data = await response.json();
    if (data.message) {
      // add error handling
    } else {
      localStorage.setItem('token', data.jwt)
      console.log('success')
      dispatch({ type: 'LOGIN_USER', payload: data.user })
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
    const response = await fetch('http://localhost:3001/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: userData})
    });
    const data = await response.json();
    if (data.error) {
      // add error handling
    } else {
      localStorage.setItem('token', data.jwt)
      dispatch({ type: 'LOGIN_USER', payload: data.user })
    }
  }
}

export const getUserProfile = () => {
  return async dispatch => {
    const token = localStorage.token;
    if (token) {
      const response = await fetch('http://localhost:3001/api/v1/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json();
      if (data.message) {
        // add error handling
        localStorage.removeItem("token")
      } else {
        dispatch({ type: 'LOGIN_USER', payload: data.user })
      }
    }
  }
}
