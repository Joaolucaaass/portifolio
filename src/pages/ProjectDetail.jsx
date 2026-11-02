import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ScrollStage from '../components/ScrollStage';
import Lightbox from '../components/Lightbox';
import NotFound from './NotFound';
import { projects } from '../data/content';

export default function ProjectDetail() {
  const { slug } = useParams();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const i = projects.findIndex((p) => p.slug === slug);
  const project = projects[i];

  useEffect(() => {
    if (project) document.title = `${project.title} | João Lucas Pardinho`;
  }, [project]);

  if (!project) return <NotFound />;

  const next = projects[(i + 1) % projects.length];
  const total = project.gallery.length;
  const show = (n) => { setIndex(n); setOpen(true); };

  const specs = [
    ['Contexto', project.clientOrContext],
    ['Categoria', project.category],
    ['Front-end', project.techStack.frontend],
    ['Back-end', project.techStack.backend],
    ['Banco de dados', project.techStack.database],
  ];

  return (
    <div style={{ '--accent': project.accentColor, '--on-accent': project.accentText }}>
      <header className="wrap pd">
        <Link to="/" className="more back">Projetos</Link>
        <h1>{project.title}</h1>
        <p className="pd-sub">{project.subtitle}</p>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pill accent">
          Ver projeto online
        </a>
      </header>

      <div className="wrap">
        <ScrollStage>
          <button className="frame" onClick={() => show(0)} aria-label="Ampliar imagem de capa">
            <div className="frame-bar">{new URL(project.liveUrl).host}</div>
            <img src={project.coverImage} alt={`Capa do ${project.title}`} />
          </button>
        </ScrollStage>
      </div>

      <section className="wrap pd-cols">
        <p className="lead">{project.fullDescription}</p>
        <dl className="specs">
          {specs.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </section>

      <ul className="rail" aria-label="Telas do projeto">
        {project.gallery.map((g, n) => (
          <li key={g.src}>
            <button onClick={() => show(n)} aria-label={`Ampliar: ${g.alt}`}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </button>
            <p>{g.caption}</p>
          </li>
        ))}
      </ul>

      <div className="wrap">
        <Link to={`/projetos/${next.slug}`} className="next">
          <span>Próximo projeto</span>
          <h2>{next.title}</h2>
          <span className="more">{next.category}</span>
        </Link>
      </div>

      <Lightbox
        isOpen={open}
        images={project.gallery}
        currentIndex={index}
        onClose={() => setOpen(false)}
        onPrev={() => setIndex((n) => (n > 0 ? n - 1 : total - 1))}
        onNext={() => setIndex((n) => (n < total - 1 ? n + 1 : 0))}
      />
    </div>
  );
}
