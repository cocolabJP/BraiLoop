import { extractMonthDay } from "@/utils/datetime"
import type { News } from "../types"

export default function NewsCard({
  news
}: {
  news: News
}) {
  return (
    <li className="relative flex items-center gap-4 border border-base-300 rounded-md py-6 px-4">
      <span className="absolute top-0 right-0 text-white text-xs font-semibold bg-black rounded-tr-md py-0.5 px-2">
        {news.type.toUpperCase()}
      </span>
      <div className="flex items-center justify-center shrink-0 w-14 h-14 rounded-full text-white text-sm font-bold gradient-tp">
        {extractMonthDay(news.date)}
      </div>
      <p className="text-sm font-semibold">{news.content}</p>
    </li>
  )
}