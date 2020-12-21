import React, { useState } from 'react';
import RenderModal from './RenderModal';
import FavoriteDropdown from './FavoriteDropdown';
import { API_ROOT } from '../constants';

const Favorite = ({ favorite, setActive, activeFavorite, deleteFavorite }) => {

  const [clicked, setClicked] = useState(false);

  const selected = () => {
    return activeFavorite === favorite.id
  }

  const handleClick = (event) => {
    event.stopPropagation();
    setClicked(!clicked);
  }

  const handleDelete = async () => {
    const token = localStorage.token
    if (token) {
      const response = await fetch(`${API_ROOT}/favorites/${favorite.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .catch(() => {
        RenderModal('error', 'Server error. Please try again.')
      })
      if (!response) {return null}

      const jsonResponse = await response.json();
      if (jsonResponse.error) {
        RenderModal('error', jsonResponse.error)
      } else {
        deleteFavorite(favorite)
      }
    }
  }

  return (
    <div
      onClick={() => setActive(favorite.id)}
      className={selected() ? "favorite-item selected-fav" : "favorite-item"}
    >
      {favorite.imgsmall ? 
        <img src={favorite.imgsmall} alt={favorite.name} /> 
        : <div className="no-photo">No Photo Available</div>
      }
      <div className="weight-500">{favorite.name}</div>
      {selected() ? 
        <div onClick={handleClick} className="three-dots-fav">&#8230;</div> 
        : null
      }
      <div className="main-color">{favorite.location}</div>
      {clicked ? 
        <FavoriteDropdown handleDelete={handleDelete} handleClick={handleClick} />
        : null
      }
    </div>
  )
}

export default Favorite;