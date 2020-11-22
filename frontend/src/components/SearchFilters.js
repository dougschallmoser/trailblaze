import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuery, getUsers } from '../actions';
import SearchFiltersDropdown from './SearchFiltersDropdown';

const SearchFilters = () => {

  const query = useSelector(state => state.search.query)
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setClicked(prevState => !prevState)
  }

  const handleChange = (event) => {
    dispatch(updateQuery({...query, [event.target.name]: event.target.value}))
    dispatch(getUsers({...query, [event.target.name]: event.target.value}))
  }

  const displayFilterCount = () => {
    if ((query.agemax && (query.gender !== 'any')) || 
      (query.agemin && (query.gender !== 'any'))) {
      return "Filter: 2"
    } else if (query.agemin || query.agemax || (query.gender !== 'any')) {
      return "Filter: 1"
    } else {
      return 'Filter'
    }
  }

  return (
    <div className="dropdown-menu">
      <button
        className={clicked ? 'filter-button clicked' 
          : `filter-button ${query.agemin || query.agemax || (query.gender !== 'any') 
          ? "border-highlight" : null}`} onClick={handleClick}>
        {displayFilterCount()}
      </button>
      {clicked ? <div className="arrow-up"></div> : null}
      {clicked ?
        <SearchFiltersDropdown
          query={query}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      : null}
    </div>
  )
}

export default SearchFilters;