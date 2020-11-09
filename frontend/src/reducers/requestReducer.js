const initialState = {
  requests: []
};

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUESTS':
      return action.payload;
    default:
      return state;
  }
};

export default requestReducer;