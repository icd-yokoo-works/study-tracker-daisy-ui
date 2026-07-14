import dayjs from 'dayjs';
import Link from "next/link";
import { client } from "@/lib/client"; 
import {formatToJST} from "@/lib/date"

export async function EntryCard() {
  const data = await client.getList({ endpoint: "blogs", queries: { limit: 6, orders: "-publishedAt" } });
 
  return (
    <div>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {data.contents.map((blog) => {
            const isNew = dayjs(blog.publishedAt).isAfter(dayjs().subtract(72, 'hour'))
            return (
              <li key={blog.slug} className="w-full h-full">
                  <Link href={`/blog/${blog.slug}`}>
                      <div className="card bg-base-100 w-full h-full shadow-sm">
                          <figure>
                              <img
                              src={blog.eyecatch.thumbnail.url}
                              alt={blog.category.name} />
                          </figure>
                          <div className="card-body">
                              <div>{formatToJST(blog.publishedAt)}</div>
                              <h2 className="card-title">
                              {blog.title}
                              {/* <div className="badge badge-secondary">NEW</div> */}
                              </h2>
                              <div className="card-actions justify-end">
                                <div className={blog.category.id + " badge items-end"}>{blog.category.id}</div>
                              </div>
                          </div>
                          
                          {isNew && (
                            <div className="badge badge-secondary absolute top-2 left-2">NEW</div>
                          )}
                      </div>
                  </Link>
              </li>
            )
        })}
      </ul>
    </div>
  );
}