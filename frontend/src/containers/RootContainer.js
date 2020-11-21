import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateQuery } from '../actions';
import SearchBar from '../components/SearchBar';

const RootContainer = () => {

  const [location, setLocation] = useState({lat: '', lng: '', city: ''})
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const history = useHistory();

  const getLocation = () => {
    setLoading(true)
    window.navigator.geolocation.getCurrentPosition(
      position => setLocation(prevState => {
        return {
          ...prevState, lat: position.coords.latitude, lng: position.coords.longitude
        }
      })
    )
  }

  useEffect(() => {
    if (location.lat) {
      dispatch(updateQuery({ ...location }))
      history.push('/search')
    }
  }, [dispatch, history, location])

  const spinner = 
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>

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
        <div className="submit-container">
          {loading ? spinner : 
            <button onClick={getLocation} className="user-submit">USE MY LOCATION</button>
          }
        </div>
      </div>
    </div>
  )
}

export default RootContainer;