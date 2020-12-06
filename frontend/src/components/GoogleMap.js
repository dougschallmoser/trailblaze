import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { useSelector } from 'react-redux';
import RenderModal from './RenderModal';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { API_ROOT } from '../constants';

const GoogleMap = (props) => {

  const query = useSelector(state => state.search.query)
  const trails = useSelector(state => state.search.trails)
  const currentUser = useSelector(state => state.currentUser)
  const [markerInfo, setMarkerInfo] = useState({
    showInfo: false, activeMarker: {}, selected: {} 
  })

  const loggedIn = () => {
    return Object.keys(currentUser).length > 0
  }

  const onMarkerClick = (props, marker) => {
    setMarkerInfo({ selected: props, activeMarker: marker, showInfo: true })
  }

  const mapStyles = {
    width: '55%',
    height: '83%'
  }

  const handleMapClick = () => {
    if (markerInfo.showInfo) {
      setMarkerInfo({ ...markerInfo, showInfo: false, activeMarker: null })
    }
  }

  const handleFavoriteTrail = async () => {
    const trailObj = {
      user_id: currentUser.id,
      name: markerInfo.selected.name,
      location: markerInfo.selected.local,
      length: markerInfo.selected.length,
      ascent: markerInfo.selected.elev,
      url: markerInfo.selected.url,
      summary: markerInfo.selected.summary,
      imgsmall: markerInfo.selected.image,
      imgmed: markerInfo.selected.imagemed,
      low: markerInfo.selected.low,
      high: markerInfo.selected.high,
      latitude: markerInfo.selected.latitude,
      longitude: markerInfo.selected.longitude
    }

    const token = localStorage.token
    if (token) {
      const response = await fetch(`${API_ROOT}/users/${currentUser.id}/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ favorite: trailObj })
      })
      .catch(() => {
        RenderModal('error', 'Server error. Please try again.')
      });
      if (!response) {return null}
      
      const newFav = await response.json();
      if (newFav.error) {
        RenderModal('error', newFav.error)
      } else {
        RenderModal('success', `${markerInfo.selected.name} has been added to your Favorites`)
        setMarkerInfo(prev => {
          return { ...prev, showInfo: false }
        })
      }
    } else {
      RenderModal('error', 'You must be logged in to view that content')
    }
  }

  const renderButtonInfoWindow = () => {
    if (loggedIn()) {
      const div = (
        <>
          <a href={markerInfo.selected.url} rel="noreferrer"
            target="_blank" className="user-submit sixteen-font"
          >
            Trail Details
          </a>
          <button onClick={handleFavoriteTrail} className="user-submit sixteen-font">
            Add Favorite
          </button>
        </>
      )
  
      ReactDOM.render(
        React.Children.only(div),
        document.getElementById("unique-placeholder")
      )
    }
  }

  return (
    <Map
      google={props.google}
      onClick={handleMapClick}
      zoom={9.5}
      containerStyle={{position: 'fixed'}}
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
            imagemed={trail.imgMedium}
            low={trail.low}
            high={trail.high}
            summary={trail.summary}
            url={trail.url}
            position={{lat: trail.latitude, lng: trail.longitude}}
            onClick={onMarkerClick}
            icon={{url: "./marker.png"}}
          />
        )
      })}

      <InfoWindow
        marker={markerInfo.activeMarker}
        visible={markerInfo.showInfo}
        onOpen={e => {renderButtonInfoWindow()}}
      >
        <div className="trail-info">
          <img src={`${markerInfo.selected.image}`} alt="trail" /><br/>
          <span id="trail-name">{markerInfo.selected.name}</span><br/>
          <span id="trail-city">{markerInfo.selected.local}</span><br/>
          <p>
            Length: {markerInfo.selected.length} miles<br/>
            Elevation Gain: {markerInfo.selected.elev}ft<br/>
            Lat: {markerInfo.selected.latitude}, Long: {markerInfo.selected.longitude}<br/>
          </p>
          <p>{markerInfo.selected.summary}</p>
          <div id="unique-placeholder" />
        </div>
      </InfoWindow>
    </Map>
  )
}

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

export default GoogleApiWrapper({
  apiKey: `${API_KEY}`
})(GoogleMap);