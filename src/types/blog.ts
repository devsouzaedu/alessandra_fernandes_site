// src/types/blog.ts

export interface Post {
  id: string;
  created_at: string; // Supabase retorna como string ISO 8601
  title: string;
  author: string;
  tags: string[] | null; // O banco de dados permite null para o array
  content: string;
  published: boolean;
  slug: string;
}
