import Image from 'next/image';

export default function NossoEspaco() {
  // Array de imagens do espaço - substitua pelos nomes reais das imagens quando disponíveis
  const imagens = [
    { src: '/images/consultorio_1.jpg', alt: 'Recepção do consultório' },
    { src: '/images/consultorio_2.jpg', alt: 'Sala de atendimento' },
    { src: '/images/consultorio_3.jpg', alt: 'Área de medição' },
    { src: '/images/consultorio_4.jpg', alt: 'Vista externa do prédio' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">Nosso Espaço</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conheça o ambiente acolhedor onde realizamos nossos atendimentos
          </p>
        </div>
        
        {/* Grid de imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {imagens.map((imagem, index) => (
            <div 
              key={index} 
              className={`relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md animate-slideUp delay-${index + 1}00`}
            >
              <Image
                src={imagem.src}
                alt={imagem.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        {/* Frase destacada */}
        <div className="mt-12 text-center animate-fadeIn">
          <p className="text-lg text-gray-700 italic max-w-2xl mx-auto">
            &ldquo;Um ambiente confortável e acolhedor, projetado para proporcionar tranquilidade e privacidade 
            durante seu atendimento nutricional.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
} 