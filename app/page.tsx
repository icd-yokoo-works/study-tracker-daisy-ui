import { EntryCard } from './components/entry-card'
import { client } from '@/lib/client'
import Link from 'next/link'


type CompletionItem = {
  id: string
  courseName: string
  lectureNum: number
  compLectureNum: number
  lecturerName?: string
  courseUrl?: string
}

export default async function Page() {
  const data = await client.getList({ endpoint: 'completion' })
  const completionItems = data.contents as CompletionItem[]

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="hero bg-base-200 min-h-auto py-8 mb-12">
        <div className="hero-content text-center">
          <div className="w-full md:max-w-5xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">JavaScript & TypeScript <br />with Next.js</h1>
            <p className="mx-auto md:max-w-2xl py-6 text-base sm:text-lg leading-relaxed lg:max-w-3xl">
              このサイトでは、Next.jsを使いながら、JavaScriptやTypeScript、Reactの学習を進めます。<br />
              その他に、ヘッドレスCMS、AIコーディング、Figma MCPなど、サイト制作の効率化をテストします。
            </p>
            <h2 className='text-2xl sm:text-3xl font-semibold'>Udemy講座の進捗状況</h2>
            <div className="stats stats-vertical sm:stats-horizontal shadow rounded-box">
              {completionItems.map((item) => {
                const completion = Math.floor((item.compLectureNum / item.lectureNum) * 100)
                return (
                  <div key={item.id} className="stat place-items-center">
                    <div className="stat-title whitespace-pre-line">{item.courseName}</div>
                    <div className="stat-desc font-bold">達成率</div>
                    <div className="stat-value text-cyan-600">{completion}%</div>
                  </div>
                )
              })}
            </div>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>

      <div className="my-12 w-full">
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold tracking-tighter">New Entry</h2>
        <EntryCard />
        <div className="flex justify-center mt-8 mb-16">
         <Link href={`/blog/`}>
          <button className="btn btn-xs btn-wide sm:btn-sm md:btn-md lg:btn-lg">記事一覧を見る</button>
          </Link>
        </div>
      </div>
  
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-8 text-3xl sm:text-4xl font-semibold tracking-tighter">
          学習教材
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tighter">Udemy</h3>
        <ul className="prose prose-zinc max-w-none list-inside list-disc mb-8 pl-4" role="list">
          {completionItems.map((item) => (
            <li key={item.id}>
              <Link href={item.courseUrl ?? '#'} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">
                <span className="font-bold">{item.courseName}</span>
                <span> - </span>
                <span className="text-sm">{item.lecturerName ?? '講師情報なし'}</span>
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="text-xl sm:text-2xl font-semibold tracking-tighter">書籍</h3>
        <ul className="prose prose-zinc max-w-none list-inside list-disc pl-4" role="list">
          <li><span className="font-bold">プロを目指す人のためのTypeScript入門</span> <span>-</span> <span className="text-sm">鈴木 僚太[著]</span></li>
          <li><span className="font-bold">SQL ゼロからはじめるデータベース操作</span> <span>-</span> <span className="text-sm">ミック[著]</span></li>
          <li><span className="font-bold">リーダブルコード</span> <span>-</span> <span className="text-sm">Dustin Boswell, Trevor Foucher　[著]</span></li>
        </ul>
      </div>
    </section>
  )
}
