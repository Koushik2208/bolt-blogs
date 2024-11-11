import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevBlog - Share Your Knowledge',
  description: 'A modern blog platform for developers',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'DevBlog',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
        width: 1200,
        height: 630,
        alt: 'DevBlog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevBlog - Share Your Knowledge',
    description: 'A modern blog platform for developers',
    images: ['https://images.unsplash.com/photo-1499750310107-5fef28a66643'],
    creator: '@yourusername',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen bg-background">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}