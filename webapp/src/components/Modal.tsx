import { X } from 'lucide-react';
import { useState } from 'react';

export function useModal(): [(modalId: string) => boolean, (modalId: string) => void, () => void] {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const isOpen = (modalId: string) => activeModal === modalId;
    const openModal   = (modalId: string) => {
        setActiveModal(modalId);
        document.body.style.overflow = 'hidden';
    }
    const closeModal  = () => {
        setActiveModal(null);
        document.body.style.overflow = '';
    }

    return [isOpen, openModal, closeModal];
}

export function Modal({
  isOpen,
  bgClose,
  scrollOff = false,
  className = '',
  children
}: {
  isOpen: boolean
  bgClose?: () => void | undefined
  scrollOff?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`fixed top-0 left-0 z-[1000] w-full h-full flex justify-center items-center bg-black/50 transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={bgClose}
    >
      <div
        className={`relative transform transition-all duration-500 ease-[cubic-bezier(0.25,1.25,0.5,1)] ${scrollOff ? '' : 'overflow-auto'} ${isOpen ? 'opacity-100 scale-105' : 'opacity-0 scale-90'} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export function ModalCloseButton({
  onClose,
  size,
  top,
  right,
  bottom,
  left,
}: {
  onClose: () => void
  size: 'sm' | 'md' | 'lg'
  top?: number
  right?: number
  bottom?: number
  left?: number
}) {
  const buttonSize: Record<string, string> = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const bgColor = 'hover:bg-tp-200';
  const color = 'text-white';

  return (
    <button
      onClick={onClose}
      className={`absolute flex items-center justify-center cursor-pointer rounded-full transition-colors duration-300 p-1 ${bgColor}`}
      style={{ top, right, bottom, left }}
    >
      <X className={`${color} ${buttonSize[size]}`} />
    </button>
  );
}
