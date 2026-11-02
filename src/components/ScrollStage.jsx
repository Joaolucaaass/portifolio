import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

// o filho começa inclinado e menor e assenta conforme entra na tela
export default function ScrollStage({ children, tilt = 14, from = 0.88, className = '' }) {
  const ref = useRef(null);
  const calm = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.95', 'start 0.25'] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [calm ? 0 : tilt, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [calm ? 1 : from, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [calm ? 0 : 40, 0]);

  return (
    <div ref={ref} className={`stage ${className}`}>
      <motion.div style={{ rotateX, scale, y, transformOrigin: '50% 100%' }}>{children}</motion.div>
    </div>
  );
}
