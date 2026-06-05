import Link from "next/link";
import { client } from "@/lib/client"; 
import {formatToJST} from "@/lib/date"

export async function EntryList() {
  const data = await client.getList({ endpoint: "blogs" });
 
  return (
    <div>
      <ul className="">
        {data.contents.map((blog) => (
            <li key={blog.id}>
                <Link href={`/blog/${blog.slug}`}>
                    <div className="card-body card-border hover:bg-neutral-50">
                        <p>{formatToJST(blog.publishedAt)}</p>
                        <h2 className="card-title"> {blog.title}</h2>
                    </div>
                </Link>
            </li>
        ))}
      </ul>
    </div>
  );
}
