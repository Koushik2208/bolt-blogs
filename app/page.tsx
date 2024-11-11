import BlogCard from '@/components/blog-card';
import SearchBar from '@/components/search-bar';
import { getBlogs } from '@/lib/api';

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <SearchBar />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}