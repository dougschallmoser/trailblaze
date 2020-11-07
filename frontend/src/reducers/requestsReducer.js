const requestsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_REQUESTS':
      return action.payload;
    default:
      return state;
  }
};

export default requestsReducer;