import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Nutrição para Hipertrofia: Como Otimizar seus Ganhos Musculares",
    excerpt: "Descubra as estratégias nutricionais mais eficazes para maximizar o ganho de massa muscular e melhorar seus resultados de treino.",
    image: "/images/treino de força.jpg",
    date: "10 de Abril, 2025",
    category: "Hipertrofia"
  },
  {
    id: 2,
    title: "Emagrecimento Saudável: Mitos e Verdades sobre Dietas",
    excerpt: "Entenda por que dietas restritivas não funcionam a longo prazo e como estabelecer uma relação saudável com a alimentação para emagrecer de forma sustentável.",
    image: "/images/mulher com fita metrica ao redor da cintura.jpg",
    date: "02 de Abril, 2025",
    category: "Emagrecimento"
  },
  {
    id: 3,
    title: "Nutrição para Corredores: Como Alimentar-se para Melhorar sua Performance",
    excerpt: "Guia completo sobre como estruturar sua alimentação antes, durante e após os treinos de corrida para melhorar seu desempenho e recuperação.",
    image: "/images/corrida.jpg",
    date: "25 de Março, 2025",
    category: "Performance"
  },
  {
    id: 4,
    title: "Diabetes e Alimentação: Como Controlar a Glicemia Através da Nutrição",
    excerpt: "Aprenda estratégias nutricionais eficazes para manter os níveis de glicose no sangue estáveis e melhorar sua qualidade de vida com diabetes.",
    image: "/images/fita metrica.jpg",
    date: "18 de Março, 2025",
    category: "Doenças Crônicas"
  },
  {
    id: 5,
    title: "Proteínas Vegetais: Alternativas para uma Alimentação Equilibrada",
    excerpt: "Conheça as principais fontes de proteínas vegetais e como incorporá-las na sua alimentação, seja você vegetariano ou não.",
    image: "/images/i-yunmai-5jctAMjz21A-unsplash.jpg",
    date: "10 de Março, 2025",
    category: "Alimentação Saudável"
  },
  {
    id: 6,
    title: "Nutrição para Ciclistas: Estratégias para Pedalar Mais e Melhor",
    excerpt: "Dicas práticas para otimizar sua alimentação antes, durante e após os treinos de ciclismo, maximizando seu desempenho e recuperação.",
    image: "/images/Ciclismo.jpg",
    date: "01 de Março, 2025",
    category: "Performance"
  }
];

export default function Blog() {
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
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-accent">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-montserrat">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-accent font-medium hover:underline"
                  >
                    Ler mais 
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
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