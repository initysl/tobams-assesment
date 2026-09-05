'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Fades a section up as it scrolls into view, once. Marketing pages only —
 * this is the sort of motion that reads as polish on a first visit and as
 * friction on a tool someone opens daily.
 *
 * Animates `opacity` and a full `transform` string so the work stays on the
 * GPU; under reduced motion the translate is dropped and only the fade runs.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, shown: { opacity: 1 } }
    : {
        hidden: { opacity: 0, transform: 'translateY(24px)' },
        shown: { opacity: 1, transform: 'translateY(0px)' },
      };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial='hidden'
      whileInView='shown'
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
