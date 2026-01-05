import guidingTactilePaving from '@/assets/tactile-paving_guiding.svg';
import warningTactilePaving from '@/assets/tactile-paving_warning.svg';
import L from 'leaflet';
import { Marker as DefaultMarker } from 'react-leaflet';

const iconSize = 30;

const guidingIcon = L.icon({
  iconUrl: guidingTactilePaving,
  iconSize:    [iconSize, iconSize],
  iconAnchor:  [iconSize / 2, iconSize / 2],  // 中心を基準に
  popupAnchor: [0, -iconSize / 2],            // 上方向に吹き出しを出す
});

const warningIcon = L.icon({
  iconUrl: warningTactilePaving,
  iconSize:    [iconSize, iconSize],
  iconAnchor:  [iconSize / 2, iconSize / 2],  // 中心を基準に
  popupAnchor: [0, -iconSize / 2],            // 上方向に吹き出しを出す
});

export default function Marker({
  position,
  icon,
  eventHandlers,
  children
}: {
  position: [number, number]
  icon: 'guiding' | 'warning'
  eventHandlers: L.LeafletEventHandlerFnMap
  children: React.ReactNode
}) {
  let _icon: L.Icon;
  switch (icon) {
    case 'guiding': _icon = guidingIcon; break;
    case 'warning': _icon = warningIcon; break;
  }

  return (
    <DefaultMarker position={position} icon={_icon} eventHandlers={eventHandlers}>
      {children}
    </DefaultMarker>
  )
}
