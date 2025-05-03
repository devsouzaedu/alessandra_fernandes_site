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
      <section className="bg-primary py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">Blog de Nutrição</h1>
            <p className="text-lg mb-0">
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
                const image = getPostImage(post.tags);
                const date = formatDate(post.created_at);
                
                return (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-48 w-full">
                      <Image
                        src={image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-accent">{category}</span>
                        <span className="text-xs text-gray-500">{date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-montserrat">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{excerpt}</p>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-accent font-medium hover:underline"
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
      <section className="py-12 bg-primary">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 font-montserrat">Receba Conteúdo Exclusivo</h2>
          <p className="mb-6">
            Inscreva-se na nossa newsletter e receba dicas, receitas e artigos exclusivos 
            diretamente no seu email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor email" 
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center font-montserrat">Categorias</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link 
              href="/blog/categoria/hipertrofia"
              className="bg-primary p-6 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold font-montserrat">Hipertrofia</h3>
              <p className="text-sm">Nutrição para ganho de massa muscular</p>
            </Link>
            
            <Link 
              href="/blog/categoria/emagrecimento"
              className="bg-primary p-6 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold font-montserrat">Emagrecimento</h3>
              <p className="text-sm">Estratégias para perda de peso saudável</p>
            </Link>
            
            <Link 
              href="/blog/categoria/performance"
              className="bg-primary p-6 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold font-montserrat">Performance</h3>
              <p className="text-sm">Nutrição para atletas e atividades físicas</p>
            </Link>
            
            <Link 
              href="/blog/categoria/doencas-cronicas"
              className="bg-primary p-6 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold font-montserrat">Doenças Crônicas</h3>
              <p className="text-sm">Alimentação para condições específicas</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Tem dúvidas específicas sobre nutrição?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Agende uma consulta personalizada e receba orientações nutricionais adequadas 
            às suas necessidades e objetivos.
          </p>
          <Link 
            href="/contato" 
            className="btn btn-secondary"
          >
            Agende sua Consulta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
} 