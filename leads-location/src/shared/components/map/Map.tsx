"use client"

import { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { GeocodingControl } from "@maptiler/geocoding-control/maptilersdk";
import "@maptiler/geocoding-control/style.css";
import Lead from '@/shared/models/Lead';

type Props = {leads?: Lead[]}

function Map({leads}: Props) {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<maptilersdk.Map | null>(null);
    const gc = useRef<GeocodingControl | null>(null);
    const zoom = 2;
    maptilersdk.config.apiKey = '5MbXsNZXFjhjdUs84ZR9';

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [0, 0],
            zoom: zoom
        });

        map.current.on("click", addMarkers);

        gc.current = new GeocodingControl({
            limit: 3,
            country: "br",
            proximity: [{ type: "map-center" }],
        });
        map.current.addControl(gc.current);
    }, []);

    function addMarkers(e: maptilersdk.MapMouseEvent): void {
        if (!map.current || !mapContainer.current) return;

        const coordinates = e.lngLat;
        new maptilersdk.Marker({ color: "#FF0000" })
            .setLngLat([coordinates.lng, coordinates.lat])
            .addTo(map.current);
    }

    return (
        <div className="relative w-full h-full">
            <div ref={mapContainer} className="absolute w-full h-full" />
        </div>
    );
}

export default Map