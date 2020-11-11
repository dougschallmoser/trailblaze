import React from 'react';
import SearchRadius from '../components/SearchRadius';
import SearchBar from '../components/SearchBar';

const SearchContainer = () => {

  return (
    <div className="search">
      <div>
        <SearchRadius />
        <SearchBar />
      </div>
    </div>
  )
}

export default SearchContainer;