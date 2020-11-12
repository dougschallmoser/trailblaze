import React from 'react';
import SearchRadius from '../components/SearchRadius';
import SearchBar from '../components/SearchBar';
import SearchAge from '../components/SearchAge';

const SearchContainer = () => {

  return (
    <div className="search">
      <SearchBar />
      <SearchRadius />
      <SearchAge />
    </div>
  )
}

export default SearchContainer;