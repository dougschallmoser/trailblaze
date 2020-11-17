import React from 'react';
import SearchBar from '../components/SearchBar';

const RootContainer = () => {
  return (
    <div className="root-page">
      <div className="centered">
        <div className="splash-message">Trailblaze together</div>
        <div className="splash-submessage">Find friends for your next adventure</div>
        <SearchBar
          splash="splash"
          splashContainer="search-splash-container"
          splashIcon="search-icon-splash"
        />
      </div>
    </div>
  )
}

export default RootContainer;