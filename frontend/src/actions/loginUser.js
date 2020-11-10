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
