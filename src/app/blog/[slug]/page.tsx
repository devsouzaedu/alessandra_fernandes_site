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
    <main className="pb-16 bg-white">
      {/* Header - Imagem destacada */}
      <div className="relative w-full h-64 md:h-[400px] lg:h-[500px]">
        <Image
          src={featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-primary/80 to-transparent flex items-end">
          <div className="container p-6 md:p-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white font-montserrat mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="text-white flex items-center gap-4 font-medium">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>Por {post.author}</span>
              {post.tags && post.tags.length > 0 && (
                <>
                  <span>•</span>
                  <span className="bg-green-primary text-white px-3 py-1 rounded-full text-sm">{post.tags[0]}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Conteu00fado do post */}
      <div className="container py-10">
        <div className="max-w-4xl mx-auto">
          {/* Link para voltar */}
          <Link href="/blog" className="inline-flex items-center text-green-primary hover:text-green-secondary transition-colors mb-6 font-medium">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Voltar para o blog
          </Link>
          
          {/* Tags - movidas para o header superior, exibindo apenas para mobile */}
          {post.tags && post.tags.length > 1 && (
            <div className="mb-8 flex gap-2 flex-wrap md:hidden">
              {post.tags.map((tag, index) => (
                index > 0 && <span 
                  key={tag} 
                  className="px-3 py-1 bg-green-light text-green-primary rounded-full text-sm font-medium border border-green-secondary/20"
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
                <img {...props} className="rounded-lg my-6 max-h-[500px] mx-auto shadow-sm" alt={props.alt || 'Imagem do post'} />
              ),
              // Estilizau00e7u00e3o para outros elementos Markdown
              h1: ({ node, ...props }) => <h1 {...props} className="text-3xl font-bold mt-10 mb-4 text-green-primary font-montserrat" />,
              h2: ({ node, ...props }) => <h2 {...props} className="text-2xl font-bold mt-8 mb-4 text-green-primary font-montserrat border-b border-gray-100 pb-2" />,
              h3: ({ node, ...props }) => <h3 {...props} className="text-xl font-bold mt-6 mb-3 text-green-primary font-montserrat" />,
              p: ({ node, ...props }) => <p {...props} className="my-4 text-gray-700 leading-relaxed" />,
              ul: ({ node, ...props }) => <ul {...props} className="list-disc pl-6 my-5 text-gray-700 space-y-2" />,
              ol: ({ node, ...props }) => <ol {...props} className="list-decimal pl-6 my-5 text-gray-700 space-y-2" />,
              li: ({ node, ...props }) => <li {...props} className="ml-2 mb-1" />,
              blockquote: ({ node, ...props }) => <blockquote {...props} className="border-l-4 border-green-primary pl-6 py-2 italic my-6 bg-gray-50 rounded-r-lg text-gray-700" />,
              a: ({ node, ...props }) => <a {...props} className="text-green-primary hover:text-green-secondary underline hover:no-underline transition-colors" target="_blank" rel="noopener noreferrer" />,
              code: ({ node, className, ...props }) => {
                // Verifica se u00e9 um bloco de cu00f3digo inline ou bloco
                const match = /language-+(\w+)/.exec(className || '');
                const isInline = !match && !className?.includes('language-');
                
                return isInline ? (
                  <code {...props} className="bg-green-light px-2 py-0.5 rounded text-sm font-mono text-green-primary" />
                ) : (
                  <pre className="bg-green-light/30 p-4 rounded-lg overflow-x-auto border border-green-secondary/20 my-6 shadow-sm">
                    <code {...props} className={`${className} font-mono text-gray-800`} />
                  </pre>
                );
              },
              strong: ({ node, ...props }) => <strong {...props} className="font-semibold text-green-primary" />,
              em: ({ node, ...props }) => <em {...props} className="text-green-primary/80 italic" />
            }}
          >
            {post.content}
          </ReactMarkdown>
          
          {/* Compartilhamento */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-bold mb-4 text-green-primary font-montserrat">Compartilhe este artigo</h3>
            <div className="flex gap-3">
              <button className="p-3 bg-green-light text-green-primary rounded-full hover:bg-green-secondary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="p-3 bg-green-light text-green-primary rounded-full hover:bg-green-secondary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="p-3 bg-green-light text-green-primary rounded-full hover:bg-green-secondary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Autor */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-bold mb-4 text-green-primary font-montserrat">Sobre o Autor</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-light flex items-center justify-center text-green-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-green-primary">{post.author}</h4>
                <p className="text-gray-600 text-sm">
                  Nutricionista especializada em nutrição clínica e esportiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA - Agende uma consulta */}
      <section className="bg-white py-16 border-t border-gray-100 mt-12">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-green-light rounded-xl p-8 md:p-12 shadow-sm border border-green-secondary/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2 font-montserrat text-green-primary">Gostou deste conteúdo?</h2>
              <div className="w-16 h-1 bg-green-primary mx-auto mb-6"></div>
              <p className="mb-6 max-w-2xl mx-auto text-gray-700">
                Agende uma consulta personalizada e receba orientações nutricionais específicas para suas necessidades e objetivos.
              </p>
              <Link 
                href="/contato" 
                className="bg-green-primary text-white px-6 py-3 rounded-md font-medium hover:bg-green-secondary transition-colors inline-flex items-center shadow-sm"
              >
                Agende sua Consulta
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Posts relacionados - opcional para futuras implementações
      <section className="bg-white py-12">
        <div className="container">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 font-montserrat">Posts relacionados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            Posts relacionados aqui
          </div>
        </div>
      </section>
      */}
    </main>
  );
}
