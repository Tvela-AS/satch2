"use client";
// ES6
// import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import dynamic from "next/dist/shared/lib/dynamic";

// type ValdressMapProps = {};
mapboxgl.accessToken =
  process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_ACCESS_TOKEN ?? "";
const ValdressMap = ({}) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainerRef?.current || "",
      style: "mapbox://styles/mapbox/satellite-v9",

      center: [9.23105, 60.985451], // Initial position [lng, lat]
      zoom: 17, // Initial zoom level
    });
    const markerDiv = document.createElement("div");
    markerDiv.className = "custom-marker";

    // Render the React icon into the custom marker element
    markerDiv.innerHTML = `
      <div  style="font-size: 10px; color: pink; position: absolute; top: -100px; left: -60px;">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  fill="currentColor"
  width="230"
  height="230"
>
<path d="M104,48h48l56,72.38V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V120.38Z" opacity="0.2"/>
  <line x1="128" y1="192" x2="128" y2="216" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"/>
  <polyline points="144 176 128 192 112 176" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="104" y1="48" x2="152" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M104,48,50.37,32.24a8,8,0,0,0-9.8,6.29l-16.42,88c-1.54,8.23,9,13,14.16,6.42Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M152,48l53.63-15.76a8,8,0,0,1,9.8,6.29l16.42,88c1.54,8.23-9,13-14.16,6.42Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="92" cy="140" r="12" fill="currentColor"/>
  <circle cx="164" cy="140" r="12" fill="currentColor"/>
  <path d="M208,120.38V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V120.38" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>

</svg>
      </div>
    `;
    new mapboxgl.Marker({
      element: markerDiv, // Use the custom marker element
      draggable: true, // Make it draggable if needed
    })
      .setLngLat([9.23105, 60.985451]) // Marker position [lng, lat]
      .addTo(map);

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => map.remove(); // Cleanup on unmount
  }, []);

  return (
    <div className=''>
      <div className='text prose'>
        <h3 className='mt-24 font-bold text-gray-700 text-3xl'>Kontakt oss</h3>
        <span>
          {" "}
          <br />
        </span>
        <span className='font-bold'>E-post: </span>
        post@valdreshundesalong.no <br />
        <span>
          {" "}
          <br />
        </span>
        <span className='font-bold'>Telefon:</span> 973 00 380 <br />
        <span>
          {" "}
          <br />
        </span>
        <span className='font-bold'>Adresse:</span> Valdresvegen 12, 2900
        Fagernes <br />
        <span>
          {" "}
          <br />
        </span>
      </div>

      <div ref={mapContainerRef} className='h-96 w-full rounded-lg' />
    </div>
  );
};

// in render()

// LAT: 60.985450 LONG: 9.231050 - Valdresvegen 12 Fagernes

export const DynamicValdressMap = dynamic(
  Promise.resolve(() => {
    // Component implementation
    return <ValdressMap />;
  }),
  { ssr: true }
);

export default ValdressMap;
