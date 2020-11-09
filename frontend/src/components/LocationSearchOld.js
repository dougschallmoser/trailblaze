import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../actions';
import LocationSearchInput from './LocationSearchInput';

const LocationSearch = () => {

  const dispatch = useDispatch();
  const [location, setLocation] = useState('')

  const handleChange = (event) => {
    setLocation(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getUsers(location))
  }

  return (
    <div className="search-column">
      <span>Location</span>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control form-control-md"
          type="text"
          placeholder="Where would you like to go?"
          value={location}
          onChange={handleChange}
        />
        <input type="submit" className="btn btn-primary"/>
      </form>
      <LocationSearchInput />
    </div>
  )
}

// export default LocationSearch;