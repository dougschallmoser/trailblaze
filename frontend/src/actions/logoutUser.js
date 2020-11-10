export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token")
    dispatch({ type: 'LOGOUT_USER' })
  }
}