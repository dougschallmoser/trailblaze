export const addUser = (userData) => {
  return async dispatch => {
    const response = await fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData )
    })
    const data = await response.json();
    if (data.error) {
      // add error handling
    } else {
      localStorage.setItem('token', data.token)
      dispatch({ type: 'LOGIN_USER', payload: data.user })
    }
  }
}
