import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_COOKIE_NAME = 'admin-auth';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verifica se a rota atual é dentro de /admin, mas NÃO é a página de login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const authCookie = request.cookies.get(AUTH_COOKIE_NAME);

    // Se não houver cookie de autenticação, redireciona para login
    if (!authCookie || authCookie.value !== 'true') {
      const loginUrl = new URL('/admin/login', request.url);
      // Adiciona um parâmetro 'next' para redirecionar após o login (opcional, mas útil)
      // loginUrl.searchParams.set('next', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Se for a página de login ou fora do /admin, ou se o cookie for válido, continua normalmente
  return NextResponse.next();
}

// Configuração do matcher para aplicar o middleware apenas às rotas /admin
export const config = {
  matcher: ['/admin/:path*'],
};
