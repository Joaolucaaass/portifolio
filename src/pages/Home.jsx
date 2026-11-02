import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollStage from '../components/ScrollStage';
import Statement from '../components/Statement';
import ProjectCard from '../components/ProjectCard';
import Skills from '../components/Skills';
import { personalInfo, projects } from '../data/content';

const list = { show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const statement =
  '';

export default function Home() {
  useEffect(() => {
    document.title = 'João Lucas Pardinho | Desenvolvedor Front-end & Estudante de TI';
  }, []);

  const goProjects = (e) => {
    e.preventDefault();
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const hero = projects[0];
  const shot = hero.gallery[2];

  return (
    <>
      <section className="hero">
        <motion.div className="wrap" variants={list} initial="hidden" animate="show">
          <motion.p variants={item} className="status">{personalInfo.status}</motion.p>
          <h1>
            <motion.span variants={item}>João Lucas</motion.span>
            <motion.span variants={item}>Pardinho</motion.span>
          </h1>
          <motion.p variants={item} className="hero-sub">{personalInfo.heroSubtitle}</motion.p>
          <motion.div variants={item} className="row">
            <a href="#projetos" onClick={goProjects} className="pill">Ver projetos</a>
            <a href={`mailto:${personalInfo.email}`} className="more">Falar comigo</a>
          </motion.div>
        </motion.div>

        <div className="wrap">
          <ScrollStage>
            <Link to={`/projetos/${hero.slug}`} className="frame" aria-label={`Abrir ${hero.title}`}>
              <div className="frame-bar">{new URL(hero.liveUrl).host}</div>
              <img src={shot.src} alt={shot.alt} />
            </Link>
          </ScrollStage>
        </div>
      </section>

      <Statement text={statement} />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 id="projetos" className="sec-title">Projetos</h2>
          <div className="tiles">
            <ProjectCard project={projects[0]} wide />
            <ProjectCard project={projects[1]} light />
            <ProjectCard project={projects[2]} />
          </div>
        </div>
      </section>

      <section className="sec paper">
        <div className="wrap">
          <h2>Com o que eu construo.</h2>
          <Skills />
        </div>
      </section>
    </>
  );
}
