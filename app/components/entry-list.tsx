import Link from "next/link";
import { client } from "@/lib/client"; 

export async function EntryList() {
  const data = await client.getList({ endpoint: "blogs" });
 
  return (
    <div>
      <ul>
        {data.contents.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}