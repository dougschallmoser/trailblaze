import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from '../../actions';
import SearchFiltersDropdown from './SearchFiltersDropdown';

const SearchFilters = () => {

  const query = useSelector(state => state.search.query)
  const [clicked, setClicked] = useState(false);
  const [filters, setFilters] = useState({ agemin: '', agemax: '', gender: 'any'})
  const dispatch = useDispatch();

  const handleClick = () => {
    setClicked(!clicked)
  }

  const handleChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value })
    if (
      (event.target.name === 'agemin' && filters.agemin > 1) ||
      (event.target.name === 'agemax' && filters.agemax > 1) || 
      (event.target.name === 'gender')
      ) {
      dispatch(updateQuery({ [event.target.name]: event.target.value }))
    }
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
          filters={filters}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      : null}
    </div>
  )
}

export default SearchFilters;