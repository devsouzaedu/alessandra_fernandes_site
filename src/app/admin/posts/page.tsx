// src/app/admin/posts/page.tsx
import Link from 'next/link';
import { getSupabaseAdmin } from '@/lib/supabaseClient';
import { Post } from '@/types/blog'; // Importando o tipo definido
import { format } from 'date-fns'; // Para formatar datas
import { ptBR } from 'date-fns/locale'; // Para formato brasileiro
import PostActions from './PostActions'; // Importa o componente cliente

async function getPosts(): Promise<Post[]> {
  const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from('posts')
    .select('*') // Seleciona todas as colunas
    .order('created_at', { ascending: false }); // Ordena pelos mais recentes

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
  // É uma boa prática garantir que os dados retornados correspondam ao tipo esperado.
  // Se Supabase retornar null, retornamos um array vazio.
  return (data as Post[] | null) ?? [];
}

export default async function AdminPostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gerenciar Posts</h1>
        <Link href="/admin/posts/new">
          <span className="bg-brand-green hover:bg-brand-green-alt text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: '#729080' }}>
            Novo Post
          </span>
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Título
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Autor
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Criado em
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  Nenhum post encontrado.
                </td>
              </tr>
            )}
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 truncate max-w-xs" title={post.title}>{post.title}</div>
                  <div className="text-xs text-gray-500">/{post.slug}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.author}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {post.published ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Publicado
                    </span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Rascunho
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {format(new Date(post.created_at), 'dd/MM/yyyy HH:mm', { locale: ptBR })}
                </td>
                {/* Usa o componente PostActions para os botões */}
                <PostActions postId={post.id} isPublished={post.published} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
