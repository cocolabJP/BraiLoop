import type { Pavement } from "@/lib/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import type { BlockType } from "../lib/types";
import { sortPavementsByDate } from "../lib/utils";
import ImageWithSkeleton from "./ImageWithSkeleton";

export function SidePanel({
  loading,
  currentType,
  pavements,
  selectedImg,
  onSelect
}: {
  loading: boolean
  currentType: BlockType
  pavements: Pavement[]
  selectedImg: string | null
  onSelect: React.Dispatch<React.SetStateAction<string | null>>
}) {
  const [isOpen, setIsOpen] = useState(true);
  const virtuosoRef = useRef<any>(null);

  const sortedPavements = useMemo(() => {
    return sortPavementsByDate(pavements);
  }, [pavements])

  useEffect(() => {
    if (!selectedImg) return;

    const index = sortedPavements.findIndex(p => p.id === selectedImg);
    if (index >= 0) {
      virtuosoRef.current?.scrollToIndex({
        index,
        behavior: "smooth",
        align: "center",
      });
    }
  }, [selectedImg, sortedPavements]);


  return (
    <aside>
      <div
        className={`
          relative h-screen bg-base-100 border border-base-200
          transition-all duration-300 ease-in-out
          ${isOpen ? "w-72 md:w-96 lg:w-128" : "w-0"}
        `}
      >
        <div className={`
          flex flex-col h-full transition-opacity duration-300 px-4
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}>
          <div className="flex items-center justify-between h-12 pt-2">
            <p className="text-lg md:text-xl font-bold">
              {currentType === 'all'
                ? 'すべての点字ブロック'
                : currentType === 'warning'
                  ? '点状ブロック'
                  : '線状ブロック'
              }
            </p>
            <p className="text-sm text-black/50">{sortedPavements.length}件</p>
          </div>
          <div className="flex-1 overflow-hidden py-2">
            <VirtuosoGrid
              ref={virtuosoRef}
              data={loading ? Array.from({ length: 8 }) as Pavement[] : sortedPavements}
              listClassName="grid grid-cols-2 gap-2"
              itemContent={(_, p) => loading ? (
                <div className="w-full skeleton rounded-md aspect-[5/4]" />
              ) : (
                <ImageWithSkeleton src={p.image_url} timestamp={p.camera_timestamp} onClick={() => {onSelect(p.id);console.log(p.id)}} />
              )}
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          absolute top-1/2 -translate-y-1/2 z-[997] ${isOpen ? "left-72 md:left-96 lg:left-128" : "left-0"}
          flex items-center justify-center
          w-4 h-12 bg-base-100 rounded-r-xl shadow-lg hover:bg-gray-200
          transition-all duration-300 ease-in-out cursor-pointer
        `}
      >
        {isOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>
    </aside>
  )
}