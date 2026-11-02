import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const links = [
  { to: '/', label: 'Projetos', end: true },
  { to: '/sobre', label: 'Sobre' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const mail = `mailto:${personalInfo.email}`;

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link to="/" className="brand" aria-label="João Lucas, página inicial">
          <svg viewBox="0 0 48 48" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 14v16a6 6 0 0 1-6 6" stroke="#F5C518" />
            <path d="M26 14v22h12" stroke="#f5f5f7" />
          </svg>
        </Link>

        <nav className="nav-links" aria-label="Principal">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>{l.label}</NavLink>
          ))}
        </nav>

        <a className="nav-cta" href={mail}>Falar comigo</a>

        <button
          className="burger"
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
        >
          <i /><i />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {[...links, { to: mail, label: 'Falar comigo', ext: true }].map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {l.ext ? <a href={l.to}>{l.label}</a> : <NavLink to={l.to} end={l.end}>{l.label}</NavLink>}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
