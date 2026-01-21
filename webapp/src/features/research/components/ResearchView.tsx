import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion';
import { useModal } from '@/components/Modal';
import type { Research } from '@/features/research/contents';
import { BookOpen, FileText, Presentation } from 'lucide-react';
import React from 'react';

export default function ResearchView({
  works,
}: {
  works: Research[]
}) {
  const [isOpen, openModal, closeModal] = useModal();

  const researchNum = works.length;

  const getDateStr = (title: string, date: string) => {
    const isJapanese = (str: string) => {
      return /[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uFF01-\uFF60\uFFE0-\uFFE6]/.test(str);
    }

    const englishMonthDict: Record<string, string> = {
      '1':  'Jan.',
      '2':  'Feb.',
      '3':  'Mar.',
      '4':  'Apr.',
      '5':  'May',
      '6':  'Jun.',
      '7':  'Jul.',
      '8':  'Aug.',
      '9':  'Sep.',
      '10': 'Oct.',
      '11': 'Nov.',
      '12': 'Dec.',
    };

    const [year, month, day] = date.split('-');
    if (!month || !day) return year;

    return isJapanese(title) ? `${year}年${month}月${day}日` : `${englishMonthDict[month]} ${day}th, ${year}`;
  }

  return (
    <div className="space-y-4">
      {works.map((research, i) => 
        <div key={i} className='flex gap-2 w-full text-sm md:text-base'>
          <div className='select-none'>
            {String(i + 1).padStart(String(researchNum).length, '0')}.
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <div>
              <p className="text-sm md:text-base font-semibold gradient-tp bg-clip-text text-transparent">{research.title}</p>
              <p className='text-sm'>{research.author}</p>
              <p className='text-sm '>
                <span className='pr-1'>{research.bookTitle},</span>
                {research.volume && <span className='pr-1'>Vol.{research.volume},</span>}
                {research.number && <span className='pr-1'>{typeof(research.number) === 'number' && 'No.'}{research.number},</span>}
                <span className='pr-1'>pp.{research.pages},</span>
                {research.location && <span className='pr-1'>{research.location},</span>}
                <span>{getDateStr(research.title, research.date)}</span>
              </p>
            </div>
            {research.awards && (
              <div className='flex gap-2 flex-wrap'>
                {research.awards.map(({ name, url, modal: Modal }, i) => {
                  const className = 'w-fit text-xs text-mga-3 font-semibold bg-radial-light rounded-2xl py-0.5 px-2'
                  if (url) {
                    return <a key={i} href={url} target='_blank' className={className}>{name}</a>
                  } else if (Modal) {
                    return (
                      <React.Fragment key={i}>
                        <button className={`cursor-pointer ${className}`} onClick={() => openModal(research.id)}>{name}</button>
                        <Modal isOpen={isOpen(research.id)} closeModal={closeModal} />
                      </React.Fragment>
                    )
                  } else {
                    return <div key={i} className={className}>{name}</div>
                  }
                })}
              </div>
            )}
            <div className='flex flex-col gap-2 w-full'>
              <div className='flex gap-2 flex-wrap w-full'>
                <Accordion groupId='research'>
                  <AccordionItem id={`bibtex-${research.id}`}>
                    <AccordionTrigger>
                      <PublishButton type='bibtex' publish={research.publications.bibtex}>BibTeX</PublishButton>
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>
                <PublishButton type='paper' publish={research.publications.paper}>Paper</PublishButton>
                <PublishButton type='poster' publish={research.publications.poster}>Poster</PublishButton>
                <Accordion groupId='research'>
                  <AccordionItem id={`slide-${research.id}`}>
                    <AccordionTrigger>
                      <PublishButton type='slide' publish={research.publications.slide}>Slide</PublishButton>
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>
              </div>
              {research.publications.bibtex && 
                <Accordion groupId='research'>
                  <AccordionItem id={`bibtex-${research.id}`}>
                    <AccordionContent className='bg-gray-100 rounded-xl'>
                      <BibTeX research={research} />
                    </AccordionContent>
                  </AccordionItem>  
                </Accordion>
              }
              {research.publications.slide && 
                <Accordion groupId='research'>
                  <AccordionItem id={`slide-${research.id}`}>
                    <AccordionContent className='bg-gray-100 rounded-xl'>
                      <EmbeddedSlide
                        src={research.publications.slide}
                        title={research.title}
                      />
                    </AccordionContent>
                  </AccordionItem>  
                </Accordion>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function PublishButton({
  type,
  publish,
  children
}: {
  type: 'bibtex' | 'paper' | 'poster' | 'slide'
  publish: string | boolean | null
  children: React.ReactNode
}) {
  const disabledStyle = 'opacity-50 cursor-not-allowed pointer-events-none';

  return type === 'bibtex' ? (
    <button
      className={`flex items-center bg-base-content text-xs md:text-sm text-white rounded-lg px-1 md:px-2 py-1 transition-color duration-300 hover:bg-mga-1 cursor-pointer ${!publish && disabledStyle}`}
    >
        <BookOpen size={20} className='pr-1' />
        {children}
    </button>
  ) : type === 'slide' ? (
    <button
      className={`flex items-center bg-base-content text-xs md:text-sm text-white rounded-lg px-1 md:px-2 py-1 transition-color duration-300 hover:bg-mga-1 cursor-pointer ${!publish && disabledStyle}`}
    >
        <Presentation size={20} className='pr-1' />
        {children}
    </button>
  ) : (
    <a
      href={publish as string}
      target='_blank'
      className={`flex items-center bg-base-content text-xs md:text-sm text-white rounded-lg px-1 md:px-2 py-1 transition-color duration-300 hover:bg-mga-1 ${!publish && disabledStyle}`}
    >
        <FileText size={20} className='pr-1' />
        {children}
    </a>
  )
}

export function BibTeX({
  research
}: {
  research: Research
}) {
  let bibtex = `@${research.entry}{bib:${research.id},\n`;
  bibtex += `\tauthor={${research.author ? research.author.replaceAll(',', ' and') : '松田悠斗'}},\n`;
  bibtex += `\ttitle={${research.title}},\n`;
  bibtex += `\tbooktitle={${research.bookTitle}},\n`;
  if (research.volume) bibtex += `\tvolume={${research.volume}},\n`;
  if (research.number) bibtex += `\tnumber={${research.number}},\n`;
  bibtex += `\tyear={${research.date.split('-')[0]}},\n`;
  bibtex += `\tpages={${research.pages}},\n`;
  if (research.url) bibtex += `\turl={${research.url}}\n`;
  bibtex += '}';

  return (
    // なぜかw-16をつけないとpaddingをはみだす(値はなんでもいい)
    <pre className='text-xs md:text-sm font-mono px-4 py-2 w-16'>
      <code>{bibtex}</code>
    </pre>
  )
}

function EmbeddedSlide({
  src,
  title
}: {
  src: string
  title: string
}) {
  return (
    <iframe
      src={src}
      title={title}
      allowFullScreen
      className="max-w-[600px] w-full rounded-lg mx-auto shadow-2xl"
      style={{ aspectRatio: "16 / 11" }}
    />
  )
}