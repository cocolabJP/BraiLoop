import allTactilePaving from '@/assets/tactile-paving_all.svg'
import guidingTactilePaving from '@/assets/tactile-paving_guiding.svg'
import warningTactilePaving from '@/assets/tactile-paving_warning.svg'
import { useState } from 'react'
import type { BlockType } from '../lib/types'

interface FABItem {
  type: BlockType
  icon: string
}

export function TypeSelectButton({
  currentType,
  setType,
}: {
  currentType: BlockType
  setType: React.Dispatch<React.SetStateAction<BlockType>>
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const fabItems: FABItem[] = [
    { type: 'all', icon: allTactilePaving },
    { type: 'warning', icon: warningTactilePaving },
    { type: 'guiding', icon: guidingTactilePaving },
  ]

  const close = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  }

  const handleSelect = (type: BlockType) => {
    setType(type);
    close();
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[998]"
          onClick={close}
        />
      )}
      <div className="fixed bottom-8 right-6 z-[999] flex flex-col items-center gap-3">
        {isOpen && (
          <div className="flex flex-col items-end gap-2">
            {fabItems.map((item, index) => (
              <div
                key={index}
                className={`
                  flex items-center gap-3 transition-all duration-200
                  ${!isClosing && "animate-fab-in"}
                  ${isClosing && "animate-fab-out"}
                `}
                style={{
                  animationDelay: isClosing ? `${(fabItems.length - 1 - index) * 30}ms` : `${index * 50}ms`,
                  animationFillMode: "backwards",
                }}
                onClick={() => handleSelect(item.type)}
              >
                <button className="w-14 h-14 rounded-full bg-base-100 border-2 border-accent shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center">
                  <img src={item.icon} className="w-8" />
                </button>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={() => (isOpen ? close() : setIsOpen(true))}
          className={`
            w-16 h-16 rounded-full bg-base-100 shadow-xl cursor-pointer
            flex items-center justify-center
            transition-all duration-200
            hover:scale-110
            ${isOpen && 'scale-110'}
          `}
        >
          <img src={fabItems.find(i => i.type === currentType)?.icon} className="w-9" />
        </button>
      </div>
    </>
  )
}
