import { mockBlogs } from './mock-data';

export async function getBlogs() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockBlogs;
}

export async function getBlogById(id: string) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockBlogs.find(blog => blog.id === id) || null;
}