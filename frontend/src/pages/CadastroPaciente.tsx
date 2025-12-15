import { FormEvent, useState } from 'react';
import { patient as mockPatient } from '../data/mock';

export function CadastroPaciente() {
  const [form, setForm] = useState({
    name: mockPatient.name,
    age: String(mockPatient.age),
    gender: mockPatient.gender,
    goal: mockPatient.goal,
    height: mockPatient.height,
    weight: mockPatient.weight,
    bmi: mockPatient.bmi,
    bmiLabel: mockPatient.bmiLabel,
    warning: mockPatient.warning,
    comorbidities: mockPatient.comorbidities.join('\n'),
    practice: mockPatient.activity.practice,
    modality: mockPatient.activity.modality,
    frequency: mockPatient.activity.frequency,
    appointments: mockPatient.appointments.map((a) => `${a.title} - ${a.date}`).join('\n'),
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Simulação de envio
  };

  return (
    <div className="page">
      <h1>Cadastro de paciente</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="form-group">
            <span>Nome</span>
            <input value={form.name} onChange={(e) => handleChange('name', e.target.value)} />
          </label>
          <label className="form-group">
            <span>Idade</span>
            <input value={form.age} onChange={(e) => handleChange('age', e.target.value)} />
          </label>
          <label className="form-group">
            <span>Sexo</span>
            <input value={form.gender} onChange={(e) => handleChange('gender', e.target.value)} />
          </label>
          <label className="form-group">
            <span>Objetivo</span>
            <input value={form.goal} onChange={(e) => handleChange('goal', e.target.value)} />
          </label>
        </div>

        <div className="form-grid">
          <label className="form-group">
            <span>Altura</span>
            <input value={form.height} onChange={(e) => handleChange('height', e.target.value)} />
          </label>
          <label className="form-group">
            <span>Peso</span>
            <input value={form.weight} onChange={(e) => handleChange('weight', e.target.value)} />
          </label>
          <label className="form-group">
            <span>IMC</span>
            <input value={form.bmi} onChange={(e) => handleChange('bmi', e.target.value)} />
          </label>
          <label className="form-group">
            <span>Classificação</span>
            <input value={form.bmiLabel} onChange={(e) => handleChange('bmiLabel', e.target.value)} />
          </label>
        </div>

        <label className="form-group">
          <span>Alerta</span>
          <textarea value={form.warning} onChange={(e) => handleChange('warning', e.target.value)} />
        </label>

        <label className="form-group">
          <span>Comorbidades (uma por linha)</span>
          <textarea
            value={form.comorbidities}
            onChange={(e) => handleChange('comorbidities', e.target.value)}
          />
        </label>

        <div className="form-grid">
          <label className="form-group">
            <span>Pratica atividade física</span>
            <input value={form.practice} onChange={(e) => handleChange('practice', e.target.value)} />
          </label>
          <label className="form-group">
            <span>Modalidade</span>
            <input value={form.modality} onChange={(e) => handleChange('modality', e.target.value)} />
          </label>
          <label className="form-group">
            <span>Frequência</span>
            <input value={form.frequency} onChange={(e) => handleChange('frequency', e.target.value)} />
          </label>
        </div>

        <label className="form-group">
          <span>Consultas (título - data por linha)</span>
          <textarea
            value={form.appointments}
            onChange={(e) => handleChange('appointments', e.target.value)}
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="button">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
