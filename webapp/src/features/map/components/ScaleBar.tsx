import L from 'leaflet'
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

export default function ScaleBar() {
  const map = useMap()

  useEffect(() => {
    const scale = L.control.scale({ imperial: false }) // km表示（imperial: false）
    scale.addTo(map)
    return () => {
      scale.remove()
    }
  }, [map])

  return null
}
