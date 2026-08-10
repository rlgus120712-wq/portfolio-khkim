'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, ArrowUpRight, FileText } from 'lucide-react';
import SectionHeader from './SectionHeader';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rlgus120712@gmail.com',
    href: 'mailto:rlgus120712@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/rlgus120712-wq',
    href: 'https://github.com/rlgus120712-wq',
  },
  {
    icon: FileText,
    label: 'Notion',
    value: '이력서 · 상세 문서',
    href: 'https://rowan-cough-23f.notion.site/009caaa7bf3a49e6aff700714288b7db',
  },
];

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="contact"
      className="py-24 sm:py-28 px-4 sm:px-6 section-bg-even scroll-mt-20"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="협업이나 프로젝트 문의가 있으시면 언제든지 연락 주세요. 함께 멋진 무언가를 만들어가요 🚀"
          inView={inView}
        />

        <div className="grid sm:grid-cols-3 gap-4">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            const external = channel.href.startsWith('http');
            return (
              <motion.a
                key={channel.label}
                href={channel.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass card-hover rounded-2xl p-6 flex flex-col gap-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex p-3 rounded-xl bg-blue-500/15 text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{channel.label}</p>
                  <p className="text-white font-semibold break-all">
                    {channel.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-400 mt-16"
        >
          <p className="mb-2">
            © {new Date().getFullYear()} 김기현. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with <span className="text-red-500">❤️</span> using Next.js 14,
            TypeScript, Tailwind CSS &amp; Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
