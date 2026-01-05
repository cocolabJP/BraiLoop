import { HomeButton } from "@/features/map/components/HomeButton"
import Map from "@/features/map/components/Map"
import { SidePanel } from "@/features/map/components/SidePanel"
import { TypeSelectButton } from "@/features/map/components/TypeSelectButton"
import type { BlockType } from "@/features/map/lib/types"
import { useIsMobile } from "@/hooks/useIsMobile"
import { getPavements } from '@/lib/api'
import type { Pavement } from '@/lib/types'
import 'leaflet/dist/leaflet.css'
import { useEffect, useMemo, useState } from 'react'

const filterMap: Record<BlockType, (p: Pavement[]) => Pavement[]> = {
  all: p => p,
  warning: p => p.filter(x => x.classes?.includes(0)),
  guiding: p => p.filter(x => x.classes?.includes(1)),
};

export default function MapPage() {
  const isMobile = useIsMobile();
  const [loading, setLoading] = useState(false);
  const [pavements, setPavements] = useState<Pavement[]>([]);
  const [blockType, setBlockType] = useState<BlockType>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredPavements = useMemo(() => {
    return filterMap[blockType](pavements);
  }, [blockType, pavements]);
  
  useEffect(() => {
    const fetchPavements = async () => {
      setLoading(true);

      try {
        const res = await getPavements({ tactile_paving: 'all' });
        console.log(res.length)
        setPavements(res);
      } catch (error) {
        console.error(error)
        // フェッチ失敗のトーストメッセージ
      } finally {
        setLoading(false);
      }
    }

    fetchPavements();
  }, []);

  useEffect(() => {
  if (!selectedId) return;
  if (!filteredPavements.some(p => p.id === selectedId)) {
    setSelectedId(null);
  }
}, [filteredPavements, selectedId]);


  return (
    <div className="flex h-screen overflow-hidden">
      {!isMobile && (
        <SidePanel loading={loading} currentType={blockType} pavements={filteredPavements} selectedImg={selectedId} onSelect={setSelectedId} />
      )}
      <main className="flex-1">
        <Map pavements={filteredPavements} selectedMarker={selectedId} onSelect={setSelectedId} />
        <HomeButton />
        <TypeSelectButton currentType={blockType} setType={setBlockType} />
      </main>
    </div>
  )
}