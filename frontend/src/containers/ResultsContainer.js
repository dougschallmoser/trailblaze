import React from 'react';
import { useSelector } from 'react-redux';
import ResultItem from '../components/ResultItem';

const ResultsContainer = () => {

  const results = useSelector(state => state.search.results)
  
  return (
    <div>
      {results.map(user => <ResultItem user={user} key={user.id} />)}
    </div>
  )
}

export default ResultsContainer;