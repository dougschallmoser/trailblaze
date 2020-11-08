import React from 'react';
import LocationSearch from '../components/LocationSearch';
import DateSearch from '../components/DateSearch';

const SearchContainer = () => {
  return (
    <div className="container">
      <div className="searchbar">
        <LocationSearch />
        <DateSearch />
      </div>
    </div>
  )
}

export default SearchContainer;