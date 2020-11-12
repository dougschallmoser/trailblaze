import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUsers } from '../actions';
import { getTrails } from '../actions';
import { updateLocation } from '../actions';
import { GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {

  const [address, setAddress] = useState('')
  const queryData = useSelector(state => state.search.query);
  const dispatch = useDispatch();
 
  const handleChange = input => {
    setAddress(input)
  };

  const handleSelect = async selection => {
    setAddress(selection)
    const response = await geocodeByAddress(selection)
    const results = await getLatLng(response[0])
    dispatch(updateLocation({ ...results, city: selection }))
  }

  const handleSubmit = () => {
    dispatch(getUsers(queryData))
    dispatch(getTrails(queryData))
  }

  const options = {
    types: ['(cities)'],
    componentRestrictions: {country: "us"}
  }

  return (
    <PlacesAutocomplete
      debounce={500}
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      searchOptions={options}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="search-container">
            <input
              {...getInputProps({
                placeholder: 'Enter a city to find other trailblazers...',
                className: 'location-search-input search-bar',
              })}
            />
            <Link to="/search"><img onClick={handleSubmit} alt="search icon" className="search-icon" src="./search_icon.png" /></Link>
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                  })}
                  key={suggestion.placeId}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB41qACz2BElvLdaa3miyhluj0dsdyWoBE'
})(SearchBar);