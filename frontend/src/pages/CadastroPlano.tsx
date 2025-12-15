import { FormEvent, useState } from 'react';
import { patient as mockPatient } from '../data/mock';

type MealForm = { title: string; options: string };

const initialMeals: MealForm[] = mockPatient.meals.map((meal) => ({
  title: meal.title,
  options: meal.options.join('\n'),
}));

export function CadastroPlano() {
  const [meals, setMeals] = useState<MealForm[]>(initialMeals);

  const handleMealChange = (index: number, key: keyof MealForm, value: string) => {
    setMeals((prev) => prev.map((meal, i) => (i === index ? { ...meal, [key]: value } : meal)));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Simulação de envio
  };

  return (
    <div className="page">
      <h1>Cadastro de plano alimentar</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="meal-form-grid">
          {meals.map((meal, index) => (
            <div key={meal.title} className="form-card">
              <label className="form-group">
                <span>Título da refeição</span>
                <input
                  value={meal.title}
                  onChange={(e) => handleMealChange(index, 'title', e.target.value)}
                />
              </label>
              <label className="form-group">
                <span>Opções (uma por linha)</span>
                <textarea
                  value={meal.options}
                  onChange={(e) => handleMealChange(index, 'options', e.target.value)}
                  rows={5}
                />
              </label>
            </div>
          ))}
        </div>
        <div className="form-actions">
          <button type="submit" className="button">
            Salvar plano
          </button>
        </div>
      </form>
    </div>
  );
}
