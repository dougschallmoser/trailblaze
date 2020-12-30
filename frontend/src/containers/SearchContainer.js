import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import SearchRadius from '../components/SearchRadius';
import SearchBar from '../components/SearchBar';
import SearchFilters from '../components/SearchFilters';
import GoogleMap from '../components/GoogleMap';
import SearchResult from '../components/SearchResult';

const SearchContainer = () => {

  const { search } = useLocation();
  const { lat, lng, agemin, agemax, gender, radius, city } = queryString.parse(search);
  const results = useSelector(state => state.search.results)
  const trails = useSelector(state => state.search.trails)
  const loading = useSelector(state => state.search.loading)

  return (
    <div className="main-container">
      <div className="search">
        <SearchBar
          lat={lat}
          lng={lng}
          radius={radius}
          gender={gender}
          agemin={agemin}
          agemax={agemax}
          city={city}
        />
        <SearchRadius radius={radius} />
        <SearchFilters />
      </div>
      <div className="results">
        <div className="items-container">
          <div id="result-city">{city}</div>
          {loading ? 
            <div className="loader-container">
              <div className="loader"></div>
              Searching...
            </div> :
            <div id="result-length">
              {results.length} trailblazers found
            </div>
          }
          <div className="items">
            {results.map(user => <SearchResult user={user} key={user.id} />)}
          </div>
        </div>
        <div className="google-map">
          <GoogleMap />
          <div className="trail-overlay">
            {trails.length === 100 ? `${trails.length}+` : trails.length} trails nearby
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchContainer;