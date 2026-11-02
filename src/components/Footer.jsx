import { Link } from 'react-router-dom';
import { personalInfo } from '../data/content';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <p>{personalInfo.name}. {personalInfo.location}.</p>
        <nav aria-label="Rodapé">
          <Link to="/">Projetos</Link>
          <Link to="/sobre">Sobre</Link>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${personalInfo.email}`}>E-mail</a>
        </nav>
      </div>
    </footer>
  );
}
