import Image from 'next/image';

export default function NossoEspaco() {
  // Array de imagens do espaço com caminhos corretos - fotos novas
  const imagens = [
    { 
      src: '/images/fotos_novas_interno_consultorio_dra_alessandra_bethaville_barueri_nutri_esportiva (1).jpeg', 
      alt: 'Sala de espera com poltronas verdes' 
    },
    { 
      src: '/images/fotos_novas_interno_consultorio_dra_alessandra_bethaville_barueri_nutri_esportiva (2).jpeg', 
      alt: 'Consultório com mesa e cadeiras' 
    },
    { 
      src: '/images/fotos_novas_interno_consultorio_dra_alessandra_bethaville_barueri_nutri_esportiva (3).jpeg', 
      alt: 'Mesa de trabalho com vista panorâmica' 
    },
    { 
      src: '/images/fotos_novas_interno_consultorio_dra_alessandra_bethaville_barueri_nutri_esportiva (4).jpeg', 
      alt: 'Área de atendimento com iluminação moderna' 
    },
    { 
      src: '/images/fotos_novas_interno_consultorio_dra_alessandra_bethaville_barueri_nutri_esportiva (5).jpeg', 
      alt: 'Espaço de recepção e espera' 
    },
    { 
      src: '/images/fotos_novas_interno_consultorio_dra_alessandra_bethaville_barueri_nutri_esportiva (6).jpeg', 
      alt: 'Sala de consulta completa' 
    },
    { 
      src: '/images/fotos_novas_interno_consultorio_dra_alessandra_bethaville_barueri_nutri_esportiva (7).jpeg', 
      alt: 'Ambiente de trabalho profissional' 
    },
    { 
      src: '/images/fotos_novas_interno_consultorio_dra_alessandra_bethaville_barueri_nutri_esportiva (8).jpeg', 
      alt: 'Vista geral do consultório' 
    },
    { 
      src: '/images/fachada_predio_atendimento_alessandra.png', 
      alt: 'Vista externa do prédio' 
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Nosso Espaço</h2>
          <p className="text-black/80 max-w-3xl mx-auto">
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
          <p className="text-lg text-black italic max-w-2xl mx-auto">
            &ldquo;Um ambiente confortável e acolhedor, projetado para proporcionar tranquilidade e privacidade 
            durante seu atendimento nutricional.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
} 