// MapComponent.jsx
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import API_KEY from "../helpers/useEnv.js";

const MapComponent = ({ location }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "170px",
    borderRadius: "10px",
    overflow: "hidden",
  };

  const center = {
    lat: location.latitude,
    lng: location.longitude,
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        className="rounded-xl"
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
