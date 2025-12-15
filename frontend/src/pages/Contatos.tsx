import { patient } from '../data/mock';

export function Contatos() {
  return (
    <div className="page">
      <h1>Contatos</h1>
      <div className="cards small">
        <div className="card">
          <div className="card-title">WhatsApp</div>
          <p>{patient.contacts.whatsapp}</p>
        </div>
        <div className="card">
          <div className="card-title">E-mail</div>
          <p>{patient.contacts.email}</p>
        </div>
        <div className="card">
          <div className="card-title">Instagram</div>
          <p>
            <a href={patient.contacts.instagram} target="_blank" rel="noreferrer">
              {patient.contacts.instagram}
            </a>
          </p>
        </div>
      </div>
      <p className="footnote">Inclua aqui outros canais quando estiverem disponíveis.</p>
    </div>
  );
}
