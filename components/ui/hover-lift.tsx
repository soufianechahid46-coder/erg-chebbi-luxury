'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function HoverLift({ children }: { children: ReactNode }) {
  return <motion.div whileHover={{ y: -6 }}>{children}</motion.div>;
}
