import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Map, { Marker, Popup } from 'react-map-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; 

function MapComponent() {
  const mapRef = useRef(null);
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  useEffect(() => {
    if (mapRef.current) {
      // Initialize map only once when the component mounts
      mapRef.current.on('load', () => {
        // Additional map customizations (e.g., styles, layers) can be done here
      });
    }
  }, []); 

  return (
    <Map
      ref={mapRef}
      initialViewState={viewport}
      style={{width: '100%', height: '400px'}}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      {/* Add markers, popups, or other interactive elements */}
      <Marker longitude={100.54402136557354} latitude={13.777526146272653} color="red" />
    </Map>
  );
}
// 13.777526146272653, 100.54402136557354

export default MapComponent;
