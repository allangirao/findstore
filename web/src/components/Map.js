import React, {useEffect} from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const CurrentLocator = () => {
  const map = useMap()

  useEffect(() => {
    const setCurrentLocation = async () => {
      await navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          const latlong = [latitude, longitude]
          map.flyTo(latlong, map.getZoom())
        },
        function (error) {}
      )
    }
    setCurrentLocation()
  }, [map])

  return null
}

const Map = () => {
  const defaultPosition = [-14.2350, -51.9253]
  const defaultZoom = 14

  return (
    <MapContainer center={defaultPosition} zoom={defaultZoom}
      style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CurrentLocator />
    </MapContainer>
  );
}

export default Map;
