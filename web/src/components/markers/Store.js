import React from 'react'
import L from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import StoreDetail from '../StoreDetail'

const iconCoffeeCup = new L.Icon({
    iconUrl: '/images/coffee-cup.png',
    // point of the icon which will correspond to marker's location
    // Centered by default if size is specified, also can be set in CSS with negative margins.
    // iconAnchor: new L.Point(-12, -12),
    // point from which the popup should open relative to the iconAnchor
    popupAnchor: new L.Point(0, -12),
    // size of the icon
    iconSize: new L.Point(24, 24),
    className: 'leaflet-div-icon'
});

const StorePopup = props => {
  const { store = {} } = props
  return (
    <Popup><StoreDetail store={store} /></Popup>
  )
}

const StoreMarker = (props) => {
  const { data } = props
  const { lat, lon, tags } = data

  return (
    <Marker position={[lat, lon]} icon={iconCoffeeCup}>
      <StorePopup store={data} />
    </Marker>
  )
}

export default StoreMarker
