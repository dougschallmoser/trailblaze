export const getUsers = coordinates => {
  return async dispatch => {
    const response = await fetch('http://localhost:3001/api/v1/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ location: coordinates })
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
