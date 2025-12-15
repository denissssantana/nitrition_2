import { patient } from '../data/mock';

export function Plano() {
  return (
    <div className="page">
      <h1>Plano alimentar</h1>
      <div className="meal-grid">
        {patient.meals.map((meal) => (
          <div key={meal.title} className="card meal-card">
            <div className="card-title">{meal.title}</div>
            <p>Refeições que realiza:</p>
            <div className="divider" />
            {meal.options.map((option) => (
              <p key={option}>{option}</p>
            ))}
          </div>
        ))}
      </div>
      <p className="footnote">
        Precisa imprimir seu cardápio? Faça download do PDF na área de documentos quando estiver disponível.
      </p>
    </div>
  );
}
