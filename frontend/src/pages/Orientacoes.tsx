import { patient } from '../data/mock';

export function Orientacoes() {
  return (
    <div className="page">
      <h1>Orientações nutricionais</h1>
      <div className="card">
        <div className="card-title">Para melhores resultados:</div>
        <ul className="list">
          {patient.guidelines.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
