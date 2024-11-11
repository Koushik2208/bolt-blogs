"use client";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';

interface BlogHeaderProps {
  blog: {
    author: {
      name: string;
      avatar: string;
    };
    created_at: string;
    reading_time: number;
  };
}

export default function BlogHeader({ blog }: BlogHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
        <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium leading-none">{blog.author.name}</p>
        <p className="text-sm text-muted-foreground">
          {formatDistanceToNow(new Date(blog.created_at), { addSuffix: true })}
          {' · '}
          {blog.reading_time} min read
        </p>
      </div>
    </div>
  );
}