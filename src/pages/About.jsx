import { useEffect } from 'react';
import ScrollStage from '../components/ScrollStage';
import Skills from '../components/Skills';
import { personalInfo as p } from '../data/content';

const facts = [
  { title: 'Formação', lead: p.education.course, body: p.education.description },
  { title: 'Experiência', body: p.experience },
  { title: 'Objetivo', body: p.objective },
];

export default function About() {
  useEffect(() => {
    document.title = 'Sobre mim | João Lucas Pardinho';
  }, []);

  return (
    <div className="wrap about">
      <h1>{p.name}</h1>
      <p className="about-sub">{p.role} em {p.city}, {p.state}.</p>

      <div className="about-grid">
        <ScrollStage tilt={0} from={0.9}>
          <div className="portrait">
            <img src={p.photo} alt={`Retrato de ${p.name}`} />
          </div>
        </ScrollStage>
        <div>
          <p className="lead">{p.presentation}</p>
          <div className="row" style={{ justifyContent: 'flex-start', marginTop: 28 }}>
            <a href={`mailto:${p.email}`} className="pill">Enviar mensagem</a>
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="more">GitHub</a>
          </div>
        </div>
      </div>

      <div className="facts">
        {facts.map((f) => (
          <div className="fact" key={f.title}>
            <h2>{f.title}</h2>
            <div>
              {f.lead && <p className="lead">{f.lead}</p>}
              <p>{f.body}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="sec-title" style={{ marginTop: 'clamp(72px,10vw,120px)' }}>Ferramentas</h2>
      <Skills />
    </div>
  );
}
