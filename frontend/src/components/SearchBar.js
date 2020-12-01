import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUsers, getTrails, updateQuery } from '../actions';
import { GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const SearchBar = ({ city, lat, lng, radius, gender, agemin, agemax, splashContainer, splash, splashIcon }) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const queryData = useSelector(state => state.search.query);
  const [address, setAddress] = useState(city || '')
 
  const handleChange = input => {
    setAddress(input)
  }

  const handleSelect = async (selection, placeId) => {
    if (!placeId) {return null}
    setAddress(selection)
    const response = await geocodeByAddress(selection)
    const results = await getLatLng(response[0])
    history.push(`/search?city=${selection}&lat=${results.lat.toFixed(5)}&lng=${results.lng.toFixed(5)}&radius=${queryData.radius}&agemin=${queryData.agemin}&agemax=${queryData.agemax}&gender=${queryData.gender}`)
  }

  useEffect(() => {
    if (window.location.pathname.includes('/search')) {
      if (queryData.lat !== lat) {
        dispatch(updateQuery({ lat, lng, radius, gender, agemin, agemax, city  }))
      } else {
        if (queryData.radius === radius && queryData.gender === gender 
          && queryData.agemin === agemin && queryData.agemax === agemax) {
            dispatch(getUsers(queryData))
            dispatch(getTrails(queryData))
        }
        history.push(`/search?city=${queryData.city}&lat=${queryData.lat}&lng=${queryData.lng}&radius=${queryData.radius}&agemin=${queryData.agemin}&agemax=${queryData.agemax}&gender=${queryData.gender}`)
      }
    }
  }, [queryData, dispatch, history, city, lat, lng, radius, gender, agemin, agemax])

  const options = {
    types: ['(cities)'],
    componentRestrictions: {country: "us"}
  }

  return (
    <PlacesAutocomplete
      debounce={500}
      highlightFirstSuggestion={true}
      shouldFetchSuggestions={address.length > 1}
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      searchOptions={options}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className={splashContainer || "search-container"}>
            <input
              {...getInputProps({
                placeholder: 'Enter a city to find other trailblazers...',
                className: `location-search-input search-bar ${splash}`,
              })}
            />
            <img
              alt="search icon"
              className={splashIcon || "search-icon"}
              src="./search_icon.png"
            />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {className})}
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

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY  

export default GoogleApiWrapper({
  apiKey: `${API_KEY}`
})(SearchBar);