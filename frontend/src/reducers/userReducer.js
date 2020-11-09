const initialState = {
  currentUser: {},
  searchResults: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, currentUser: action.payload}
    case 'LOGOUT_USER':
      return {...state, currentUser: {}}
    case 'SEARCH_RESULTS':
      return {...state, searchResults: action.payload }
    default:
      return state;
  }
};

export default userReducer;