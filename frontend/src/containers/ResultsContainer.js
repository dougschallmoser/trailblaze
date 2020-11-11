import React from 'react';
import { useSelector } from 'react-redux';
import GoogleMap from '../components/GoogleMap';
import SearchResult from '../components/SearchResult';

const ResultsContainer = () => {

  const results = useSelector(state => state.search.results)
  
  return (
    <>
      <div className="result-length">
        {results.length} trailblazers were found
      </div>
      <div className="results">
        <div className="items">
          {results.map(user => <SearchResult user={user} key={user.id} />)}
        </div>
        <div className="google-map">
          {results.length > 0 ? <GoogleMap /> : null }
        </div>
      </div>
    </>
  )
}

export default ResultsContainer;