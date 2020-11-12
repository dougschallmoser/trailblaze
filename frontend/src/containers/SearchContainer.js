import React from 'react';
import SearchRadius from '../components/SearchRadius';
import SearchBar from '../components/SearchBar';
import SearchFilters from '../components/SearchFilters';

const SearchContainer = () => {

  return (
    <div className="search">
      <SearchBar />
      <SearchRadius />
      <SearchFilters />
    </div>
  )
}

export default SearchContainer;