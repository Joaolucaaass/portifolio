import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

function Word({ progress, range, children }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}

export default function Statement({ text }) {
  const ref = useRef(null);
  const calm = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] });
  const words = text.split(' ');

  if (calm) return <p className="statement">{text}</p>;

  return (
    <p ref={ref} className="statement">
      {words.map((w, i) => {
        const s = i / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[s, Math.min(1, s + 2 / words.length)]}>
            {w}
          </Word>
        );
      })}
    </p>
  );
}
