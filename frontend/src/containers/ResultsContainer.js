import React from 'react';
import { useSelector } from 'react-redux';
import GoogleMap from '../components/GoogleMap';
import SearchResult from '../components/SearchResult';

const ResultsContainer = () => {

  const results = useSelector(state => state.search.results)
  const city = useSelector(state => state.search.query.city)
  
  return (
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
      </div>
    </div>
  )
}

export default ResultsContainer;