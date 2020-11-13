import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const GoogleMap = (props) => {

  const query = useSelector(state => state.search.query);
  const trails = useSelector(state => state.search.trails);
  const [markerInfo, setMarkerInfo] = useState({ showInfo: false, activeMarker: {}, selected: {} })

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

  const onMarkerClick = (props, marker, e) => {
    setMarkerInfo({
      selected: props,
      activeMarker: marker,
      showInfo: true
    })
  }

  const mapStyles = {
    width: '55%',
    height: '84.5%'
  };

  const containerStyle = {
    position: 'fixed'
  }

  return (
    <Map
      google={props.google}
      zoom={9}
      containerStyle={containerStyle}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
      center={{ lat: query.lat, lng: query.lng }}>
      
      {trails.map(trail => {
        return (
          <Marker
            key={trail.id}
            title={trail.name}
            name={trail.name}
            local={trail.location}
            length={trail.length}
            latitude={trail.latitude}
            longitude={trail.longitude}
            elev={trail.ascent}
            image={trail.imgSmall}
            summary={trail.summary}
            url={trail.url}
            position={{lat: trail.latitude, lng: trail.longitude}}
            onClick={onMarkerClick}
          />
        )
      })}

      <InfoWindow
        marker={markerInfo.activeMarker}
        visible={markerInfo.showInfo}>
          <div className="trail-info">
            <img src={`${markerInfo.selected.image}`} alt="trail iamge" /><br/>
            <span id="trail-name">{markerInfo.selected.name}</span><br/>
            <span id="trail-city">{markerInfo.selected.local}</span><br/>
            <p>
              Length: {markerInfo.selected.length} miles<br/>
              Elevation Gain: {markerInfo.selected.elev}ft<br/>
              Lat: {markerInfo.selected.latitude}, Long: {markerInfo.selected.longitude}<br/>
            </p>
            <p>{markerInfo.selected.summary}</p>
            <a
              id="trail-link"
              href={`${markerInfo.selected.url}`}
              target="_blank" rel="noreferrer">
              Get trail details
            </a>
          </div>
      </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB41qACz2BElvLdaa3miyhluj0dsdyWoBE'
})(GoogleMap);