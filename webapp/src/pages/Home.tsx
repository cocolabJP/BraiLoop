import brailoopBicycleImg from '@/assets/brailoop_bicycle.png';
import brailoopWebappImg from '@/assets/brailoop_webapp.png';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LinkCard from '@/components/LinkCard';
import NewsCard from "@/features/news/components/NewsCard";
import { news } from "@/features/news/contents";
import { BookOpenText, ChevronRight, MapPin } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <Header />

      <div className="">
        <section className="gradient-tp py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">BraiLoop</h1>
            <div className="text-sm md:text-md font-semibold space-y-4">
              <p>あなたの移動がつくる誰かの安全</p>
              <p>自転車移動で点字ブロックを見える化します</p>
            </div>
          </div>
        </section>
        <section className="max-w-[1300px] px-4 mx-auto my-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">News</h2>
            <Link
              to='/'
              className="
                flex items-center gap-2 border border-base-300 rounded-4xl px-4 py-1
                hover:text-white hover:border-tp-100 hover:bg-tp-100 transition-all duration-300
              "
            >
              <span className="text-lg">More</span>
              <ChevronRight size={16} />
            </Link>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {news.map((n, i) => (
              <NewsCard key={i} news={n} />
            ))}
          </ul>
        </section>
        <div className="border-b border-base-300 mx-4"></div>
        <section className="max-w-[1000px] mx-auto my-8">
          <h2 className="text-center text-2xl font-bold mb-8">BraiLoop Bicycle</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full px-4 md:px-0">
            <div className="flex flex-col items-center gap-2 w-full md:w-2/5">
              <img src={brailoopBicycleImg} alt="BraiLoop Bicycle" />
              <span className="text-xs md:text-sm text-gray-600">画像は開発中のものです</span>
            </div>
            <div className="w-full md:w-3/5 text-center text-sm md:text-base space-y-4">
              <p><span className="font-bold">BraiLoop Bicycle</span>は点字ブロックデータ収集用の自転車です。</p>
              <p>センシングデバイスを取り付けるだけであなたの自転車もBraiLoop Bicycleに！</p>
              <p>※ご利用の際は道路交通法・交通マナーを遵守してください。</p>
            </div>
          </div>
        </section>
        <div className="border-b border-base-300 mx-4"></div>
        <section className="max-w-[1000px] mx-auto my-8">
          <h2 className="text-center text-2xl font-bold mb-8">BraiLoop WebApp</h2>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 w-full px-4 md:px-0">
            <div className="flex flex-col items-center gap-2 w-full md:w-2/5 border-2 border-base-300 rounded-md">
              <img src={brailoopWebappImg} alt="BraiLoop Bicycle" className="rounded-md" />
            </div>
            <div className="w-full md:w-3/5 text-center text-sm md:text-base space-y-4">
              <p>BraiLoop Bicycleで収集したデータを地図上で表示。</p>
              <p>あなたの街の点字ブロックをまとめて管理します。</p>
              <p>点検・管理にもご活用ください。</p>
              <LinkCard to='/map' icon={MapPin}>点字ブロックマップ</LinkCard>
            </div>
          </div>
        </section>
        <div className="border-b border-base-300 mx-4"></div>
        <section className="max-w-[1000px] mx-auto my-8">
          <h2 className="text-center text-2xl font-bold mb-8">BraiLoop API</h2>
          <div className="px-4 md:px-0">
            <div className="text-center text-sm md:text-base space-y-4">
              <p>BraiLoop Bicycleで収集したデータをオープンデータとして公開。</p>
              <p>APIの利用でJSON形式で点字ブロックデータを取得可能です。</p>
              <p>詳しくは以下のドキュメントをご覧ください。</p>
            </div>
            <LinkCard to='/docs' icon={BookOpenText}>BraiLoop API | v1.0</LinkCard>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
}