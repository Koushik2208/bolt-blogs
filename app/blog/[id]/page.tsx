import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogHeader from '@/components/blog-header';
import { getBlogById, getBlogs } from '@/lib/api';

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = await getBlogById(params.id);
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.created_at,
      authors: [blog.author.name],
      images: [
        {
          url: blog.cover_image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.cover_image],
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const blog = await getBlogById(params.id);
  
  if (!blog) {
    notFound();
  }

  return (
    <article className="container max-w-4xl py-12">
      <div className="flex flex-col gap-8">
        <BlogHeader blog={blog} />
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{blog.title}</h1>
          <p className="text-xl text-muted-foreground">{blog.excerpt}</p>
        </div>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </article>
  );
}