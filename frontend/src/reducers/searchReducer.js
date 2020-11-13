const initialState = {
  results: [],
  query: {
    lat: 47.444,
    lng: -122.176,
    radius: 30,
    agemin: '',
    agemax: '',
    gender: 'any'
  },
  trails: []
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_RESULTS':
      return { ...state, results: action.payload }
    case 'UPDATE_QUERY':
      return { ...state, query: { ...state.query, ...action.payload }}
    case 'GET_TRAILS':
      return { ...state, trails: action.payload }
    default:
      return state;
  }
};

export default searchReducer;