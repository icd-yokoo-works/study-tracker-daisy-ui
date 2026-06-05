import { notFound } from 'next/navigation'
import { client } from "@/lib/client";

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
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
        className="prose prose-slate"
      />
    </main>
  );
}
