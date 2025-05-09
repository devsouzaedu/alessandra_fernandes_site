// src/app/admin/posts/page.tsx
import Link from 'next/link';
import { getSupabaseAdmin } from '@/lib/supabaseClient';
import { Post } from '@/types/blog';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import PostActions, { deletePost, togglePublishStatus } from './PostActions';

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
        
        {/* Layout de cartões para dispositivos móveis */}
        <div className="md:hidden">
          {posts.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              Nenhum post encontrado.
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {posts.map((post) => (
                <div key={post.id} className="p-3 space-y-2 overflow-hidden">
                  {/* Título e Status */}
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-medium text-gray-900 break-words" title={post.title}>
                      {post.title.length > 30 ? `${post.title.substring(0, 30)}...` : post.title}
                    </h3>
                    <div className="text-xs text-gray-500 truncate">/{post.slug}</div>
                    
                    <div className="mt-1">
                      {post.published ? (
                        <span className="px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full bg-green-100 text-green-800">
                          Publicado
                        </span>
                      ) : (
                        <span className="px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Rascunho
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Informações do Post */}
                  <div className="grid grid-cols-1 gap-1 text-xs text-gray-500">
                    <div>
                      <span className="font-medium">Autor:</span> {post.author}
                    </div>
                    <div>
                      <span className="font-medium">Data:</span> {format(new Date(post.created_at), 'dd/MM/yy HH:mm', { locale: ptBR })}
                    </div>
                  </div>
                  
                  {/* Botões de Ação - Reorganizados em duas linhas */}
                  <div className="pt-2 flex flex-col space-y-2">
                    <div className="grid grid-cols-2 gap-2 w-full">
                      <Link 
                        href={`/admin/posts/edit/${post.id}`} 
                        className="flex-1 flex items-center justify-center px-2 py-2 border border-transparent text-xs font-medium rounded text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Editar
                      </Link>
                      
                      <Link 
                        href={`/blog/${post.slug}`} 
                        target="_blank" 
                        className="flex-1 flex items-center justify-center px-2 py-2 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Visualizar
                      </Link>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 w-full">
                      {post.published ? (
                        <button 
                          onClick={async () => {
                            if (confirm('Tem certeza que deseja despublicar este post?')) {
                              await togglePublishStatus(post.id, true);
                            }
                          }}
                          className="flex-1 flex items-center justify-center px-2 py-2 border border-transparent text-xs font-medium rounded text-white bg-yellow-500 hover:bg-yellow-600"
                        >
                          Despublicar
                        </button>
                      ) : (
                        <button 
                          onClick={async () => {
                            if (confirm('Tem certeza que deseja publicar este post?')) {
                              await togglePublishStatus(post.id, false);
                            }
                          }}
                          className="flex-1 flex items-center justify-center px-2 py-2 border border-transparent text-xs font-medium rounded text-white bg-green-500 hover:bg-green-600"
                        >
                          Publicar
                        </button>
                      )}
                      
                      <button 
                        onClick={async () => {
                          if (confirm('Tem certeza que deseja apagar este post permanentemente? Esta ação não pode ser desfeita.')) {
                            await deletePost(post.id);
                          }
                        }}
                        className="flex-1 flex items-center justify-center px-2 py-2 border border-transparent text-xs font-medium rounded text-white bg-red-500 hover:bg-red-600"
                      >
                        Apagar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
