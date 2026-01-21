import brailoopAbstractImg from '@/assets/brailoop_abstract.png';
import brailoopApiImg from '@/assets/brailoop_api1.png';
import brailoopBicycleImg from '@/assets/brailoop_bicycle.png';
import brailoopConceptImg from '@/assets/brailoop_concept.png';
import brailoopWebappImg from '@/assets/brailoop_webapp.png';
import cocolab from '@/assets/cocolab.png';
import profileYukiMatsuda from '@/assets/profile_yuki-matsuda.jpg';
import profileYutoMatsuda from '@/assets/profile_yuto-matsuda.jpg';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LinkCard from '@/components/LinkCard';
import NewsCard from "@/features/news/components/NewsCard";
import { news } from "@/features/news/contents";
import MemberCard from '@/features/research/components/MemberCard';
import ResearchView from '@/features/research/components/ResearchView';
import { research } from '@/features/research/contents';
import { useIsMobile } from '@/hooks/useIsMobile';
import { BookOpenText, ChevronRight, MapPin } from 'lucide-react';
import type React from 'react';
import { Link } from 'react-router';

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />

      <div className="">
        <section className="gradient-tp py-20">
          <div className="text-center text-white">
            <p className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">BraiLoop</p>
            <div className="text-sm md:text-base font-semibold space-y-4">
              <p>あなたの移動がつくる誰かの安全</p>
              <p>自転車移動で点字ブロックを見える化します</p>
            </div>
          </div>
        </section>
        <section className="max-w-[1300px] mx-auto mt-8 mb-12 px-4 md:px-8">
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
        <Section heading='Concept'>
          <div className="flex flex-col items-center gap-8 max-w-[600px] w-full mx-auto">
            <p className="text-center text-base md:text-lg font-semibold">「ついでに」始める点字ブロック点検</p>
            <div className="text-sm md:text-base">
              <p>
                視覚障害者用のバリアフリー設備「点字ブロック」。
                実は維持管理が大変なことをご存知ですか？
                そのため、街のいたるところで「劣化した」点字ブロックが悲鳴をあげています。
              </p>
              <p>
                BraiLoopは、自転車にデバイスを付けるだけで利用可能な点字ブロックデータ収集プラットフォームです。
                移動の「ついでに」点字ブロック点検、始めませんか？
              </p>
            </div>
            <img src={brailoopConceptImg} alt="Concept of BraiLoop" className="w-full" />
          </div>
        </Section>
        <Section heading='Product'>
          <div className="space-y-12 md:space-y-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 w-full">
              {isMobile && <h2 className="text-center text-xl font-bold">BraiLoop Bicycle</h2>}
              <div className="flex flex-col items-center gap-2 w-full md:w-2/5">
                <img src={brailoopBicycleImg} alt="BraiLoop Bicycle" />
                <span className="text-xs md:text-sm text-gray-600">※ 画像は開発中のものです</span>
              </div>
              <div className="w-full md:w-3/5 text-sm lg:text-base space-y-4">
                <div className="max-w-[600px] w-full mx-auto">
                  {!isMobile && <h2 className="text-center text-xl lg:text-2xl font-bold mb-8">BraiLoop Bicycle</h2>}
                  <p className="mb-2">
                    点字ブロックデータ収集用のIoT自転車。
                    デバイスを取り付けるだけであなたの自転車もBraiLoop Bicycleに！
                    自動で点字ブロックデータが収集され、普段の自転車移動が社会貢献に繋がります。
                    やることは簡単、自転車で走るだけ。
                  </p>
                  <p className="text-xs lg:text-sm text-gray-600">※ ご利用の際は道路交通法・交通マナーを遵守してください。</p>
                </div>
              </div>
            </div>
  
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
              {isMobile && <h2 className="text-center text-xl font-bold">BraiLoop WebApp</h2>}
              <div className="flex flex-col items-center gap-2 w-full md:w-2/5 border-2 border-base-300 rounded-md">
                <img src={brailoopWebappImg} alt="BraiLoop WebApp" className="rounded-md" />
              </div>
              <div className="w-full md:w-3/5 text-sm lg:text-base space-y-4">
                <div className="max-w-[600px] w-full mx-auto">
                  {!isMobile && <h2 className="text-center text-xl lg:text-2xl font-bold mb-8">BraiLoop WebApp</h2>}
                  <p>
                    BraiLoop Bicycleで収集したデータを地図上に表示し、あなたの街の点字ブロックをまとめて管理します。
                    ブロック種別による絞り込みも可能で、今見たい点字ブロックが一目瞭然！
                    点検・管理にもご活用ください。
                  </p>
                  <LinkCard to='/map' icon={MapPin}>点字ブロックマップ</LinkCard>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
              {isMobile && <h2 className="text-center text-xl font-bold">BraiLoop API</h2>}
              <div className="flex flex-col items-center gap-2 w-full md:w-2/5 border-2 border-base-300 rounded-md">
                <img src={brailoopApiImg} alt="BraiLoop API" className="rounded-md" />
              </div>
              <div className="w-full md:w-3/5 text-sm lg:text-base space-y-4">
                <div className="max-w-[600px] w-full mx-auto">
                  {!isMobile && <h2 className="text-center text-xl lg:text-2xl font-bold mb-8">BraiLoop API</h2>}
                  <p>
                    BraiLoop Bicycleで収集したデータをオープンデータとして公開。
                    REST APIの利用で、点字ブロックデータをJSON形式で取得可能です。
                  </p>
                  
                  <p>詳しくは以下のドキュメントをご覧ください。</p>
                  <LinkCard to='/docs' icon={BookOpenText}>BraiLoop API | v1.0</LinkCard>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section heading="Research">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-8 w-full">
            <div className="flex flex-col items-center w-full md:w-1/2 lg:w-2/5">
              <img src={brailoopAbstractImg} alt="Research Abstract" />
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5">
              <div className="max-w-[600px] w-full text-sm lg:text-base mx-auto space-y-4 lg:space-y-8">
                <p className="text-center text-base lg:text-lg font-semibold">バリアフリー社会の実現に向けて</p>
                <div>
                  <p>
                    BraiLoopは2025年度より岡山大学工学部 Convivial Computing Laboratoryで行われている研究プロジェクトです。
                    点字ブロックの維持管理コスト削減による、視覚障害者の安全かつ快適な社会の実現を目標としています。
                  </p>
                  <p>
                    データ収集のためのセンシングシステムの設計はもちろん、自転車走行中に撮影した低品質な（歪みやブレがある）画像から点字ブロックをいかに高精度で検出するかが本研究のポイントの1つです。
                  </p>
                </div>
                <a href='https://cocolab.jp' target='_blank'>
                  <img src={cocolab} alt='Convivial Computing Laboratory' className="w-[60%] lg:w-[50%] mx-auto" />
                </a>
              </div>
            </div>
          </div>
          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">研究業績</h2>
            <ResearchView works={research} />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">メンバー</h2>
          <div className="flex flex-col gap-10 md:gap-12">
            <MemberCard
              img={profileYutoMatsuda}
              jpName='松田 悠斗'
              enName='Yuto Matsuda'
              position='岡山大学 工学部 情報・電気・数理データサイエンス系 情報工学コース 学生（B4）'
              profileLink='https://yuto-matsuda.github.io/portfolio'
              email='yuto.matsuda[at]cocolab.jp'
            >
              <p>
                2025年4月より、岡山大学コンヴィヴィアルコンピューティング研究室に所属。
                BraiLoopをはじめとし、センシングや機械学習、データ分析を主軸に研究を進めている。
                ちなみに、点字ブロックと同じ出身・誕生日。
              </p>
            </MemberCard>
            <MemberCard
              img={profileYukiMatsuda}
              jpName='松田 裕貴'
              enName='Yuki Matsuda'
              position='岡山大学 学術研究院 環境生命自然科学学域 講師'
              profileLink='https://yukimat.jp'
              email='yukimat[at]okayama-u.ac.jp'
            >
              <p>
                2024年4月、コンヴィヴィアルコンピューティング研究室（Convivial Computing Laboratory）を設立。
                最近では、都市環境におけるユーザ参加型センシングとスマートデバイスを用いた心理状態推定を研究テーマとして取り上げ、実環境ベースでの研究を進めている。
              </p>
            </MemberCard>
          </div>

        </Section>
      </div>
      
      <Footer />
    </>
  )
}

function Section({
  heading,
  children
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    
    <section className="my-16">
      <h1
        className="
          text-3xl md:text-4xl text-center font-extrabold border-b-4 border-tp-200 pb-2 mb-8 md:mb-10 
          whitespace-nowrap gradient-tp bg-clip-text text-transparent
        "
      >
        {heading}
      </h1>
      <div className="max-w-[1300px] mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  )
}