import React from 'react';
import { useSelector } from 'react-redux';

const RequestList = () => {

  const results = useSelector(state => state.users.searchResults)

  return (
    <div>
      {console.log('results:', results)}
    </div>
  )
}

export default RequestList;