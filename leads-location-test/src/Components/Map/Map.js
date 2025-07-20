import { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { GeocodingControl } from "@maptiler/geocoding-control/maptilersdk";
import './Map.css';
import "@maptiler/geocoding-control/style.css";


export default function Map(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const tokyo = { lng: 139.753, lat: 35.6844 };
    const zoom = 2;
    maptilersdk.config.apiKey = '###';

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [tokyo.lng, tokyo.lat],
            zoom: zoom
        });

        const gc = new GeocodingControl({
            limit: 3, // limit result number
            country: "br", // limit resoults to united states
            proximity: [{ type: "map-center" }], // resoults closer to map center will be shown first
        });
        map.current.addControl(gc);

        new maptilersdk.Marker({color: "#FF0000"})
        .setLngLat([139.7525,35.6846])
        .addTo(map.current);    

        new maptilersdk.Marker({color: "#FFFF00"})
        .setLngLat([119.7525,30.6846])
        .addTo(map.current);  
    }, [tokyo.lng, tokyo.lat, zoom]);

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}