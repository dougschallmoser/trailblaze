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
