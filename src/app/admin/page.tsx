import { redirect } from 'next/navigation';

export default function AdminPage() {
  // Redirecionamento automático para a página de posts
  redirect('/admin/posts');
  // Esta linha abaixo nunca será executada devido ao redirecionamento acima
  return null;
}
