import { API_ROOT } from '../constants';
import RenderModal from '../components/RenderModal';

export const updateQuery = (query) => {
  return { type: 'UPDATE_QUERY', payload: query }
}

export const getUsers = queryData => {
  return async dispatch => {
    const response = await fetch(`${API_ROOT}/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ query: queryData })
    })
    .catch(() => {
      RenderModal('error', 'Server error. Please try again.')
    });
    if (!response) {return null}
    
    const data = await response.json();
    if (data.error) {
      RenderModal('error', data.error)
    } else {
      dispatch({ type: 'GET_USERS', payload: data })
    }
  }
}

export const getTrails = queryData => {
  return async dispatch => {
    const API_KEY = process.env.REACT_APP_HIKING_PROJECT_API_KEY
    const response = await fetch(`https://www.hikingproject.com/data/get-trails?lat=${queryData.lat}&lon=${queryData.lng}&maxDistance=${queryData.radius}&maxResults=100&key=${API_KEY}`)
    .catch(() => {
      RenderModal('error', 'Server error. Please try again.')
    });
    if (!response) {return null}
    
    const data = await response.json();
    if (data.error) {
      RenderModal('error', data.error)
    } else {
      dispatch({ type: 'GET_TRAILS', payload: data.trails })
    }
  }
}