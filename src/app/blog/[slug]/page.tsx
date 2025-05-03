import { getSupabaseAdmin } from '@/lib/supabaseClient';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

// Tipos para os posts
interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: string;
  tags: string[];
  slug: string;
  coverImage?: string; // URL da imagem de capa (opcional)
}

// Formata a data para o formato brasileiro
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return format(date, "dd 'de' MMMM, yyyy", { locale: ptBR });
}

// Seleciona uma imagem com base na categoria do post
function getPostImage(tags: string[]): string {
  const category = tags && tags.length > 0 ? tags[0].toLowerCase() : 'nutriu00e7u00e3o';
  
  // Mapeamento de categorias para imagens
  const imageMap: Record<string, string> = {
    "hipertrofia": "/images/treino de foru00e7a.jpg",
    "emagrecimento": "/images/mulher com fita metrica ao redor da cintura.jpg",
    "performance": "/images/corrida.jpg",
    "diabetes": "/images/fita metrica.jpg",
    "alimentau00e7u00e3o": "/images/i-yunmai-5jctAMjz21A-unsplash.jpg",
    "ciclismo": "/images/Ciclismo.jpg"
  };
  
  // Procura por correspondu00eancias parciais nas categorias
  for (const [key, value] of Object.entries(imageMap)) {
    if (category.includes(key)) {
      return value;
    }
  }
  
  // Imagem padru00e3o caso nu00e3o encontre correspondu00eancia
  return "/images/i-yunmai-5jctAMjz21A-unsplash.jpg";
}

// Busca um post especu00edfico pelo slug
async function getPostBySlug(slug: string) {
  const supabase = getSupabaseAdmin();
  
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error || !data) {
    console.error('Erro ao buscar post:', error);
    return null;
  }
  
  return data as Post;
}

// Componente principal da pu00e1gina
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  
  // Se o post nu00e3o for encontrado, mostra a pu00e1gina 404
  if (!post) {
    notFound();
  }
  
  // Obtu00e9m a imagem para o post: usa a imagem de capa personalizada se dispoñível, ou seleciona baseado nas tags
  const featuredImage = post.coverImage || getPostImage(post.tags);
  const formattedDate = formatDate(post.created_at);
  
  return (
    <main className="pb-16">
      {/* Header - Imagem destacada */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="container p-6 md:p-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white font-montserrat mb-2">
              {post.title}
            </h1>
            <div className="text-white/80 flex items-center gap-4">
              <span>{formattedDate}</span>
              <span>u2022</span>
              <span>Por {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteu00fado do post */}
      <div className="container py-10">
        <div className="max-w-4xl mx-auto">
          {/* Link para voltar */}
          <Link href="/blog" className="inline-flex items-center text-accent hover:underline mb-6">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Voltar para o blog
          </Link>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-8 flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-primary rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Conteu00fado principal do post */}
          <ReactMarkdown
            components={{
              // Renderiza imagens com estilo consistente
              img: ({ node, ...props }) => (
                <img {...props} className="rounded-md my-4 max-h-96 mx-auto" alt={props.alt || 'Imagem do post'} />
              ),
              // Estilizau00e7u00e3o para outros elementos Markdown
              h1: ({ node, ...props }) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4" />,
              h2: ({ node, ...props }) => <h2 {...props} className="text-2xl font-bold mt-6 mb-3" />,
              h3: ({ node, ...props }) => <h3 {...props} className="text-xl font-bold mt-5 mb-2" />,
              p: ({ node, ...props }) => <p {...props} className="my-4" />,
              ul: ({ node, ...props }) => <ul {...props} className="list-disc pl-6 my-4" />,
              ol: ({ node, ...props }) => <ol {...props} className="list-decimal pl-6 my-4" />,
              li: ({ node, ...props }) => <li {...props} className="ml-2 mb-1" />,
              blockquote: ({ node, ...props }) => <blockquote {...props} className="border-l-4 border-primary pl-4 italic my-4" />,
              a: ({ node, ...props }) => <a {...props} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer" />,
              code: ({ node, className, ...props }) => {
                // Verifica se u00e9 um bloco de cu00f3digo inline ou bloco
                const match = /language-+(\w+)/.exec(className || '');
                const isInline = !match && !className?.includes('language-');
                
                return isInline ? (
                  <code {...props} className="bg-gray-100 px-1 py-0.5 rounded text-sm" />
                ) : (
                  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code {...props} className={className} />
                  </pre>
                );
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
          
          {/* Compartilhamento (opcional) */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-bold mb-3">Compartilhe este artigo</h3>
            <div className="flex gap-4">
              {/* Botu00f5es de compartilhamento podem ser adicionados aqui */}
              <button className="px-4 py-2 bg-primary rounded-md">Compartilhar</button>
            </div>
          </div>
          
          {/* Autor */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-bold mb-3">Sobre o Autor</h3>
            <p>
              {post.author} u00e9 nutricionista especializada em nutriu00e7u00e3o clu00ednica e esportiva.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA - Agende uma consulta */}
      <section className="bg-primary py-12 mt-12">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4 font-montserrat">Gostou deste conteu00fado?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Agende uma consulta personalizada e receba orientau00e7u00f5es nutricionais especu00edficas para suas necessidades e objetivos.
          </p>
          <Link 
            href="/contato" 
            className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors inline-block"
          >
            Agende sua Consulta
          </Link>
        </div>
      </section>
    </main>
  );
}
