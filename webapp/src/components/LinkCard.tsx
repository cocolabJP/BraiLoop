import { useIsMobile } from "@/hooks/useIsMobile";
import type { LucideIcon } from "lucide-react";
import type React from "react";
import { Link } from "react-router";

export default function LinkCard({
  to,
  icon,
  children
}: {
  to: string
  icon: LucideIcon
  children: React.ReactNode
}) {
  const isMobile = useIsMobile();
  const Icon = icon;

  return (
    <Link to={to} className="group flex items-center gap-4 max-w-[500px] border border-base-300 rounded-md mt-8 mx-auto transition-all duration-300">
      <div className="relative">
        <Icon
          size={isMobile ? 48 : 64}
          className="
            relative z-10
            text-white bg-base-content rounded-l-md p-2     
            group-hover:opacity-0
            transition-opacity duration-300
          "
        />
        <Icon
          size={64}
          className="
            absolute inset-0 opacity-0 rounded-l-md
            text-white gradient-tp p-2
            group-hover:opacity-100
            transition-opacity duration-300
          "
        />
      </div>
      <h3 className="font-semibold">{children}</h3>
    </Link>
  )
}