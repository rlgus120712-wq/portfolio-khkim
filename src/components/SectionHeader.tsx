'use client'

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  inView?: boolean;
  align?: 'center' | 'left';
}

/**
 * 모든 섹션이 공유하는 헤더.
 * eyebrow(작은 라벨) + gradient 타이틀 + 서브타이틀로 톤을 통일한다.
 */
const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  inView = true,
  align = 'center',
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-12 sm:mb-16 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="text-4xl sm:text-5xl font-bold gradient-text leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-gray-400 text-base sm:text-lg mt-4 ${
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
