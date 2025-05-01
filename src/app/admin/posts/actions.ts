// src/app/admin/posts/actions.ts
'use server';

import { revalidatePath } from 'next/cache';
import { getSupabaseAdmin } from '@/lib/supabaseClient';
import slugify from 'slugify'; // Importa slugify
import { redirect } from 'next/navigation'; // Importa redirect

/**
 * Cria um novo post.
 * Esta action é usada com useFormState no formulário NewPostPage.
 */
export async function createPostAction(prevState: { message: string | null; type: 'error' | 'success' | null }, formData: FormData): Promise<{ message: string | null; type: 'error' | 'success' | null }> {

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

  // Processa as tags: remove espaços e filtra vazias
  const tags = tagsRaw ? tagsRaw.split(',').map(tag => tag.trim()).filter(tag => tag) : [];

  const supabaseAdmin = getSupabaseAdmin();

  const { data, error } = await supabaseAdmin
    .from('posts')
    .insert([{ title, author, tags, content, published, slug }])
    .select()
    .single();

  if (error) {
    console.error('Supabase Error:', error);
    // Tratar erro específico de slug duplicado, se ocorrer
    if (error.code === '23505') { // Código de violação de unicidade do PostgreSQL
        return { message: `Erro ao salvar: O título "${title}" já existe (slug duplicado). Escolha um título diferente.`, type: 'error' };
    }
    return { message: 'Erro ao salvar o post no banco de dados.', type: 'error' };
  }

  console.log('Post created:', data);

  // Invalida o cache para a rota de posts no admin e a pública do blog
  revalidatePath('/admin/posts');
  revalidatePath('/blog'); // Revalida a página principal do blog também

  // Redireciona para a página de listagem após sucesso
  redirect('/admin/posts');
  // Nota: O redirect() interrompe a execução, então um estado de sucesso aqui não seria retornado normalmente.
  // Se não houvesse redirect, poderíamos retornar: return { message: 'Post criado com sucesso!', type: 'success' };
}

/**
 * Deleta um post pelo ID.
 */
export async function deletePost(postId: string) {
  if (!postId) {
    return { error: 'ID do post inválido.' };
  }

  const supabaseAdmin = getSupabaseAdmin();
  const { error } = await supabaseAdmin
    .from('posts')
    .delete()
    .match({ id: postId });

  if (error) {
    console.error('Error deleting post:', error);
    return { error: 'Erro ao deletar o post.' };
  }

  // Revalida o cache para atualizar a lista de posts no admin e no blog público
  revalidatePath('/admin/posts');
  revalidatePath('/blog'); // Revalida a página principal do blog
  // Poderia revalidar slugs específicos, mas revalidar /blog é mais simples por ora

  return { success: true };
}

/**
 * Alterna o status de publicação de um post (publicado/rascunho).
 */
export async function togglePublishStatus(postId: string, currentState: boolean) {
  if (!postId) {
    return { error: 'ID do post inválido.' };
  }

  const newState = !currentState;
  const supabaseAdmin = getSupabaseAdmin();

  const { error } = await supabaseAdmin
    .from('posts')
    .update({ published: newState })
    .match({ id: postId });

  if (error) {
    console.error('Error updating publish status:', error);
    return { error: `Erro ao ${newState ? 'publicar' : 'despublicar'} o post.` };
  }

  // Revalida o cache para atualizar a lista de posts no admin e no blog público
  revalidatePath('/admin/posts');
  revalidatePath('/blog');
  // Revalidar a página do post específico também seria bom
  // revalidatePath(`/blog/${slug}`); // Precisaria do slug aqui

  return { success: true, newState };
}

/**
 * Atualiza um post existente.
 */
export async function updatePost(postId: string, prevState: { message: string | null; type: 'error' | 'success' | null }, formData: FormData): Promise<{ message: string | null; type: 'error' | 'success' | null }> {
  if (!postId) {
    return { message: 'ID do post inválido para atualização.', type: 'error' };
  }

  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const tagsRaw = formData.get('tags') as string;
  const content = formData.get('content') as string;
  const published = formData.get('published') === 'on';

  if (!title || !author || !content) {
    return { message: 'Título, Autor e Conteúdo são obrigatórios.', type: 'error' };
  }

  // Gera um novo slug se o título mudou
  // Poderíamos buscar o post original para comparar, mas por simplicidade vamos gerar sempre
  // Cuidado: Se o slug já existir para OUTRO post, dará erro.
  const slug = slugify(title, { lower: true, strict: true, remove: /[*+~.()\'"!:@]/g });
  const tags = tagsRaw ? tagsRaw.split(',').map(tag => tag.trim()).filter(tag => tag) : [];

  const supabaseAdmin = getSupabaseAdmin();

  const { error } = await supabaseAdmin
    .from('posts')
    .update({
      title,
      author,
      tags,
      content,
      published,
      slug, // Atualiza o slug também
    })
    .match({ id: postId });

  if (error) {
    console.error('Error updating post:', error);
    if (error.code === '23505') { // Erro de unicidade (provavelmente slug)
       return { message: `Erro ao atualizar: O título "${title}" já existe para outro post (slug duplicado). Escolha um título diferente.`, type: 'error' };
    }
    return { message: 'Erro ao atualizar o post no banco de dados.', type: 'error' };
  }

  // Revalida caches
  revalidatePath('/admin/posts');
  revalidatePath(`/admin/posts/edit/${postId}`);
  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`); // Revalida a página pública do post

  // Redireciona de volta para a lista após sucesso
  redirect('/admin/posts');
}
