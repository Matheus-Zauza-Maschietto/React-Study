"use client"

import { useRef, useEffect, RefObject, Ref } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { GeocodingControl } from "@maptiler/geocoding-control/maptilersdk";
import "@maptiler/geocoding-control/style.css";
import Lead from '@/shared/models/Lead';

type Props = {initialZoom?: number, useGeocoding?: boolean, mapContainerRef: RefObject<HTMLDivElement | null>, mapRef: RefObject<maptilersdk.Map | null>, geoRef: RefObject<GeocodingControl | null>};

function Map({initialZoom = 2, useGeocoding = false, mapContainerRef, mapRef, geoRef}: Props) {
    maptilersdk.config.apiKey = '5MbXsNZXFjhjdUs84ZR9';

    useEffect(() => {
        if (!mapRef || !mapContainerRef || !geoRef) return;
        if (mapRef.current) return;

        if (mapContainerRef.current) {
            mapRef.current = new maptilersdk.Map({
                container: mapContainerRef.current,
                style: maptilersdk.MapStyle.STREETS,
                center: [0, 0],
                zoom: initialZoom
            });
        }

        geoRef.current = new GeocodingControl({
            proximity: [{ type: "map-center" }],
        });

        if (useGeocoding && mapRef.current) setGeoCoding(mapRef.current, geoRef.current);
    }, [mapRef, mapContainerRef, geoRef, initialZoom, useGeocoding]);

    function setGeoCoding(map: maptilersdk.Map, geo: GeocodingControl): void {
        if (!useGeocoding) return;
        map.addControl(geo);
    }

    return (
        <div className="relative w-full h-full">
            <div ref={mapContainerRef} className="absolute w-full h-full" />
        </div>
    );
}

export default Map