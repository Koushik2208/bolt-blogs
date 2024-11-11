"use client";

import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    excerpt: string;
    author: {
      name: string;
      avatar: string;
    };
    created_at: string;
    reading_time: number;
  };
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.id}`}>
      <Card className="h-full overflow-hidden transition-colors hover:bg-muted/50">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
              <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium leading-none">{blog.author.name}</p>
              <p className="text-sm text-muted-foreground">
                {formatDistanceToNow(new Date(blog.created_at), { addSuffix: true })}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold tracking-tight mb-2">{blog.title}</h3>
          <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            {blog.reading_time} min read
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}