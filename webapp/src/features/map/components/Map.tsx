import type { Pavement } from '@/lib/types'
import type { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useRef } from 'react'
import { MapContainer, Popup, TileLayer, useMap } from 'react-leaflet'
import Marker from './Marker'
import PopupContent from './PopupContent'
import ScaleBar from './ScaleBar'

export default function Map({
  pavements,
  selectedMarker,
  onSelect,
  initPos = [34.666536, 133.918078],  // Okayama Sta.
}: {
  pavements: Pavement[]
  selectedMarker: string | null
  onSelect: React.Dispatch<React.SetStateAction<string | null>>
  initPos?: LatLngExpression
}) {
  const popupRefs = useRef<Record<string, L.Popup | null>>({});

  return (
    <MapContainer center={initPos} maxZoom={19} zoom={13} className='h-full w-full'>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; OpenStreetMap contributors'
        maxZoom={19}
      />
      <ResizeHandler />
      {/* <PopupCloseHandler onSelect={onSelect} /> */}
      <MoveZoomHandler popupRefs={popupRefs} pavements={pavements} selectedMarker={selectedMarker} />
      {pavements.map(({ id, camera_timestamp, latitude, longitude, image_url, classes }) => (
        <Marker
          key={id}
          position={[latitude, longitude]}
          icon={classes?.includes(0) ? 'warning' : 'guiding'}
          eventHandlers={{
            click: () => onSelect(id)
          }}
        >
          <Popup ref={(ref) => { popupRefs.current[id] = ref }} className="custom-popup">
            <PopupContent src={image_url} timestamp={camera_timestamp} />
          </Popup>
        </Marker>
      ))}
      <ScaleBar />
    </MapContainer>
  )
}

// Mapのサイズ変更のたびに自動追従
function ResizeHandler() {
  const map = useMap();

  useEffect(() => {
    const container = map.getContainer();

    const observer = new ResizeObserver(() => {
      map.invalidateSize();
    })

    observer.observe(container);

    return () => observer.disconnect();
  }, [map]);

  return null;
}

// function PopupCloseHandler({
//   onSelect
// }: {
//   onSelect: React.Dispatch<React.SetStateAction<string | null>>
// }) {
//   const map = useMap();
  
//   useEffect(() => {
//     const handler = () => {
//       onSelect(null);
//     };
//     map.on('popupclose', handler);

//     return () => {
//       map.off('popupclose', handler);
//     };
//   }, [map, onSelect]);

//   return null;
// }

function MoveZoomHandler({
  popupRefs,
  pavements,
  selectedMarker,
}: {
  popupRefs: React.RefObject<Record<string, L.Popup | null>>
  pavements: Pavement[];
  selectedMarker: string | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (!selectedMarker) return;

    const target = pavements.find(p => p.id === selectedMarker);
    const popup = popupRefs.current[selectedMarker];
    if (!target || !popup) return;

    map.closePopup();

    map.flyTo(
      [target.latitude, target.longitude],
      19,
      {
        animate: true,
        duration: 0.6,
        easeLinearity: 0.25,
      }
    );

    map.once('moveend', () => popup.openOn(map));
  }, [selectedMarker, pavements, map]);

  return null;
}