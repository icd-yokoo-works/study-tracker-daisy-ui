import { BlogPosts } from 'app/components/posts'
import { EntryCard } from './components/entry-card'

export default function Page() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="hero bg-base-200 min-h-auto py-8 mb-12">
        <div className="hero-content text-center">
          <div className="w-full md:max-w-5xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">JavaScript & TypeScript <br />with Next.js</h1>
            <p className="md:max-w-2xl py-6 text-base sm:text-lg leading-relaxed">
              Next.jsを使いながら、JavaScriptやTypeScriptの学習を進めます。
              他にも、ヘッドレスCMSやデータベース、AIコーディング、Figma MCPなども使い、サイト制作の効率化に取り組んでいきます。
            </p>
            <h2 className='text-2xl sm:text-3xl font-semibold'>講座の進捗状況</h2>
            <div className="stats stats-vertical sm:stats-horizontal shadow rounded-box">
              <div className="stat place-items-center">
                <div className="stat-title">React<br /> The Complete Guide <br />2025</div>
                <div className="stat-value text-cyan-600">5%</div>
                <div className="stat-desc">達成率</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">Complete React,<br /> Next.js & TypeScript<br />Projects Course 2025</div>
                <div className="stat-value text-cyan-600">14%</div>
                <div className="stat-desc">達成率</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">Understanding<br />TypeScript</div>
                <div className="stat-value text-cyan-700">12%</div>
                <div className="stat-desc">達成率</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">The Modern JavaScript<br />Bootcamp</div>
                <div className="stat-value text-rose-400">60%</div>
                <div className="stat-desc">達成率</div>
              </div>
            </div>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
  
      <div className="max-w-5xl mx-auto">
        <h1 className="mb-8 text-3xl sm:text-4xl font-semibold tracking-tighter">
          学習教材
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tighter">Udemy</h2>
        <ul className="prose prose-zinc max-w-none list-inside list-disc mb-8 pl-4" role="list">
          <li><span className="font-bold">React - The Complete Guide 2025 (incl. Next.js, Redux)</span> <span>-</span> <span className="text-sm">Maximilian Schwarzmüller</span></li>
          <li><span className="font-bold">Complete React, Next.js & TypeScript Projects Course 2025</span> <span>-</span> <span className="text-sm">Jānis Smilga</span></li>
          <li><span className="font-bold">Understanding TypeScript</span> <span>-</span> <span className="text-sm">Maximilian Schwarzmüller</span></li>
          <li><span className="font-bold">The Modern JavaScript Bootcamp</span> <span>-</span> <span className="text-sm">Andrew Mead</span></li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold tracking-tighter">書籍</h2>
        <ul className="prose prose-zinc max-w-none list-inside list-disc pl-4" role="list">
          <li><span className="font-bold">プロを目指す人のためのTypeScript入門</span> <span>-</span> <span className="text-sm">鈴木 僚太[著]</span></li>
          <li><span className="font-bold">SQL ゼロからはじめるデータベース操作</span> <span>-</span> <span className="text-sm">ミック[著]</span></li>
          <li><span className="font-bold">リーダブルコード</span> <span>-</span> <span className="text-sm">Dustin Boswell, Trevor Foucher　[著]</span></li>
        </ul>

        <div className="my-12 w-full">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold tracking-tighter">New Entry</h2>
          <EntryCard />
        </div>
      </div>
    </section>
  )
}
