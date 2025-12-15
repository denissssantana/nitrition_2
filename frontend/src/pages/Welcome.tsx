import { Link } from 'react-router-dom';
import { patient } from '../data/mock';

export function Welcome() {
  return (
    <div className="page hero">
      <h1>Seja bem-vindo</h1>
      <h2>{patient.name}</h2>
      <p className="tagline">Seu plano nutricional e contatos em um só lugar.</p>
      <div style={{ marginTop: 24 }}>
        <Link to="/menu" className="button">
          Entrar
        </Link>
      </div>
      <div className="badge-grid">
        <div className="badge">Objetivo: {patient.goal}</div>
        <div className="badge">Altura: {patient.height}</div>
        <div className="badge">Peso: {patient.weight}</div>
      </div>
    </div>
  );
}
