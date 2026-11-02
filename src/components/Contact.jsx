import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { personalInfo } from '../data/content';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // sem permissão de clipboard
    }
  };

  return (
    <section id="contato" className="contact">
      <div className="wrap">
        <h2>Vamos conversar.</h2>
        <p>{personalInfo.status}. Moro em {personalInfo.city}, {personalInfo.state}.</p>
        <a className="mail" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        <div className="row">
          <button className="pill ghost" onClick={copy}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? 'ok' : 'copy'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
              >
                {copied ? 'E-mail copiado' : 'Copiar e-mail'}
              </motion.span>
            </AnimatePresence>
          </button>
          <a className="more" href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}
