import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

// 본문용 가변 폰트
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// 헤딩(디스플레이)용 폰트 - 모던 지오메트릭
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rlgus120712-wq.github.io/portfolio-khkim'),
  title: '김기현 | Frontend Developer Portfolio',
  description: 'Vue 3, React, TypeScript 전문 프론트엔드 개발자 김기현의 포트폴리오',
  keywords: ['Frontend Developer', 'React', 'Vue', 'TypeScript', 'Next.js', '김기현'],
  authors: [{ name: '김기현', url: 'https://github.com/rlgus120712-wq' }],
  openGraph: {
    title: '김기현 | Frontend Developer Portfolio',
    description: 'Vue 3, React, TypeScript 전문 프론트엔드 개발자',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://rlgus120712-wq.github.io/portfolio-khkim',
  },
}

// 접근성: 사용자 확대(zoom)를 막지 않도록 허용
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ko"
      className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        {/* 한글 모던 웹폰트 Pretendard (한글 텍스트 전반에 적용) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
