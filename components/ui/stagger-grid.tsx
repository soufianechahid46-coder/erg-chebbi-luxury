'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function StaggerGrid({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } }
      }}
    >
      {children}
    </motion.div>
  );
}
