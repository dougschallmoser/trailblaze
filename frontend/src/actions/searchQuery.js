export const updateRadius = (radius) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_RADIUS', payload: radius })
  }
}

export const updateCoordinates = (coordinates) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_COORDINATES', payload: coordinates })
  }
}