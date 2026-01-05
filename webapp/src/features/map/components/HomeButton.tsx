import { House } from 'lucide-react';
import { useNavigate } from 'react-router';

export function HomeButton() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-6 right-6 z-[999] flex flex-col items-center gap-3">
      <button
        onClick={() => navigate('/')}
        className={`
          w-12 h-12 rounded-xl border-2 shadow-xl cursor-pointer
          text-secondary bg-secondary-content border-secondary hover:text-white hover:bg-secondary hover:border-secondary
          flex items-center justify-center
          transition-all duration-200
        `}
      >
        <House size={24} />
      </button>
    </div>
  )
}
