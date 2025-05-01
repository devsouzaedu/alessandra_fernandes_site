// src/app/admin/posts/new/page.tsx
'use client'; // Necessário para useFormState e useFormStatus

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { revalidatePath } from 'next/cache'; // Importa para a action
import { redirect } from 'next/navigation'; // Importa para a action
import slugify from 'slugify'; // Importa para a action
import { getSupabaseAdmin } from '@/lib/supabaseClient'; // Importa para a action

// Define o tipo do estado esperado pelo useFormState
interface FormState {
  message: string | null;
  type: 'error' | 'success' | null;
}

// Server Action ajustada para useFormState
async function createPostAction(prevState: FormState, formData: FormData): Promise<FormState> {
  'use server';

  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const tagsRaw = formData.get('tags') as string;
  const content = formData.get('content') as string;
  const published = formData.get('published') === 'on'; // Checkbox value is 'on' when checked

  if (!title || !author || !content) {
    console.error('Missing required fields');
    return { message: 'Título, Autor e Conteúdo são obrigatórios.', type: 'error' };
  }

  // Gera um slug a partir do título
  const slug = slugify(title, { lower: true, strict: true, remove: /[*+~.()\'"!:@]/g });

  // Processa as tags: remove espaços extras e divide por vírgula
  const tags = tagsRaw ? tagsRaw.split(',').map(tag => tag.trim()).filter(tag => tag) : [];

  const supabaseAdmin = getSupabaseAdmin();

  const { data, error } = await supabaseAdmin
    .from('posts')
    .insert([
      {
        title,
        author,
        tags,
        content,
        published,
        slug,
      },
    ])
    .select() // Seleciona o post criado para confirmação (opcional)
    .single(); // Espera um único resultado ou erro

  if (error) {
    console.error('Supabase Error:', error);
    // Tratar erro específico de slug duplicado, se ocorrer
    if (error.code === '23505') { // Código de violação de unicidade do PostgreSQL
        return { message: `Erro ao salvar: O título "${title}" já existe (slug duplicado). Escolha um título diferente.`, type: 'error' };
    }
    return { message: 'Erro ao salvar o post no banco de dados.', type: 'error' };
  }

  console.log('Post created:', data);

  // Limpa o cache da página de listagem de posts (tanto admin quanto pública)
  revalidatePath('/admin/posts');
  revalidatePath('/blog');

  // Redireciona para a página de listagem após sucesso
  redirect('/admin/posts');
  // Nota: O redirect() interrompe a execução, então um estado de sucesso aqui não seria retornado normalmente.
  // Se não houvesse redirect, poderíamos retornar: return { message: 'Post criado com sucesso!', type: 'success' };
}

// Componente do Botão de Submit para usar useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-green hover:bg-brand-green-alt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
      style={{ backgroundColor: '#729080' }} // Força cor específica
    >
      {pending ? 'Salvando...' : 'Salvar Post'}
    </button>
  );
}

// Componente da Página usando useFormState
export default function NewPostPage() {
  const initialState: FormState = { message: null, type: null };
  const [state, formAction] = useFormState(createPostAction, initialState);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Criar Novo Post</h1>
      {/* O formulário agora usa formAction do useFormState */}
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
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags (separadas por vírgula)</label>
          <input
            type="text"
            id="tags"
            name="tags"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="nutrição, esporte, saúde"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Conteúdo (Markdown)</label>
          <textarea
            id="content"
            name="content"
            required
            rows={15}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-mono"
            placeholder="Escreva seu post aqui usando sintaxe Markdown..."
          ></textarea>
        </div>
        <div className="flex items-center">
          <input
            id="published"
            name="published"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="published" className="ml-2 block text-sm text-gray-900">Publicar imediatamente</label>
        </div>
        <div>
          {/* Usa o componente SubmitButton */}
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
