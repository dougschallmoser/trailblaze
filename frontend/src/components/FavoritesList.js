import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { API_ROOT } from '../constants';
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
        const response = await fetch(`${API_ROOT}/users/${props.match.params.id}/favorites`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        const userFavorites = await response.json();
        if (userFavorites.error) {
          props.history.push('/')
          Swal.fire({
            icon: 'error',
            text: userFavorites.error,
            confirmButtonColor: '#1DA590',
            iconColor: '#B22222'
          })
        } else {
          setFavorites(userFavorites)
        }
      } else {
        Swal.fire({
          icon: 'error',
          text: `You must be logged in to view that content`,
          confirmButtonColor: '#1DA590',
          iconColor: '#B22222'
        })
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
    const oldFavorites = [...favorites]
    const updatedFavorites = oldFavorites.filter(
      fav => fav.id !== deleteFavorite.id
    )
    setFavorites(updatedFavorites)
  }

  const findActiveFavorite = (favorites, activeFavorite) => {
    return favorites.find(
      favorite => favorite.id === activeFavorite
    )
  }

  return (
    <>
      <div className="favoritesList">
        <h2>FAVORITE TRAILS</h2>
        {favorites.length === 0 ? <div>No favorites.</div> : null}
        {favorites.map(favorite =>
          <Favorite
            favorite={favorite}
            deleteFavorite={handleDeleteFavorite}
            activeFavorite={activeFavorite}
            setActive={handleClick}
            key={favorite.id} />)}
            
        <div className="favorites">
          {activeFavorite ? (
            <FavoriteDisplay
              favorite={findActiveFavorite(
                favorites,
                activeFavorite
              )}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}

export default FavoritesList;