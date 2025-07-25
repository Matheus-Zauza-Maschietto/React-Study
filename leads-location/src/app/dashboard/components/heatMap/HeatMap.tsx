"use client"

import React, { useEffect } from 'react'
import Map from '../../../../shared/components/map/Map'
import * as maptilersdk from '@maptiler/sdk';
import { GeocodingControl } from '@maptiler/geocoding-control/maptilersdk';
import Lead from '@/shared/models/Lead';

type Props = {leadList: Lead[]}

function HeatMap({leadList}: Props) {
  const mapRef = React.useRef<maptilersdk.Map | null>(null);
  const mapContainerRef = React.useRef<HTMLDivElement | null>(null);
  const geoRef = React.useRef<GeocodingControl | null>(null);

  useEffect(() => {
    if (!mapRef.current || !mapContainerRef || !geoRef.current) return;
    
    // Define function to setup map data and layers
    const setupMapData = () => {
      // Check if the source already exists before adding it
      if (!mapRef.current?.getSource('leads')) {
        mapRef.current?.addSource('leads', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: leadList.map(lead => ({
                type: 'Feature',
                properties: {
                  name: lead.name,
                  email: lead.email,
                  phone: lead.phone,
                },
                geometry: {
                  type: 'Point',
                  coordinates: [lead.longitude, lead.latitude]
                }
              })
            ),
          },
          cluster: true,
          clusterMaxZoom: 14, 
          clusterRadius: 50 
        });

        // Only add layers if source was just added
        mapRef.current?.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'leads',
          filter: ['has', 'point_count'],
          paint: {
            'circle-color': [
              'step',
              ['get', 'point_count'],
              '#51bbd6',
              100,
              '#f1f075',
              750,
              '#f28cb1'
            ],
            'circle-radius': [
              'step',
              ['get', 'point_count'],
              20,
              100,
              30,
              750,
              40
            ]
          }
        });

        mapRef.current?.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'leads',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
          }
        });

        mapRef.current?.addLayer({
          id: 'unclustered-point',
          type: 'circle',
          source: 'leads',
          filter: ['!', ['has', 'point_count']],
          paint: {
            'circle-color': '#11b4da',
            'circle-radius': 4,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff'
          }
        });

        // Add event handlers
        mapRef.current?.on('click', 'clusters', async function (e) {
          const features = mapRef.current!.queryRenderedFeatures(e.point, {
            layers: ['clusters']
          });
          const clusterId = features[0].properties.cluster_id;
          const zoom = await (mapRef.current?.getSource('leads') as any)!.getClusterExpansionZoom(clusterId)!;
          mapRef.current?.easeTo({
            center: (features[0].geometry as any)!.coordinates,
            zoom
          });
        });

        mapRef.current?.on('click', 'unclustered-point', function (e) {
          const coordinates = (e?.features![0]?.geometry as any)!.coordinates.slice();
          
          // Ensure that if the map is zoomed out such that
          // multiple copies of the feature are visible, the
          // popup appears over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          new maptilersdk.Popup()
            .setLngLat(coordinates)
            .setHTML(
              `<div>
                <h3 className='text-lg font-semibold'>Lead Details</h3>
                <p><strong>Name:</strong> ${e?.features![0]?.properties?.name}</p>
                <p><strong>Email:</strong> ${e?.features![0]?.properties?.email}</p>
                <p><strong>Phone:</strong> ${e?.features![0]?.properties?.phone}</p>
                <p><strong>Coordinates:</strong> ${coordinates[1].toFixed(4)}° N, ${coordinates[0].toFixed(4)}° E</p>
              </div>`
            )
            .addTo(mapRef.current!);
        });

        mapRef.current?.on('mouseenter', 'clusters', function () {
          mapRef.current!.getCanvas().style.cursor = 'pointer';
        });
        mapRef.current?.on('mouseleave', 'clusters', function () {
          mapRef.current!.getCanvas().style.cursor = '';
        });
        mapRef.current?.on('mouseenter', 'unclustered-point', function () {
          mapRef.current!.getCanvas().style.cursor = 'pointer';
        });
        mapRef.current?.on('mouseleave', 'unclustered-point', function () {
          mapRef.current!.getCanvas().style.cursor = '';
        });
      } else {
        // If source already exists, update the data
        const source = mapRef.current?.getSource('leads') as any;
        source?.setData({
          type: 'FeatureCollection',
          features: leadList.map(lead => ({
              type: 'Feature',
              properties: {
                name: lead.name,
                email: lead.email,
                phone: lead.phone,
              },
              geometry: {
                type: 'Point',
                coordinates: [lead.longitude, lead.latitude]
              }
            })
          ),
        });
      }
    };
    
    // Check if map is already loaded
    if (mapRef.current.loaded()) {
      setupMapData();
    } else {
      // Wait for the map to load before adding data
      mapRef.current?.on('load', setupMapData);
    }
    
  // Only include leadList in dependency array, not mapRef.current
  }, [leadList]);

  return (
    <div className='border bg-white border-gray-100 rounded-lg'>
        <div className='p-4 border-b-2 border-gray-100'>
            <h3 className='text-base font-medium'>Mapa de Calor - Concentração de Leads</h3>
            <span className='text-sm'>Visualize onde estão concentrados seus leads</span>
        </div>
        <div className='p-3'>
            <div className='bg-gray-400 w-full aspect-video rounded-lg'>
                <Map mapRef={mapRef} geoRef={geoRef} mapContainerRef={mapContainerRef} />
            </div>
        </div>
    </div>
  )
}

export default HeatMap