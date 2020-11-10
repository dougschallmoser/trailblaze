import React from 'react';
import { useState } from 'react';

const LocationRadiusInput = () => {

  const [radius, setRadius] = useState(50)

  const handleOnChange = (event) => {
    setRadius(event.currentTarget.value)
  }

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

export default LocationRadiusInput;