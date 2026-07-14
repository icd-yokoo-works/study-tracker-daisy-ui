import { notFound } from 'next/navigation'
import Link from 'next/link'
import { client } from "@/lib/client";
import {formatToJST} from "@/lib/date"

export async function generateStaticParams() {
  const data = await client.get({ endpoint: "blogs" });

  return data.contents.map((content) => ({
    slug: content.slug,
  }));
}

export default async function BlogId({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const data = await client.getList({
    endpoint: "blogs",
    queries: {
      filters: `slug[equals]${slug}`,
      limit: 1,
    },
  });

  if (data.contents.length === 0) {
    notFound(); // Next.jsの404ページを表示
  }

  const blog = data.contents[0];

  // 前後記事を取得して現在記事のインデックスを探す
  const list = await client.getList({ endpoint: "blogs", queries: { limit: 100, orders: "-publishedAt" } });
  const posts = list.contents;
  const idx = posts.findIndex((p: any) => p.slug === blog.slug);
  const prev = idx >= 0 && idx + 1 < posts.length ? posts[idx + 1] : null; // older
  const next = idx > 0 ? posts[idx - 1] : null; // newer

  return (
    <main className='prose prose-zinc max-w-none'>
      <h1>{blog.title}</h1>
      
      <div className='pb-8'>
        <span className='mr-4'>{formatToJST(blog.publishedAt)}</span>
        <span className={"badge __isCategory-"+blog.category.id} >{blog.category.id}</span>
      </div>


      <article className="mb-24"
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />

      <div className="join flex justify-between">
        {prev ? (
          <Link href={`/blog/${prev.slug}`} className="join-item btn btn-outline">« Previous page</Link>
        ) : (
          <button className="join-item btn btn-outline btn-disabled">« Previous page</button>
        )}
        {next ? (
          <Link href={`/blog/${next.slug}`} className="join-item btn btn-outline">Next »</Link>
        ) : (
          <button className="join-item btn btn-outline btn-disabled">Next »</button>
        )}
      </div>
    </main>
  );
}
