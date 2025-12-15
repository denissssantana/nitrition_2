import { Link } from 'react-router-dom';
import logo from '../assets/images/nutri-sfundo.png';

export function Welcome() {
  return (
    <div className="welcome-full">
      <img src={logo} alt="Logomarca NutritioN" className="welcome-full__image" draggable="false" />
      <h1 className="welcome-full__title">NutritioN</h1>
      <Link to="/cadastro" className="button welcome-full__button">
        Entrar
      </Link>
    </div>
  );
}
