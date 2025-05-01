// src/app/admin/posts/edit/[id]/page.tsx
import { notFound } from 'next/navigation';
import { getSupabaseAdmin } from '@/lib/supabaseClient';
import { Post } from '@/types/blog';
import EditPostForm from './EditPostForm'; // Importa o formulário de edição

async function getPostById(id: string): Promise<Post | null> {
  const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from('posts')
    .select('*')
    .eq('id', id)
    .single(); // Espera um único resultado

  if (error) {
    console.error('Error fetching post by ID:', error);
    // Se o erro for "PGRST116" (Range not satisfiable), significa que não encontrou o post
    if (error.code === 'PGRST116') {
      return null;
    }
    // Lança outros erros para serem tratados pela página de erro do Next.js
    throw error;
  }

  return data as Post | null;
}

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);

  if (!post) {
    notFound(); // Mostra a página 404 se o post não for encontrado
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Editar Post</h1>
      {/* Renderiza o formulário de edição passando os dados do post */}
      <EditPostForm post={post} />
    </div>
  );
}
