import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import ListStores from '../services/listStores'
import { StoreMarker } from './markers'

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(function(position){
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      const latlong = [latitude, longitude]
      return resolve(latlong)
    }, reject)
  })
}

const CurrentLocator = () => {
  const map = useMap()

  useEffect(() => {
    const setCurrentLocation = async () => {
      const latlong = await getPosition()
      map.flyTo(latlong, map.getZoom())
    }
    setCurrentLocation()
  }, [map])

  return null
}

const Stores = () => {
  const map = useMap()

  const [stores, setStores] = useState([])

  useEffect(() => {
    const searchStores = async () => {
      const [latitude, longitude] = await getPosition()
      const response = await ListStores.index(latitude, longitude)
      const list = response.data
      setStores(list)
    }
    searchStores()
  }, [map])

  return stores.map(store => <StoreMarker key={store.id} data={store}/>)
}

const Map = () => {
  const defaultPosition = [-14.2350, -51.9253]
  const defaultZoom = 14

  return (
    <MapContainer center={defaultPosition} zoom={defaultZoom}
      style={{ height: '95vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CurrentLocator />
      <Stores />
    </MapContainer>
  );
}

export default Map;
