import React from 'react';
import { useState } from 'react';

const SearchAge = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(prevState => !prevState)
  }

  const renderDropdown = 
    <div className="dropdown-content">
      <div>
        Age
      </div>
      <div>
        <input type="text" value=""></input>
      </div>
    </div>

  return (
    <div className="dropdown-menu">
      <button className="filter-button" onClick={handleClick}>
        Age
      </button>
      {clicked ? renderDropdown : null}
    </div>
  )
}

export default SearchAge;