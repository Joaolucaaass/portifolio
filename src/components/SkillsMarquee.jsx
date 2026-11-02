import React from 'react';
import { personalInfo } from '../data/content';

export default function SkillsMarquee() {
  const skillsList = personalInfo.skills;
  // Duplica a lista para garantir fluxo contínuo e perfeito
  const displayList = [...skillsList, ...skillsList, ...skillsList];

  return (
    <div className="skills-marquee-container" aria-label="Tecnologias e habilidades">
      <div className="skills-marquee-track">
        {displayList.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              margin: '0 24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
            }}
          >
            <span style={{ color: 'var(--color-accent)' }}>✦</span>
            <span>{skill.name}</span>
            <span
              style={{
                fontSize: '0.7rem',
                color: 'var(--color-text-muted)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '2px 8px',
                borderRadius: '999px',
              }}
            >
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

