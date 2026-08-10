'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Users, Sparkles, Factory, Shield } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // 벤토 셀: 크기(span)를 제각각으로 두고 스탯/피처를 섞는다
  const cells = [
    {
      type: 'feature',
      icon: <Code2 className="w-9 h-9" />,
      title: '클린 코드 & 아키텍처',
      desc: 'TypeScript와 Feature-Sliced Design으로 확장·유지보수에 강한 구조를 설계합니다.',
      span: 'lg:col-span-2 lg:row-span-2',
      accent:
        'bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-purple-500/15 !border-blue-400/30',
    },
    {
      type: 'stat',
      value: '99%',
      label: '유지보수성 향상',
      span: '',
    },
    {
      type: 'stat',
      value: '40%',
      label: '초기 로딩 속도 개선',
      sub: 'Vite · TanStack Query',
      span: '',
    },
    {
      type: 'feature',
      icon: <Users className="w-7 h-7" />,
      title: '협업',
      desc: 'Jira · Confluence · GitHub 기반 10인+ 팀 협업',
      span: 'lg:col-span-2',
    },
    {
      type: 'feature',
      icon: <Sparkles className="w-7 h-7" />,
      title: '지속적 학습',
      desc: '매일 기술 블로그를 쓰며 최신 트렌드를 흡수합니다.',
      span: 'lg:row-span-2',
      accent:
        'bg-gradient-to-b from-purple-500/15 to-transparent !border-purple-400/25',
    },
    {
      type: 'stat',
      value: '8개',
      label: '스마트팩토리 공장 구축',
      icon: <Factory className="w-6 h-6" />,
      span: '',
    },
    {
      type: 'stat',
      value: '30%',
      label: '생산성 향상 기여',
      span: '',
    },
    {
      type: 'feature',
      icon: <Shield className="w-7 h-7" />,
      title: 'HACCP 인증',
      desc: '식품안전관리 시스템으로 국가 인증마크 획득',
      span: 'lg:col-span-2',
    },
    {
      type: 'stat',
      value: '⚡',
      label: '성능 최적화 우선주의',
      span: '',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 pt-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-gray-400 text-lg">매일의 기록 = 성장의 증거</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:auto-rows-[172px] grid-flow-dense">
          {cells.map((cell, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`glass !mb-0 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${cell.span} ${
                cell.accent ?? ''
              }`}
            >
              {cell.type === 'stat' ? (
                <>
                  <div className="text-blue-400/90">
                    {cell.icon ?? null}
                  </div>
                  <div>
                    <div className="gradient-text font-extrabold leading-none text-4xl sm:text-5xl mb-2">
                      {cell.value}
                    </div>
                    <p className="text-gray-200 text-sm font-medium leading-snug">
                      {cell.label}
                    </p>
                    {cell.sub && (
                      <p className="text-gray-400 text-xs mt-1">{cell.sub}</p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300 origin-left">
                    {cell.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-white text-lg sm:text-xl">
                      {cell.title}
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                      {cell.desc}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
