import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="page hero">
      <h1>Página não encontrada</h1>
      <p className="tagline">O caminho solicitado não existe.</p>
      <div style={{ marginTop: 20 }}>
        <Link to="/" className="button">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
