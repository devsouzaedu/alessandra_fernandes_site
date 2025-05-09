'use client';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import { deletePost, togglePublishStatus } from './actions';
import { useTransition } from 'react';

type MobilePostCardProps = {
  id: string;
  title: string;
  slug: string;
  author: string;
  published: boolean;
  created_at: string;
};

export default function MobilePostCard({ id, title, slug, author, published, created_at }: MobilePostCardProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm('Tem certeza que deseja apagar este post permanentemente? Esta ação não pode ser desfeita.')) {
      startTransition(async () => {
        const result = await deletePost(id);
        if (result?.error) {
          alert(`Erro ao apagar: ${result.error}`);
        }
      });
    }
  };

  const handleTogglePublish = () => {
    const actionText = published ? 'despublicar' : 'publicar';
    if (confirm(`Tem certeza que deseja ${actionText} este post?`)) {
      startTransition(async () => {
        const result = await togglePublishStatus(id, published);
        if (result?.error) {
          alert(`Erro ao ${actionText}: ${result.error}`);
        }
      });
    }
  };

  return (
    <div className="p-3 space-y-2 overflow-hidden">
      {/* Título e Status */}
      <div className="flex flex-col space-y-1">
        <h3 className="font-medium text-gray-900 break-words" title={title}>
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </h3>
        <div className="text-xs text-gray-500 truncate">/{slug}</div>
        
        <div className="mt-1">
          {published ? (
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
          <span className="font-medium">Autor:</span> {author}
        </div>
        <div>
          <span className="font-medium">Data:</span> {format(new Date(created_at), 'dd/MM/yy HH:mm', { locale: ptBR })}
        </div>
      </div>
      
      {/* Botões de Ação - Reorganizados em duas linhas */}
      <div className="pt-2 flex flex-col space-y-2">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Link 
            href={`/admin/posts/edit/${id}`} 
            className="flex-1 flex items-center justify-center px-2 py-2 border border-transparent text-xs font-medium rounded text-white bg-blue-600 hover:bg-blue-700"
          >
            Editar
          </Link>
          
          <Link 
            href={`/blog/${slug}`} 
            target="_blank" 
            className="flex-1 flex items-center justify-center px-2 py-2 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
          >
            Visualizar
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-2 w-full">
          {published ? (
            <button 
              onClick={handleTogglePublish}
              disabled={isPending}
              className="flex-1 flex items-center justify-center px-2 py-2 border border-transparent text-xs font-medium rounded text-white bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50"
            >
              {isPending ? 'Aguarde...' : 'Despublicar'}
            </button>
          ) : (
            <button 
              onClick={handleTogglePublish}
              disabled={isPending}
              className="flex-1 flex items-center justify-center px-2 py-2 border border-transparent text-xs font-medium rounded text-white bg-green-500 hover:bg-green-600 disabled:opacity-50"
            >
              {isPending ? 'Aguarde...' : 'Publicar'}
            </button>
          )}
          
          <button 
            onClick={handleDelete}
            disabled={isPending}
            className="flex-1 flex items-center justify-center px-2 py-2 border border-transparent text-xs font-medium rounded text-white bg-red-500 hover:bg-red-600 disabled:opacity-50"
          >
            {isPending ? 'Aguarde...' : 'Apagar'}
          </button>
        </div>
      </div>
    </div>
  );
}
