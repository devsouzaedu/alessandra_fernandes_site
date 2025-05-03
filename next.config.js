/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'plus.unsplash.com',
      'picsum.photos',
      'imgur.com',
      'i.imgur.com',
      'firebasestorage.googleapis.com',
      'storage.googleapis.com',
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'cloudinary.com',
      'images.pexels.com',
      'via.placeholder.com',
      'placekitten.com',
      'placehold.co',
      'placeimg.com',
      'loremflickr.com',
      'amazonaws.com',
      's3.amazonaws.com',
      'myawsbucket.amazonaws.com'
    ], // Permitindo domínios comuns para imagens
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permitir qualquer hostname HTTPS (use apenas em ambiente de desenvolvimento)
      },
    ],
  },
  // Configuração adicionais podem ser incluídas aqui
};

module.exports = nextConfig;