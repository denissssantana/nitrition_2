import { Link } from 'react-router-dom';

const cards = [
  { to: '/dados', title: 'Dados do paciente', desc: 'Informações pessoais e medidas.' },
  { to: '/plano', title: 'Plano alimentar', desc: 'Refeições e opções de cardápio.' },
  { to: '/orientacoes', title: 'Orientações nutricionais', desc: 'Dicas e recomendações.' },
  { to: '/contatos', title: 'Contatos', desc: 'WhatsApp, e-mail e Instagram.' },
];

export function Menu() {
  return (
    <div className="page">
      <h1>Menu</h1>
      <div className="cards">
        {cards.map((card) => (
          <Link key={card.to} to={card.to} className="card">
            <div className="card-title">{card.title}</div>
            <p className="tagline">{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
