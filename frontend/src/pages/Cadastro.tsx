import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const options = [
  { to: '/cadastro/paciente', title: 'Cadastrar dados do paciente', desc: 'Dados pessoais e clínicos.' },
  { to: '/cadastro/plano', title: 'Cadastrar Plano alimentar', desc: 'Refeições e opções do plano.' },
];

export function Cadastro() {
  const { user } = useAuth();

  return (
    <div className="page">
      <h1>Cadastro</h1>
      {user && <p className="welcome-user">Bem vindo, {user.email}</p>}
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
