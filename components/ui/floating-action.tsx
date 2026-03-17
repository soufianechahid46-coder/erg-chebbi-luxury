'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function FloatingAction({ children }: { children: ReactNode }) {
  return <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>{children}</motion.div>;
}
