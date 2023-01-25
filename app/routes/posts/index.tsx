import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader = async () =>
  json({
    posts: [
      {
        slug: "my-first-post",
        title: "My First Post",
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
      },
    ],
  });

export default function PostsRoute() {
  const { posts } = useLoaderData();

  return (
    <main>
      <h1>Posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
