import Link from "next/link";
import { client } from "@/lib/client"; 

export async function EntryCard() {
  const data = await client.getList({ endpoint: "blogs" });
 
  return (
    <div>
      <ul className="flex gap-8">
        {data.contents.map((blog) => (
            <li key={blog.slug}>
                <Link href={`/blog/${blog.slug}`}>
                    <div className="card bg-base-100 w-72 shadow-sm">
                        <figure>
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {blog.title}
                            {/* <div className="badge badge-secondary">NEW</div> */}
                            </h2>
                            <p className="line-clamp-2">{blog.content}</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">{blog.category.id}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        ))}
      </ul>
    </div>
  );
}