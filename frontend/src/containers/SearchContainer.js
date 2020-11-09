import React from 'react';
import LocationSearchInput from '../components/LocationSearchInput';
// import DateSearch from '../components/DateSearch';

const SearchContainer = () => {


  return (
    <div className="container">
      <div className="searchbar">
        <LocationSearchInput />
      </div>
    </div>
  )
}

export default SearchContainer;