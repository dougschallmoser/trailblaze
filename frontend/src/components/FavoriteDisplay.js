import React from 'react';

const FavoriteDisplay = ({ favorite }) => {
  return (
    <>
      <h3>{favorite.name}</h3>
      <h4><div className="main-color">{favorite.location}</div></h4>
      <p>{favorite.summary}</p>
      <div className="favorite-trail-details">
        <button onClick={() => window.open(favorite.url)} className="user-submit">Get Trail Details</button>
      </div>
      <div className="favorite-trail-details left-align">
        Length: {favorite.length} miles <br/>
        Ascent: {favorite.ascent} ft <br/>
        High: {favorite.high} ft <br/>
        Low: {favorite.low} ft <br/>
        Latitude: {favorite.latitude} <br/>
        Longitude: {favorite.longitude} <br/>
      </div>
      {favorite.imgmed ? <img src={favorite.imgmed} alt={favorite.name} /> : null}
    </>
  )
}

export default FavoriteDisplay;