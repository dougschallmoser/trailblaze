import React, { useState } from 'react';
import RenderModal from '../shared/RenderModal';
import FavoriteDropdown from './FavoriteDropdown';
import { API_ROOT } from '../../constants';

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
      try {
        const response = await fetch(`${API_ROOT}/favorites/${favorite.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })

        if (!response) {
          return RenderModal('error', 'Please try again.')
        }

        const jsonResponse = await response.json();

        if (jsonResponse.error) {
          RenderModal('error', jsonResponse.error)
        } else {
          deleteFavorite(favorite)
        }
      } catch(error) {
        return RenderModal('error', 'Server error. Please try again.')
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