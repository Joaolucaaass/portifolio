import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function ProjectCard({ project, wide, light }) {
  const ref = useRef(null);
  const calm = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const y = useTransform(scrollYProgress, [0, 1], [calm ? 0 : 36, 0]);

  return (
    <article ref={ref} className={`tile${wide ? ' wide' : ''}${light ? ' light' : ''}`}>
      <h3>
        <Link to={`/projetos/${project.slug}`} className="tile-link">{project.title}</Link>
      </h3>
      <p className="tile-sub">{project.subtitle}</p>
      <div className="row tile-actions">
        <span className="pill">Ver projeto</span>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="more">Abrir online</a>
      </div>
      <motion.img
        style={{ y }}
        src={project.coverImage}
        alt={`Tela do ${project.title}`}
        className="tile-shot"
        loading="lazy"
      />
    </article>
  );
}
