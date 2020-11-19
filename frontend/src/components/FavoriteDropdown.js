import React from 'react';

const FavoriteDropdown = ({ handleDelete, handleClick }) => {
  return (
    <div className="dropdown-menu-chat">
      <div className="dropdown-content-chat-fav">
        <div className="dropdown-content-padding">
          <div className="dropdown-content-item">
            <button onClick={handleDelete} className="user-submit">Delete Favorite</button>
          </div>
        </div>
        <div className="dropdown-content-bottom">
          <button className="close-button" onClick={handleClick}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default FavoriteDropdown;