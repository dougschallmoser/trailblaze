export const search = coordinates => {
  return async dispatch => {
    const response = await fetch('http://localhost:3001/api/v1/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ search: coordinates })
    });
    const data = await response.json();
    if (data.error) {
      // add error handling
      console.log('error')
    } else {
      console.log('success')
      console.log(data)
      // dispatch({ type: 'SET_LOCATION', payload: data.user })
    }
  }
}
