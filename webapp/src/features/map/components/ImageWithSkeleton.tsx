import { getJPDateTime } from "@/utils/datetime";
import { useState } from "react";

export default function ImageWithSkeleton({
  src,
  timestamp,
  onClick,
}: {
  src: string
  timestamp: string
  onClick: () => void
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer hover:-translate-y-0.5 transition-all"
    >
      {loading && (
        <div className="absolute inset-0 skeleton rounded-md aspect-[5/4]" />
      )}
      <img
        src={src}
        onLoad={() => setLoading(false)}
        className={`
          w-full aspect-[5/4] object-cover rounded-md border border-base-300
          transition-opacity duration-300
          ${!loading ? "opacity-100" : "opacity-0"}
        `}
      />

      <span className="absolute top-1 left-1 text-xs text-white font-semibold bg-black/40 px-1 py-0.5 rounded">
        {getJPDateTime(timestamp)}
      </span>
    </div>
  )
}