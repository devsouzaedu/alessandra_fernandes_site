// src/app/admin/posts/page.tsx
import Link from 'next/link';
import { getSupabaseAdmin } from '@/lib/supabaseClient';
import { Post } from '@/types/blog';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import PostActions from './PostActions';
import MobilePostCard from './MobilePostCard';

async function getPosts(): Promise<Post[]> {
  const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
  return (data as Post[] | null) ?? [];
}

export default async function AdminPostsPage() {
  const posts = await getPosts();

  return (
    <div>
      {/* Cabeçalho otimizado para mobile */}
      <div className="mb-4">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">Gerenciar Posts</h1>
        <Link href="/admin/posts/new" className="block w-full">
          <span className="block text-center bg-brand-green hover:bg-brand-green-alt text-white font-bold py-3 px-4 rounded" style={{ backgroundColor: '#729080' }}>
            Novo Post
          </span>
        </Link>
      </div>

      {/* Exibição responsiva dos posts */}
      <div className="bg-white shadow-md rounded-lg">
        {/* Tabela para telas maiores (oculta em dispositivos móveis) */}
        <div className="hidden md:block overflow-x-auto">
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
                  <PostActions postId={post.id} isPublished={post.published} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Layout de cartões para dispositivos móveis - usando componente cliente */}
        <div className="md:hidden">
          {posts.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              Nenhum post encontrado.
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {posts.map((post) => (
                <MobilePostCard 
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  slug={post.slug}
                  author={post.author}
                  published={post.published}
                  created_at={post.created_at}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
