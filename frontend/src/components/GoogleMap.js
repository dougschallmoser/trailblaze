import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = (props) => {

  const query = useSelector(state => state.search.query);

  // const [location, setLocation] = useState({
  //   lat: null,
  //   long: null,
  //   error: ''
  // })

  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(
  //     position => setLocation({
  //       lat: position.coords.latitude, 
  //       long: position.coords.longitude
  //     }),
  //     err => setLocation({ error: err.message })
  //   )
  // }, [])

  const mapStyles = {
    width: '55%',
    height: '83%'
  };

  const containerStyle = {
    position: 'fixed'
  }

  return (
    <Map
      google={props.google}
      zoom={10}
      containerStyle={containerStyle}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176}}
      center={{ lat: query.lat, lng: query.lng }}
    />
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB41qACz2BElvLdaa3miyhluj0dsdyWoBE'
})(GoogleMap);