import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { Pen } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Pen className="h-6 w-6" />
          <span className="font-bold">DevBlog</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/new">Write a Post</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}