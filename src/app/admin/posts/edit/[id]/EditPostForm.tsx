// src/app/admin/posts/edit/[id]/EditPostForm.tsx
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Post } from '@/types/blog';
import { updatePost } from '@/app/admin/posts/actions'; // Usa alias para importar a action
import Link from 'next/link';

interface EditPostFormProps {
  post: Post;
}

// Define o tipo do estado esperado pelo useFormState para update
interface UpdateFormState {
  message: string | null;
  type: 'error' | 'success' | null;
}

// Componente do Botão de Submit para usar useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-green hover:bg-brand-green-alt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
      style={{ backgroundColor: '#729080' }}
    >
      {pending ? 'Atualizando...' : 'Atualizar Post'}
    </button>
  );
}

export default function EditPostForm({ post }: EditPostFormProps) {
  const initialState: UpdateFormState = { message: null, type: null };
  // Precisamos vincular o postId à action que será passada para useFormState
  const updatePostWithId = updatePost.bind(null, post.id);
  const [state, formAction] = useFormState(updatePostWithId, initialState);

  return (
    <form action={formAction} className="space-y-4 bg-white p-6 rounded-lg shadow">
      {/* Exibe a mensagem de erro/sucesso do estado */}
      {state?.message && (
        <div className={`p-3 rounded mb-4 ${state.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {state.message}
        </div>
      )}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          defaultValue={post.title} // Preenche com valor inicial
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">Autor</label>
        <input
          type="text"
          id="author"
          name="author"
          required
          defaultValue={post.author} // Preenche com valor inicial
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags (separadas por vírgula)</label>
        <input
          type="text"
          id="tags"
          name="tags"
          defaultValue={post.tags?.join(', ') || ''} // Preenche com valor inicial
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="nutrição, esporte, saúde"
        />
      </div>
      <div>
        <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">URL da Imagem de Capa</label>
        <input
          type="url"
          id="coverImage"
          name="coverImage"
          defaultValue={post.coverImage || ''} // Preenche com valor inicial se existir
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="https://exemplo.com/imagem.jpg"
        />
        <p className="mt-1 text-xs text-gray-500">Insira o endereço de uma imagem pública online para ser usada como capa do post</p>
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Conteúdo (Markdown)</label>
        <textarea
          id="content"
          name="content"
          required
          rows={15}
          defaultValue={post.content} // Preenche com valor inicial
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-mono"
          placeholder="Escreva seu post aqui usando sintaxe Markdown..."
        ></textarea>
      </div>
      <div className="flex items-center">
        <input
          id="published"
          name="published"
          type="checkbox"
          defaultChecked={post.published} // Preenche com valor inicial
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="published" className="ml-2 block text-sm text-gray-900">Publicado</label>
      </div>
      <div className="flex justify-end space-x-3">
         <Link href="/admin/posts">
            <span className="inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Cancelar
            </span>
         </Link>
        <SubmitButton />
      </div>
    </form>
  );
}
