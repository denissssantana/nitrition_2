import { patient } from '../data/mock';

export function Dados() {
  return (
    <div className="page grid">
      <h1>Dados do paciente</h1>

      <div className="card">
        <div className="card-title">Dados pessoais</div>
        <p>Nome: {patient.name}</p>
        <p>Idade: {patient.age}</p>
        <p>Sexo: {patient.gender}</p>
        <p>Objetivo: {patient.goal}</p>
      </div>

      <div className="card">
        <div className="card-title">Dados antropométricos</div>
        <p>Altura: {patient.height}</p>
        <p>Peso: {patient.weight}</p>
        <p>IMC: {patient.bmi}</p>
        <p>Classificação: {patient.bmiLabel}</p>
        <div className="pill">{patient.warning}</div>
      </div>

      <div className="cards">
        <div className="card">
          <div className="card-title">Comorbidades</div>
          <ul className="list">
            {patient.comorbidities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <div className="card-title">Atividade física</div>
          <p>Pratica atividade física: {patient.activity.practice}</p>
          <p>Modalidade: {patient.activity.modality}</p>
          <p>Frequência: {patient.activity.frequency}</p>
        </div>

        <div className="card">
          <div className="card-title">Calendário</div>
          <ul className="list">
            {patient.appointments.map((appt) => (
              <li key={appt.title}>
                {appt.title}: {appt.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
