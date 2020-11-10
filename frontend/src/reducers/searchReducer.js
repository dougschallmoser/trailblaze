const initialState = {
  results: [],
  query: {}
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_RESULTS':
      return { ...state, results: action.payload }
    case 'UPDATE_RADIUS':
      return { ...state, query: {...state.query, radius: action.payload} }
      case 'UPDATE_COORDINATES':
        return { ...state, query: {...state.query, ...action.payload} }
    default:
      return state;
  }
};

export default searchReducer;