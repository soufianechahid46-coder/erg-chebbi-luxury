'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6 }}>
      {children}
    </motion.div>
  );
}
