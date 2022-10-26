import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const Map = (props) => {
  const { center, zoom } = props;
  const style = {
    width: "100%",
    height: "100%",
  };
  return (
    <LoadScript googleMapsApiKey={process.env.API_KEY}>
      <GoogleMap center={center} zoom={zoom} mapContainerStyle={style}>
        <Marker position={center}></Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
