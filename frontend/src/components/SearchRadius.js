import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateRadius } from '../actions';

const SearchRadius = () => {

  const [radius, setRadius] = useState(50)
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setRadius(event.currentTarget.value)
  }

  useEffect(() => {
    dispatch(updateRadius(radius))
  }, [radius])


  return (
    <div className="radius-slider">
      <div className="miles-display">{radius} Miles</div>
      <input
        type="range"
        min="25"
        max="200"
        step="25"
        value={radius}
        onChange={handleOnChange}
        className="slider"
      />
    </div>
  )
}

export default SearchRadius;