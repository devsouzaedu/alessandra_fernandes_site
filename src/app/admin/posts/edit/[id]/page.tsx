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

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function EditPostPage(props: Props) { 
  // Idealmente, teríamos uma validação aqui para garantir que props.params.id é string
  const postId = props.params?.id;
  // if (typeof postId !== 'string') {
  //   // Lidar com o caso onde o id não é uma string (pode ser array ou undefined)
  //   console.error('Invalid post ID type:', typeof postId);
  //   notFound(); // Ou retornar um erro apropriado
  // }

  // const post = await getPostById(postId); 

  // if (!post) {
  //   notFound();
  // }

  // return (
  //   <div>
  //     <h1 className="text-2xl font-bold mb-6">Editar Post</h1>
  //     {/* Renderiza o formulário de edição passando os dados do post */}
  //     <EditPostForm post={post} />
  //   </div>
  // );

  return <div>Edit Post Page Placeholder (ID: {postId})</div>; 
}
