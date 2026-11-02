import React, { useState, useEffect } from 'react';

export default function IntroSplash() {
  const [visible, setVisible] = useState(() => {
    try {
      return !sessionStorage.getItem('jl_intro_shown');
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!visible) return;

    try {
      sessionStorage.setItem('jl_intro_shown', 'true');
    } catch {
      // sessionStorage indisponível
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="splash-overlay" aria-hidden="true">
      <svg
        className="splash-svg"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Moldura circular suave */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="var(--color-border)"
          strokeWidth="2"
        />
        {/* Letra J em Amarelo Vôlei */}
        <path
          d="M40 28V62C40 68.6274 34.6274 74 28 74H24"
          stroke="var(--color-accent)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Letra L em Azul / Branco */}
        <path
          d="M52 28V74H76"
          stroke="var(--color-text-primary)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

