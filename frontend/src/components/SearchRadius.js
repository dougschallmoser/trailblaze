import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateRadius } from '../actions';

const SearchRadius = () => {

  const [radius, setRadius] = useState(30)
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setRadius(event.currentTarget.value)
  }

  useEffect(() => {
    dispatch(updateRadius(radius))
  }, [radius])


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