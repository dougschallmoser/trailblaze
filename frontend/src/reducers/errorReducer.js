const errorReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return [...state, action.payload]
    case 'REMOVE_ERROR':
      return []
    default:
      return state;
  }
};

export default errorReducer;