import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from '../actions';

const SearchRadius = () => {

  const radius = useSelector(state => state.search.query.radius)
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    dispatch(updateQuery({ radius: event.currentTarget.value }))
  }

  return (
    <div className="radius-slider">
      <input
        type="range"
        min="10"
        max="100"
        step="10"
        value={radius}
        onChange={handleOnChange}
        className="slider"
      />
      <div className="miles-display">
        Search Radius: <span className="main-color">{radius}</span> Miles
      </div>
    </div>
  )
}

export default SearchRadius;