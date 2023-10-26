import React, { useState, useRef, useEffect } from "react";
import { Wrapper} from "@googlemaps/react-wrapper";
import './map.css'
import dotenv from 'dotenv';
dotenv.config();


const render = (status) => {
  return <h1>{status}</h1>;
};

function Map(props) {
  const { center, zoom } = props;
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


  useEffect(() => {
    if (mapRef.current && !map) {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });
      setMap(mapInstance);
    }
  }, [mapRef, map, center, zoom]);

  useEffect(() => {
    if (map && center) {
      new window.google.maps.Marker({
        position: center,
        map: map,
        title: "My Center Marker",
      });
    }
  }, [map, center]);

  return <div ref={mapRef} className="mapStyle" />;
}

function MapApp() {
  const [zoom, setZoom] = useState(15);
  const [center, setCenter] = useState({
    lat: 22.65331347129691, 
    lng: 120.3189784122742,
  });

  return (
    <div className="mapPageContainer">
      <Wrapper apiKey={apiKey} render={render}>
        <Map center={center} zoom={zoom} />
      </Wrapper>

      <div className="storeInfo">
        <h3>鼎山店</h3>
        <p>地址：高雄市三民區大順二路849號一樓</p>
      </div>
    </div> 
  );
}

export default MapApp;

