import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers, getTrails, updateQuery } from '../actions';
import { GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const SearchBar = (props) => {

  const [address, setAddress] = useState(props.currentCity ? props.currentCity : '')
  const [latlng, setLatlng] = useState({ lat: '', lng: '' })
  const queryData = useSelector(state => state.search.query);
  const dispatch = useDispatch();
 
  const handleChange = input => {
    setAddress(input)
  }

  const handleSelect = async selection => {
    setAddress(selection)
    const response = await geocodeByAddress(selection)
    const results = await getLatLng(response[0])
    setLatlng({ ...results })
  }

  useEffect(() => {
    dispatch(getUsers(queryData))
    dispatch(getTrails(queryData))
  }, [queryData, dispatch])
  
  const handleSubmit = () => {
    dispatch(updateQuery({ ...latlng }))
    dispatch(updateQuery({ city: address }))
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
        <div className={props.splashContainer || "search-container"}>
            <input
              {...getInputProps({
                placeholder: 'Enter a city to find other trailblazers...',
                className: `location-search-input search-bar ${props.splash}`,
              })}
            />
            {/* `/search?lat=${queryData.lat}&lng=${queryData.lng}&radius=${queryData.radius}&agemin=${queryData.agemin}&agemax=${queryData.agemax}&gender=${queryData.gender}` */}
            <Link to="/search">
              <img
                onClick={handleSubmit}
                alt="search icon"
                className={props.splashIcon || "search-icon"}
                src="./search_icon.png" />
            </Link>
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