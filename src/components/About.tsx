'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Users, Sparkles, Factory, Shield } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const features = [
    {
      icon: <Code2 className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: '클린 코드',
      description: 'TypeScript와 Feature-Sliced Design으로 유지보수성 99% 향상',
    },
    {
      icon: <Rocket className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: '성능 최적화',
      description: 'Vite + TanStack Query로 초기 로딩 속도 40% 개선',
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: '협업',
      description: 'Jira + Confluence + GitHub으로 10인+ 팀 효율 증대',
    },
    {
      icon: <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: '지속적 학습',
      description: '매일 기술 블로그 작성 및 최신 트렌드 습득',
    },
    {
      icon: <Factory className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: '스마트팩토리',
      description: '8개 공장 MES 구축, 생산성 평균 30% 향상 기여',
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'HACCP 인증',
      description: '식품안전관리 시스템으로 국가 인증마크 획득',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 pt-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* About Me 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-gray-400 text-lg">
            매일의 기록 = 성장의 증거
          </p>
        </motion.div>

        {/* Bento Grid - 셀 크기를 다양화한 비대칭 레이아웃 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {features.map((feature, index) => {
            // 벤토 배치: 0·1은 넓게(3칸), 2·3·4는 중간(2칸), 5는 풀폭(6칸)
            const span = [
              'lg:col-span-3',
              'lg:col-span-3',
              'lg:col-span-2',
              'lg:col-span-2',
              'lg:col-span-2',
              'lg:col-span-6',
            ][index] ?? 'lg:col-span-2';
            const featured = index === 0;
            const fullWidth = index === 5;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`glass rounded-2xl p-6 sm:p-7 transition-all duration-300 group hover:-translate-y-1 ${span} ${
                  featured
                    ? 'bg-gradient-to-br from-blue-500/15 via-blue-500/5 to-purple-500/10 !border-blue-400/30'
                    : ''
                } ${fullWidth ? 'flex flex-col sm:flex-row sm:items-center sm:gap-6' : ''}`}
              >
                <div
                  className={`text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300 ${
                    fullWidth ? 'sm:mb-0 shrink-0' : ''
                  } ${featured ? 'scale-110 origin-left' : ''}`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3
                    className={`font-bold mb-2 sm:mb-3 text-white dark:text-white ${
                      featured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 dark:text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                    {feature.description}
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