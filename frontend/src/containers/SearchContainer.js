import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import LocationSearchInput from '../components/LocationSearchInput';
import LocationRadiusInput from '../components/LocationRadiusInput';

const SearchContainer = () => {

  // const [query, setQuery] = useState({coordinates: {}, radius: ''})
  // const dispatch = useDispatch();

  // const updateRadius = (rad) => {
  //   setQuery({radius: rad})
  // }

  // const updateCoordinates = (coords) => {
  //   setQuery({ coordinates: coords })
  // }

  return (
    <div className="container">
      <div className="">
        {/* <LocationRadiusInput updateRadius={updateRadius} />
        <LocationSearchInput updateCoordinates={updateCoordinates} /> */}
        <LocationRadiusInput />
        <LocationSearchInput />
      </div>
    </div>
  )
}

export default SearchContainer;