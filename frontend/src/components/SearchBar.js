import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../actions';
import { useSelector } from 'react-redux';
import { updateCoordinates } from '../actions';
import { GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const SearchBar = (props) => {

  const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState({})
  const queryData = useSelector(state => state.search.query);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCoordinates(coordinates))
  }, [coordinates])
 
  const handleChange = input => {
    setAddress(input)
  };

  const handleSelect = async selection => {
    setAddress(selection)
    const response = await geocodeByAddress(selection)
    const results = await getLatLng(response[0])
    setCoordinates(results)
  }

  const handleSubmit = () => {
    dispatch(getUsers(queryData))
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
        <div>
          <input
            {...getInputProps({
              placeholder: 'Enter a city to find other trailblazers...',
              className: 'location-search-input search-bar',
            })}
          />
          <img onClick={handleSubmit} alt="search icon" className="search-icon" src="./search_icon.png" />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
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