export const updateRadius = (radius) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_RADIUS', payload: radius })
  }
}

export const updateLocation = (location) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_LOCATION', payload: location })
  }
}

export const getUsers = queryData => {
  return async dispatch => {
    const response = await fetch('http://localhost:3001/api/v1/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ location: queryData })
    });
    const data = await response.json();
    if (data.error) {
      // add error handling
      console.log('error')
    } else {
      console.log('success')
      console.log(data)
      dispatch({ type: 'SEARCH_RESULTS', payload: data })
    }
  }
}
