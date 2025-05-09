// src/app/admin/posts/PostActions.tsx
'use client';

import { useTransition } from 'react';
import Link from 'next/link';
import { deletePost, togglePublishStatus } from './actions';

interface PostActionsProps {
  postId: string;
  isPublished: boolean;
}

export default function PostActions({ postId, isPublished }: PostActionsProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm('Tem certeza que deseja apagar este post permanentemente? Esta ação não pode ser desfeita.')) {
      startTransition(async () => {
        const result = await deletePost(postId);
        if (result?.error) {
          alert(`Erro ao apagar: ${result.error}`);
        }
      });
    }
  };

  const handleTogglePublish = () => {
    const actionText = isPublished ? 'despublicar' : 'publicar';
    if (confirm(`Tem certeza que deseja ${actionText} este post?`)) {
      startTransition(async () => {
        const result = await togglePublishStatus(postId, isPublished);
        if (result?.error) {
          alert(`Erro ao ${actionText}: ${result.error}`);
        }
      });
    }
  };

  // Este componente agora renderiza apenas na versão desktop (tabela)
  // A versão mobile tem seus próprios botões diretamente na página
  return (
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
      <Link 
        href={`/admin/posts/edit/${postId}`} 
        className="text-indigo-600 hover:text-indigo-900 disabled:opacity-50" 
        aria-disabled={isPending}
      >
        Editar
      </Link>

      <Link 
        href={`/blog/posts/${postId}`} 
        target="_blank" 
        className="text-blue-600 hover:text-blue-900 disabled:opacity-50" 
        aria-disabled={isPending}
      >
        Visualizar
      </Link>

      <button
        onClick={handleTogglePublish}
        disabled={isPending}
        className={`${isPublished ? 'text-yellow-600 hover:text-yellow-900' : 'text-green-600 hover:text-green-900'} disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isPending ? 'Atualizando...' : (isPublished ? 'Despublicar' : 'Publicar')}
      </button>

      <button
        onClick={handleDelete}
        disabled={isPending}
        className="text-red-600 hover:text-red-900 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? 'Apagando...' : 'Apagar'}
      </button>
    </td>
  );
}

// Exporta as ações de servidor diretamente para uso na versão mobile
export { deletePost, togglePublishStatus };

