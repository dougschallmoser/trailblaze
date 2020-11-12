import React from 'react';
import { useState } from 'react';

const SearchFilters = () => {

  const [clicked, setClicked] = useState(false);
  const [age, setAge] = useState({ min: '', max: '' })

  const handleClick = () => {
    setClicked(prevState => !prevState)
  }

  const handleChange = (event) => {
    setAge(prevAge => {
      return {
        ...prevAge, [event.target.name]: event.target.value
      }
    })
  }

  const renderDropdown = 
    <div className="dropdown-content">
      <div className="dropdown-content-item">
        <span className="dropdown-content-header">Age</span>
        <input
          name="min"
          type="text"
          value={age.min}
          className="age-input-field"
          onChange={handleChange}
          placeholder="Min"
        /> {' - '}
        <input
          name="max"
          type="text"
          value={age.max}
          className="age-input-field"
          onChange={handleChange}
          placeholder="Max"
        />
      </div>
      <div className="dropdown-content-item gender">
        <span className="dropdown-content-header">Gender</span>
        <select name="gender">
          <option value="" selected>Any</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="nonbinary">Non-binary</option>
        </select>

      </div>
    </div>

  return (
    <div className="dropdown-menu">
      <button className="filter-button" onClick={handleClick}>
        Filter
      </button>
      {clicked ? renderDropdown : null}
    </div>
  )
}

export default SearchFilters;