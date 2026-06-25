import Link from "next/link";
import { client } from "@/lib/client"; 

export async function EntryCard() {
  const data = await client.getList({ endpoint: "blogs" });
 
  return (
    <div>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {data.contents.map((blog) => (
            <li key={blog.slug} className="w-full h-full">
                <Link href={`/blog/${blog.slug}`}>
                    <div className="card bg-base-100 w-full h-full shadow-sm">
                        <figure>
                            <img
                            src={blog.eyecatch.thumbnail.url}
                            alt={blog.category.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {blog.title}
                            {/* <div className="badge badge-secondary">NEW</div> */}
                            </h2>
                            <div className="card-actions justify-end">
                              <div className={blog.category.id + " badge items-end"}>{blog.category.id}</div>
                            </div>
                        </div>
                        
                        <div className="badge badge-secondary absolute top-2 left-2">NEW</div>
                    </div>
                </Link>
            </li>
        ))}
      </ul>
    </div>
  );
}