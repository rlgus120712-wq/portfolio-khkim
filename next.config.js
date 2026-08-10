/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true, // GitHub Pages는 이미지 최적화를 지원하지 않으므로 비활성화
  },
  // 모바일 최적화를 위한 설정
  poweredByHeader: false,
  compress: true,
  // 애니메이션 성능 최적화
  swcMinify: true,
  // 모바일에서 더 나은 성능을 위한 설정
  reactStrictMode: true,
  
  // GitHub Pages 배포를 위한 설정
  output: 'export',
  trailingSlash: true,
  distDir: 'out', // GitHub Actions와 일치하도록 수정
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-khkim' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-khkim' : '',
}

module.exports = nextConfig