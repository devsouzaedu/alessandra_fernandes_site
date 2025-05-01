// src/app/admin/posts/PostActions.tsx
'use client';

import { useTransition } from 'react';
import Link from 'next/link';
import { deletePost, togglePublishStatus } from './actions'; // Importa as Server Actions

interface PostActionsProps {
  postId: string;
  isPublished: boolean;
  // Passar o slug aqui seria útil para revalidação mais granular ou navegação
  // postSlug: string;
}

export default function PostActions({ postId, isPublished }: PostActionsProps) {
  const [isPending, startTransition] = useTransition();
  // Local state to immediately reflect publish/unpublish change, might not be needed if revalidation is fast enough
  // const [publishedState, setPublishedState] = useState(isPublished);

  const handleDelete = () => {
    if (confirm('Tem certeza que deseja apagar este post permanentemente? Esta ação não pode ser desfeita.')) {
      startTransition(async () => {
        const result = await deletePost(postId);
        if (result?.error) {
          alert(`Erro ao apagar: ${result.error}`);
        }
        // Revalidation should update the list automatically
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
        // Update local state if needed, or rely on revalidation
        // if (result?.success) {
        //   setPublishedState(result.newState);
        // }
      });
    }
  };

  return (
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
      {/* Botão Editar (Link) */}
      <Link href={`/admin/posts/edit/${postId}`} className="text-indigo-600 hover:text-indigo-900 disabled:opacity-50" aria-disabled={isPending}>
        Editar
      </Link>

      {/* Botão Apagar */}
      <button
        onClick={handleDelete}
        disabled={isPending}
        className="text-red-600 hover:text-red-900 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? 'Apagando...' : 'Apagar'}
      </button>

      {/* Botão Publicar/Despublicar */}
      <button
        onClick={handleTogglePublish}
        disabled={isPending}
        className={`${isPublished ? 'text-yellow-600 hover:text-yellow-900' : 'text-green-600 hover:text-green-900'} disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isPending ? 'Atualizando...' : (isPublished ? 'Despublicar' : 'Publicar')}
      </button>
    </td>
  );
}
