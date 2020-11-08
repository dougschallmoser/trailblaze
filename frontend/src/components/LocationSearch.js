import React from 'react';

const LocationSearch = () => {
  return (
    <div className="search-column">
      <span>Location</span>
      <input
        className="form-control form-control-md"
        type="text"
        placeholder="Where would you like to go?"
      />
    </div>
  )
}

export default LocationSearch;