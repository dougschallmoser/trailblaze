import React from 'react';
import { useSelector } from 'react-redux';
import SearchRadius from '../components/SearchRadius';
import SearchBar from '../components/SearchBar';
import SearchFilters from '../components/SearchFilters';
import GoogleMap from '../components/GoogleMap';
import SearchResult from '../components/SearchResult';

const SearchContainer = () => {

  const results = useSelector(state => state.search.results)
  const city = useSelector(state => state.search.query.city)
  const trails = useSelector(state => state.search.trails)

  return (
    <>
      <div className="search">
        <SearchBar />
        <SearchRadius />
        <SearchFilters />
      </div>
      <div className="results">
        <div className="items-container">
          <div id="result-city">{city}</div>
          <div id="result-length">
            {results.length} trailblazers found
          </div>
          <div className="items">
            {results.map(user => <SearchResult user={user} key={user.id} />)}
          </div>
        </div>
        <div className="google-map">
          <GoogleMap />
          <div className="trail-overlay">{trails.length} trails nearby</div>
        </div>
      </div>
    </>
  )
}

export default SearchContainer;