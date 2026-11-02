import React, { useEffect, useRef } from 'react';

export default function Lightbox({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  const touchStartX = useRef(null);
  const currentImage = images[currentIndex] || {};

  // Controles de teclado: ESC para fechar, Setas para navegar
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  // Controles de gesto de toque (Swipe no celular)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 45) {
      if (diffX > 0) {
        onNext(); // swipe para esquerda -> próxima imagem
      } else {
        onPrev(); // swipe para direita -> imagem anterior
      }
    }
    touchStartX.current = null;
  };

  if (!isOpen) return null;

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagem ampliada"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lightbox-topbar">
        <span className="lightbox-counter">
          {currentIndex + 1} de {images.length}
        </span>
        <button
          onClick={onClose}
          className="lightbox-close-btn"
          aria-label="Fechar visualizador"
          title="Fechar (ESC)"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div
        className="lightbox-stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.length > 1 && (
          <button
            onClick={onPrev}
            className="lightbox-nav-btn prev"
            aria-label="Imagem anterior"
            title="Anterior (Seta esquerda)"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}

        <img
          key={currentImage.src}
          src={currentImage.src}
          alt={currentImage.alt || 'Imagem do projeto'}
          className="lightbox-stage-img"
        />

        {images.length > 1 && (
          <button
            onClick={onNext}
            className="lightbox-nav-btn next"
            aria-label="Próxima imagem"
            title="Próxima (Seta direita)"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}
      </div>

      <div className="lightbox-bottom-info">
        <p>{currentImage.caption || currentImage.alt}</p>
      </div>
    </div>
  );
}

