import React from 'react';
import SearchRadius from '../components/SearchRadius';
import SearchBar from '../components/SearchBar';

const SearchContainer = () => {

  return (
    <div className="search">
      <SearchBar />
      <SearchRadius />
    </div>
  )
}

export default SearchContainer;