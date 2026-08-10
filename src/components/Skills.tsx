'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/skills';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="skills"
      className="py-24 sm:py-28 px-4 sm:px-6 section-bg-even scroll-mt-20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Skills"
          subtitle="하나하나 빠짐없이 갖춘 기술 스택"
          inView={inView}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass card-hover rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-blue-400">
                {skillCategory.category}
              </h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white dark:text-white font-semibold">
                        {skill.name}
                      </span>
                      <span className="text-gray-200 dark:text-gray-200 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;