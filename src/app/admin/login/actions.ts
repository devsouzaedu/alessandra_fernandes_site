'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'alessandranutri'; // Considere mover para .env em um cenário real
const AUTH_COOKIE_NAME = 'admin-auth';

export async function login(formData: FormData) {
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Credenciais corretas: Definir cookie e redirecionar
    const cookieStore = cookies();
    cookieStore.set(AUTH_COOKIE_NAME, 'true', {
      httpOnly: true, // Importante para segurança
      secure: process.env.NODE_ENV === 'production', // Usar secure apenas em produção (HTTPS)
      path: '/admin', // Limitar o cookie às rotas /admin
      maxAge: 60 * 60 * 24, // Expira em 1 dia (em segundos)
      sameSite: 'strict',
    });
    redirect('/admin/posts'); // Redireciona para o dashboard de posts após login
  } else {
    // Credenciais incorretas
    // TODO: Implementar feedback de erro na página de login
    console.error('Tentativa de login falhou');
    // Poderia redirecionar de volta para login com uma query param de erro, por exemplo:
    // redirect('/admin/login?error=invalid_credentials');
    // Por agora, apenas não faz nada visível, o que não é ideal.
  }
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
  redirect('/admin/login');
}
