import { notFound } from 'next/navigation'
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

  return (
    <main className='prose prose-zinc max-w-none'>
      <h1>{blog.title}</h1>
      
      <div className='pb-8'>
        <span className='mr-4'>{formatToJST(blog.publishedAt)}</span>
        <span className={"badge __isCategory-"+blog.category.id} >{blog.category.id}</span>
      </div>


      <article
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
  );
}
