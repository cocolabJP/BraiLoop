import cocolabIcon from '@/assets/cocolab-icon.png';
import { Link, Mail } from "lucide-react";
import type React from "react";

export default function MemberCard({
  img,
  jpName,
  enName,
  position,
  profileLink,
  email,
  children
}: {
  img: string
  jpName: string
  enName: string
  position: string
  profileLink: string
  email: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-8">
      <div className="max-w-[200px]">
        <img src={img} alt={enName} className="w-full aspect-square rounded-2xl shadow" />
      </div>
      <div className="flex flex-col flex-1 justify-between ">
        <div className="flex items-center gap-4 mx-auto md:mx-0 mb-2 md:mb-0">
          <a href='https://cocolab.jp' target='_blank' className="group cursor-pointer">
            <img src={cocolabIcon} alt='cocolab Icon' className="w-7 group-hover:opacity-70" />
          </a>
          <div className="flex items-end gap-4">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold">{jpName}</p>
            <p className="text-sm md:text-base text-black/60">{enName}</p>
          </div>
        </div>
        <div className="text-sm lg:text-base mb-2 md:mb-0">
          <p className="text-center md:text-left font-semibold mb-2">{position}</p>
          {children}
        </div>
        <div className="flex gap-8 mx-auto md:mx-0">
          <a href={profileLink} target='_blank' className="flex items-center gap-2 border-b border-transparent px-1 hover:text-tp-200 hover:border-tp-200 transition-all duration-200">
            <Link size={16} />
            <span className="text-sm lg:text-base">Profile</span>
          </a>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span className="text-sm lg:text-base">{email}</span>
          </div>
        </div>
      </div>
    </div>
  )
}