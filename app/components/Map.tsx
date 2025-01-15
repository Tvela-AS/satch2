"use client";
// src/components/Map.tsx
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import dynamic from "next/dynamic";

function MyMap(props) {
  const { position, zoom } = props;

  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        {/* <Popup>
          A pretty CSS3 . <br /> Easily customizable.
        </Popup> */}
      </Marker>
    </MapContainer>
  );
}

export const DynamicMap = dynamic(
  Promise.resolve(() => {
    return <MyMap />;
  }),
  { ssr: false }
);
