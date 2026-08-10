'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Users, Sparkles, Factory, Shield } from 'lucide-react';
import SectionHeader from './SectionHeader';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // 원본 6개 항목을 문구 그대로 유지하면서 크기만 제각각인 벤토로 배치.
  // DOM 순서가 곧 4×3 타일링(빈칸 없음)이 되도록 정렬한다.
  const cells = [
    {
      icon: Code2,
      title: '클린 코드',
      desc: 'TypeScript와 Feature-Sliced Design으로 유지보수성 99% 향상',
      span: 'lg:col-span-2 lg:row-span-2',
      featured: true,
      accent:
        'bg-gradient-to-br from-blue-500/20 via-blue-500/[0.06] to-purple-500/15 border-blue-400/30',
    },
    {
      icon: Sparkles,
      title: '지속적 학습',
      desc: '매일 기술 블로그 작성 및 최신 트렌드 습득',
      span: 'lg:row-span-2',
      accent:
        'bg-gradient-to-b from-purple-500/[0.16] to-transparent border-purple-400/25',
    },
    {
      icon: Rocket,
      title: '성능 최적화',
      desc: 'Vite + TanStack Query로 초기 로딩 속도 40% 개선',
      span: '',
    },
    {
      icon: Shield,
      title: 'HACCP 인증',
      desc: '식품안전관리 시스템으로 국가 인증마크 획득',
      span: '',
    },
    {
      icon: Users,
      title: '협업',
      desc: 'Jira + Confluence + GitHub으로 10인+ 팀 효율 증대',
      span: 'lg:col-span-2',
    },
    {
      icon: Factory,
      title: '스마트팩토리',
      desc: '8개 공장 MES 구축, 생산성 평균 30% 향상 기여',
      span: 'lg:col-span-2',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-28 px-4 sm:px-6 scroll-mt-20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="개발자 김기현"
          subtitle="매일의 기록 = 성장의 증거"
          inView={inView}
        />

        {/* Bento Grid — 4×3 타일 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[190px]">
          {cells.map((cell, index) => {
            const Icon = cell.icon;
            return (
              <motion.div
                key={cell.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className={`glass card-hover rounded-2xl p-6 flex flex-col justify-between group ${
                  cell.span
                } ${cell.accent ?? ''}`}
              >
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300 origin-left">
                  <Icon className={cell.featured ? 'w-11 h-11' : 'w-8 h-8'} />
                </div>
                <div>
                  <h3
                    className={`font-bold text-white mb-2 ${
                      cell.featured ? 'text-2xl sm:text-3xl' : 'text-lg'
                    }`}
                  >
                    {cell.title}
                  </h3>
                  <p
                    className={`text-gray-300 leading-relaxed ${
                      cell.featured ? 'text-base sm:text-lg' : 'text-sm'
                    }`}
                  >
                    {cell.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
