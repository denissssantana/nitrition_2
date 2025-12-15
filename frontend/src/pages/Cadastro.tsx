import { Link } from 'react-router-dom';

const options = [
  { to: '/cadastro/paciente', title: 'Cadastrar paciente', desc: 'Dados pessoais e clínicos.' },
  { to: '/cadastro/plano', title: 'Cadastrar Plano alimentar', desc: 'Refeições e opções do plano.' },
];

export function Cadastro() {
  return (
    <div className="page">
      <h1>Cadastro</h1>
      <div className="cards">
        {options.map((item) => (
          <Link key={item.to} to={item.to} className="card card-link">
            <div className="card-title">{item.title}</div>
            <p className="tagline">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
