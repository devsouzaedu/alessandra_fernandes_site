import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSupabaseAdmin } from "@/lib/supabaseClient";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Define a interface para os posts do blog
interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: string;
  updated_at: string;
  published: boolean;
  slug: string;
  tags: string[];
  coverImage?: string; // URL da imagem de capa (opcional)
}

// Formata a data para o formato brasileiro
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return format(date, "dd 'de' MMMM, yyyy", { locale: ptBR });
}

// Extrai a categoria do post a partir das tags
function getPostCategory(tags: string[]): string {
  if (!tags || tags.length === 0) return "Nutrição";
  return tags[0];
}

// Extrai um resumo do conteúdo do post (primeiros 150 caracteres)
function getPostExcerpt(content: string): string {
  const plainText = content.replace(/<[^>]*>/g, '');
  return plainText.length > 150 ? plainText.substring(0, 150) + "..." : plainText;
}

// Seleciona uma imagem com base na categoria do post
function getPostImage(tags: string[]): string {
  const category = getPostCategory(tags).toLowerCase();
  
  // Mapeamento de categorias para imagens
  const imageMap: Record<string, string> = {
    "hipertrofia": "/images/treino de força.jpg",
    "emagrecimento": "/images/mulher com fita metrica ao redor da cintura.jpg",
    "performance": "/images/corrida.jpg",
    "diabetes": "/images/fita metrica.jpg",
    "alimentação": "/images/i-yunmai-5jctAMjz21A-unsplash.jpg",
    "ciclismo": "/images/Ciclismo.jpg"
  };
  
  // Procura por correspondências parciais nas categorias
  for (const [key, value] of Object.entries(imageMap)) {
    if (category.includes(key)) {
      return value;
    }
  }
  
  // Imagem padrão caso não encontre correspondência
  return "/images/i-yunmai-5jctAMjz21A-unsplash.jpg";
}

// Busca os posts publicados do Supabase
async function fetchPosts() {
  const supabase = getSupabaseAdmin();
  
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
  
  return posts as Post[];
}

export default async function Blog() {
  // Busca os posts dinâmicos do Supabase
  const posts = await fetchPosts();

  return (
    <main>
      {/* Header */}
      <section className="bg-white py-16 md:py-20 border-b">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-gray-900">Blog de Nutrição</h1>
            <div className="w-24 h-1 bg-green-primary mx-auto mb-6"></div>
            <p className="text-lg mb-0 text-gray-700">
              Artigos, dicas e informações sobre nutrição, saúde e bem-estar para ajudar você 
              a fazer escolhas alimentares mais conscientes.
            </p>
          </div>
        </div>
      </section>

      {/* Posts em Destaque */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center font-montserrat">Artigos Recentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length === 0 ? (
              <div className="col-span-3 text-center py-12">
                <p>Nenhum post encontrado. Novos artigos serão publicados em breve!</p>
              </div>
            ) : (
              posts.map((post) => {
                const category = getPostCategory(post.tags);
                const excerpt = getPostExcerpt(post.content);
                // Usa a imagem de capa personalizada quando dispoñível, ou fallback para imagem baseada em tags
                const image = post.coverImage || getPostImage(post.tags);
                const date = formatDate(post.created_at);
                
                return (
                  <article key={post.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative h-56 w-full">
                      <Image
                        src={image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-green-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-end items-center mb-3">
                        <span className="text-xs text-gray-500 font-medium">{date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-montserrat text-gray-900 line-clamp-2 hover:text-green-primary transition-colors">{post.title}</h3>
                      <p className="text-gray-600 mb-5 line-clamp-3">{excerpt}</p>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-green-primary font-medium hover:text-green-secondary transition-colors"
                      >
                        Ler mais 
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Inscrição Newsletter */}
      <section className="py-16 bg-gray-50 border-y">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-900">Receba Conteúdo Exclusivo</h2>
          <div className="w-16 h-1 bg-green-primary mx-auto mb-6"></div>
          <p className="mb-8 text-gray-700">
            Inscreva-se na nossa newsletter e receba dicas, receitas e artigos exclusivos 
            diretamente no seu email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor email" 
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-primary shadow-sm"
            />
            <button className="bg-green-primary text-white px-6 py-3 rounded-md font-medium hover:bg-green-secondary transition-colors shadow-sm">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 text-center font-montserrat text-gray-900">Categorias</h2>
          <div className="w-16 h-1 bg-green-primary mx-auto mb-12"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link 
              href="/blog/categoria/hipertrofia"
              className="bg-white p-6 rounded-lg text-center border border-gray-100 shadow-sm hover:shadow-md hover:border-green-primary transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-montserrat text-gray-900">Hipertrofia</h3>
              <p className="text-sm text-gray-600">Nutrição para ganho de massa muscular</p>
            </Link>
            
            <Link 
              href="/blog/categoria/emagrecimento"
              className="bg-white p-6 rounded-lg text-center border border-gray-100 shadow-sm hover:shadow-md hover:border-green-primary transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-montserrat text-gray-900">Emagrecimento</h3>
              <p className="text-sm text-gray-600">Estratégias para perda de peso saudável</p>
            </Link>
            
            <Link 
              href="/blog/categoria/performance"
              className="bg-white p-6 rounded-lg text-center border border-gray-100 shadow-sm hover:shadow-md hover:border-green-primary transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-montserrat text-gray-900">Performance</h3>
              <p className="text-sm text-gray-600">Nutrição para atletas e atividades físicas</p>
            </Link>
            
            <Link 
              href="/blog/categoria/doencas-cronicas"
              className="bg-white p-6 rounded-lg text-center border border-gray-100 shadow-sm hover:shadow-md hover:border-green-primary transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-montserrat text-gray-900">Doenças Crônicas</h3>
              <p className="text-sm text-gray-600">Alimentação para condições específicas</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t">
        <div className="container text-center max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 font-montserrat text-gray-900">Tem dúvidas específicas sobre nutrição?</h2>
            <div className="w-16 h-1 bg-green-primary mx-auto mb-6"></div>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-700">
              Agende uma consulta personalizada e receba orientações nutricionais adequadas 
              às suas necessidades e objetivos.
            </p>
            <Link 
              href="/contato" 
              className="inline-flex items-center px-6 py-3 rounded-md font-medium text-white bg-green-primary hover:bg-green-secondary transition-colors shadow-sm"
            >
              Agende sua Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 