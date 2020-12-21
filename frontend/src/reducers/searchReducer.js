const initialState = {
  loading: true,
  results: [],
  query: {
    city: '',
    lat: '',
    lng: '',
    radius: 10,
    agemin: '',
    agemax: '',
    gender: 'any'
  },
  trails: []
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_RESULTS':
      return { ...state, results: action.payload, loading: false }
    case 'UPDATE_QUERY':
      return { ...state, query: { ...state.query, ...action.payload }}
    case 'GET_TRAILS':
      return { ...state, trails: action.payload }
    default:
      return state;
  }
};

export default searchReducer;