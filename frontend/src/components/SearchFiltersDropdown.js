import React from 'react';

const SearchFiltersDropdown = ({ query, handleClick, handleChange }) => {
  return (
    <div className="dropdown-content">
      <div className="dropdown-content-padding">
        <div className="dropdown-content-item">
          <span className="dropdown-content-header">Age</span>
          <input
            name="agemin"
            type="text"
            value={query.agemin}
            className="age-input-field"
            onChange={handleChange}
            placeholder="Min"
          /> {' - '}
          <input
            name="agemax"
            type="text"
            value={query.agemax}
            className="age-input-field"
            onChange={handleChange}
            placeholder="Max"
          />
        </div>
        <div className="dropdown-content-item gender">
          <span className="dropdown-content-header">Gender</span>
          <select value={query.gender} onChange={handleChange} name="gender">
            <option value="any">Any</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="nonbinary">Non-binary</option>
          </select>
        </div>
      </div>
      <div className="dropdown-content-bottom">
        <button className="close-button" onClick={handleClick}>Close</button>
      </div>
    </div>
  )
}

export default SearchFiltersDropdown;