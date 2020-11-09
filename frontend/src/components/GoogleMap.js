import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = (props) => {

  const [location, setLocation] = useState({
    lat: null,
    long: null,
    error: ''
  })

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLocation({
        lat: position.coords.latitude, 
        long: position.coords.longitude
      }),
      err => setLocation({ error: err.message })
    )
  }, [])

  const mapStyles = {
    width: '50%',
    height: '50%',
  };

  return (
    <Map
      google={props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176}}
      center={{ lat: location.lat, lng: location.long}}
    />
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB41qACz2BElvLdaa3miyhluj0dsdyWoBE'
})(GoogleMap);