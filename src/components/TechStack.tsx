'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import { portfolioTechStack } from '../data/portfolioTech';
import SectionHeader from './SectionHeader';

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-24 sm:py-28 px-4 sm:px-6 section-bg-even scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Built With"
          title="Portfolio Tech Stack"
          subtitle="이 포트폴리오 웹사이트 구축에 사용된 기술들"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioTechStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass card-hover p-6 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <tech.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{tech.description}</p>
                    {tech.features && (
                      <ul className="space-y-1">
                        {tech.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-500">
                            <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 glass p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why These Technologies?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary-400 text-sm">⚡ 성능 최적화</h4>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li>• Next.js App Router로 Server-Side Rendering</li>
                  <li>• 이미지 자동 최적화 및 Lazy Loading</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary-400 text-sm">🚀 자동 배포</h4>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li>• GitHub Pages를 통한 CI/CD 자동화</li>
                  <li>• Git Push 즉시 프로덕션 배포</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary-400 text-sm">🔍 SEO 최적화</h4>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li>• 메타데이터 자동 생성</li>
                  <li>• 검색 엔진 크롤링 최적화</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary-400 text-sm">🎨 현대적 UI</h4>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li>• Tailwind CSS로 빠른 스타일링</li>
                  <li>• Framer Motion 애니메이션</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800">
              <a
                href="https://github.com/rlgus120712-wq/portfolio-khkim"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                소스 코드 보기
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}