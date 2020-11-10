import React from 'react';
import { useSelector } from 'react-redux';
import SearchResult from '../components/SearchResult';

const ResultsContainer = () => {

  const results = useSelector(state => state.search.results)
  
  return (
    <div>
      {results.map(user => <SearchResult user={user} key={user.id} />)}
    </div>
  )
}

export default ResultsContainer;