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

export const updateFilters = (filters) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_FILTERS', payload: filters })
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
      body: JSON.stringify({ query: queryData })
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

export const getTrails = queryData => {
  return async dispatch => {
    const response = await fetch(`https://www.hikingproject.com/data/get-trails?lat=${queryData.lat}&lon=${queryData.lng}&maxDistance=${queryData.radius}&maxResults=50&key=200850712-41bb2ec1278a205fdc5c9050b10c3ad2`)
    const data = await response.json();
    if (data.error) {
      // add error handling
      console.log('error')
    } else {
      console.log('success')
      console.log(data)
      dispatch({ type: 'GET_TRAILS', payload: data.trails })
    }
  }
}