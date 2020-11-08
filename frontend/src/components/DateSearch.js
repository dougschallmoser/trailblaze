import React from 'react';

const DateSearch = () => {
  return (
    <div className="search-column">
      <span>Date</span>
      <input
        className="form-control form-control-md"
        type="text"
        placeholder="When would you want to go?"
      />
    </div>
  )
}

export default DateSearch;