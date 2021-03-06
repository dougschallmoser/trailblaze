import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RenderModal from '../shared/RenderModal';
import { API_ROOT } from '../../constants';
import FavoriteDisplay from './FavoriteDisplay';
import Favorite from './Favorite';

const FavoritesList = (props) => {

  const currentUser = useSelector(state => state.currentUser);
  const [favorites, setFavorites] = useState([])
  const [activeFavorite, setActiveFavorite] = useState(null)
  const [clicked, setClicked] = useState(false)
  
  useEffect(() => {
    const getFavorites = async () => {
      const token = localStorage.token
      if (token) {
        try {
          const response = await fetch(`${API_ROOT}/users/${props.match.params.id}/favorites`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })

          if (!response) {
            return RenderModal('error', 'Please try again.')
          }

          const userFavorites = await response.json();
          
          if (userFavorites.error) {
            props.history.push('/')
            RenderModal('error', userFavorites.error)
          } else {
            setFavorites(userFavorites)
          }
        } catch(error) {
          return RenderModal('error', 'Server error. Please try again.')
        }

      } else {
        RenderModal('error', 'You must be logged in to view that content')
      }
    }

    getFavorites();

  }, [currentUser.id, props.match.params.id, props.history])
  
  const handleClick = (id) => {
    if (!clicked) {
      setActiveFavorite(id)
      setClicked(true)
    } else {
      setActiveFavorite(null)
      setClicked(false)
    }
  }

  const handleDeleteFavorite = deleteFavorite => {
    const updatedFavorites = [...favorites].filter(fav => fav.id !== deleteFavorite.id)
    setFavorites(updatedFavorites)
  }

  const findActiveFavorite = (favorites, activeFavorite) => {
    return favorites.find(favorite => favorite.id === activeFavorite)
  }

  return (
    <div className="main-container">
      <div className="favoritesList">
        <h2>FAVORITE TRAILS</h2>
        {favorites.length === 0 ? <div>No favorites.</div> : null}
        {favorites.map(favorite =>
          <Favorite
            favorite={favorite}
            deleteFavorite={handleDeleteFavorite}
            activeFavorite={activeFavorite}
            setActive={handleClick}
            key={favorite.id} 
          />
        )}
            
        <div className="favorites">
          {activeFavorite ? (
            <FavoriteDisplay
              favorite={findActiveFavorite(favorites, activeFavorite)}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default FavoritesList;