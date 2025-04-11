/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Adicione domínios externos se necessário
    // domains: ['exemplo.com'],
  },
  // Configuração adicionais podem ser incluídas aqui
};

module.exports = nextConfig; 