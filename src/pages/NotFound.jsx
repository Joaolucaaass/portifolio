import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Página não encontrada | João Lucas Pardinho';
  }, []);

  return (
    <div className="wrap nf">
      <h1>404</h1>
      <p>Essa página não existe ou mudou de endereço.</p>
      <Link to="/" className="pill">Voltar ao início</Link>
    </div>
  );
}
