import React from 'react';
import LocationSearchInput from '../components/LocationSearchInput';
import LocationRadiusInput from '../components/LocationRadiusInput';

const SearchContainer = () => {

  return (
    <div className="container">
      <div className="">
        <LocationRadiusInput />
        <LocationSearchInput />
      </div>
    </div>
  )
}

export default SearchContainer;