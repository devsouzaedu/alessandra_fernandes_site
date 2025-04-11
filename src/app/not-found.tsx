import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold mb-6 font-montserrat">404</h1>
      <h2 className="text-2xl font-bold mb-4 font-montserrat">Página não encontrada</h2>
      <p className="mb-8 max-w-md">
        A página que você está tentando acessar não existe ou foi movida.
      </p>
      <Link href="/" className="btn btn-primary">
        Voltar para a página inicial
      </Link>
    </div>
  );
} 