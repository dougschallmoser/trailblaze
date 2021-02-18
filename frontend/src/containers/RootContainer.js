import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RenderModal from '../components/shared/RenderModal'
import SearchBar from '../components/Search/SearchBar';

const RootContainer = () => {

  const [location, setLocation] = useState({ lat: '', lng: '', city: '' });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (location.lat) {
      history.push(`/search?city=&lat=${location.lat.toFixed(5)}&lng=${location.lng.toFixed(5)}&radius=10&agemin=&agemax=&gender=any`)
    }
  }, [history, location])

  const getLocation = () => {
    setLoading(true)
    window.navigator.geolocation.getCurrentPosition(
      success => setLocation(prevState => {
        return {
          ...prevState, lat: success.coords.latitude, lng: success.coords.longitude
        }
      }),
      () => {
        RenderModal('error', 'Trailblaze could not determine your location. Please search for a city instead.')
        setLoading(false)
      },
    {timeout: 12000}
    )
  }

  const spinner = 
    <div className="spinner">
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </div>

  return (
    <div className="main-container">
      <div className="root-page">
        <div className="centered">
          <div className="splash-message">
            Trailblaze together
          </div>
          <div className="splash-submessage">
            Find friends for your next adventure
          </div>
          <div className="submit-container">
            {loading ? spinner : 
              <button onClick={getLocation} className="user-submit">
                GET CURRENT LOCATION
              </button>
            }
          </div>
          <SearchBar
            splash="splash"
            splashContainer="search-splash-container"
            splashIcon="search-icon-splash"
          />
        </div>
      </div>
    </div>
  )
}

export default RootContainer;