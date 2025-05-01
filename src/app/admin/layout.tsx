'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check sessionStorage only on the client side
    const loggedIn = sessionStorage.getItem('isAdminLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    setIsCheckingAuth(false);

    // If not logged in and not on the login page itself, redirect
    if (!loggedIn && pathname !== '/admin') {
      router.replace('/admin');
    }
  }, [pathname, router]);

  useEffect(() => {
    // If trying to access login page while already logged in, redirect to dashboard
    if (isLoggedIn && pathname === '/admin') {
      router.replace('/admin/posts');
    }
  }, [isLoggedIn, pathname, router]);

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminLoggedIn');
    setIsLoggedIn(false);
    router.push('/admin');
  };

  // While checking auth, show a loading state or nothing
  if (isCheckingAuth) {
    return <div className="min-h-screen flex items-center justify-center">Verificando autenticação...</div>;
  }

  // Allow access to login page if not logged in
  if (!isLoggedIn && pathname === '/admin') {
    return <>{children}</>;
  }

  // If logged in and not on the login page, show the admin layout
  if (isLoggedIn) {
    return (
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col">
          <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
          <nav className="flex-grow">
            <ul>
              <li className="mb-3">
                <Link href="/admin/posts" className={`block p-2 rounded hover:bg-gray-700 ${pathname?.startsWith('/admin/posts') ? 'bg-gray-700' : ''}`}>
                  Gerenciar Posts
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/admin/posts/new" className={`block p-2 rounded hover:bg-gray-700 ${pathname === '/admin/posts/new' ? 'bg-gray-700' : ''}`}>
                  Novo Post
                </Link>
              </li>
              {/* Add other admin links here */}
            </ul>
          </nav>
          <button 
            onClick={handleLogout} 
            className="mt-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
    );
  }

  // Fallback for edge cases (should ideally not be reached often)
  return null;
}
