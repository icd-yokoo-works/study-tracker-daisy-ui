import { BlogPosts } from 'app/components/posts'
import { EntryCard } from './components/entry-card'

export default function Page() {
  return (
    <section>
      <div className="hero bg-base-200 min-h-96 mb-12">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">JavaScript & TypeScript <br />with Next.js</h1>
            <p className="py-6">
              Next.jsを使いながら、JavaScriptやTypeScriptの学習を進めます。
              他にも、ヘッドレスCMSやデータベース、AIコーディング、Figma MCPなども使い、サイト制作の効率化に取り組んでいきます。
            </p>
            <h2 className='text-2xl font-semibold'>講座の進捗状況</h2>
            <div className="stats shadow">
              <div className="stat place-items-center">
                <div className="stat-title">React 1</div>
                <div className="stat-value text-cyan-600">22%</div>
                <div className="stat-desc">Udemyの進捗</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">React 2</div>
                <div className="stat-value text-cyan-600">22%</div>
                <div className="stat-desc">Udemyの進捗</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">TypeScript</div>
                <div className="stat-value text-rose-400">5%</div>
                <div className="stat-desc">Udemyの進捗</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">JavaScript</div>
                <div className="stat-value text-cyan-700">40%</div>
                <div className="stat-desc">Udemyの進捗</div>
              </div>
            </div>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
  
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
        学習教材
      </h1>
      <h2 className="text-xl font-semibold tracking-tighter">Udemy</h2>
		<ul className="prose-zinc max-w-none list-inside list-disc mb-8" role="list">
			<li><span className="font-bold">React - The Complete Guide 2025 (incl. Next.js, Redux)</span> <span>-</span> <span className="text-sm">Maximilian Schwarzmüller</span></li>
			<li><span className="font-bold">Complete React, Next.js & TypeScript Projects Course 2025</span> <span>-</span> <span className="text-sm">Jānis Smilga</span></li>
			<li><span className="font-bold">Type Script : Understanding TypeScript</span> <span>-</span> <span className="text-sm">Maximilian Schwarzmüller</span></li>
      <li><span className="font-bold">The Modern JavaScript Bootcamp</span> <span>-</span> <span className="text-sm">Andrew Mead</span></li>
		</ul>

    <h2 className="text-xl font-semibold tracking-tighter">書籍</h2>
		<ul className="prose-zinc max-w-none list-inside list-disc" role="list">
			<li><span className="font-bold">プロを目指す人のためのTypeScript入門</span> <span>-</span> <span className="text-sm">鈴木 僚太[著]</span></li>
			<li><span className="font-bold">SQL ゼロからはじめるデータベース操作</span> <span>-</span> <span className="text-sm">ミック[著]</span></li>
			<li><span className="font-bold">リーダブルコード</span> <span>-</span> <span class="text-sm">Dustin Boswell, Trevor Foucher　[著]</span></li>
		</ul>


      <div className="my-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tighter">New Entry</h2>
        <EntryCard />
      </div>
    </section>
  )
}
