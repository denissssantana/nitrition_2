import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from './assets/images/nutri-sfundo.png';

const links = [
  { to: '/', label: 'Início' },
  { to: '/cadastro', label: 'Cadastro' },
  { to: '/dados', label: 'Dados' },
  { to: '/plano', label: 'Plano alimentar' },
  { to: '/orientacoes', label: 'Orientações' },
  { to: '/contatos', label: 'Contatos' },
];

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const showChrome = pathname !== '/';

  const handleNavigate = () => setMenuOpen(false);
  const handleClose = () => {
    setMenuOpen(false);
    navigate('/');
  };

  return (
    <div className={`app-shell ${showChrome ? 'has-chrome' : 'no-chrome'}`}>
      {showChrome && (
        <>
          <header className="topbar">
            <div className="brand">
              <img src={logo} alt="Logo Nutrition" className="brand-logo" />
              <span>Nutrition</span>
            </div>
            <button
              className={`menu-toggle ${menuOpen ? 'open' : ''}`}
              aria-label="Abrir menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
            <nav className={`nav ${menuOpen ? 'mobile-open' : ''}`}>
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  end={link.to === '/'}
                  onClick={handleNavigate}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </header>
          <div
            className={`menu-overlay ${menuOpen ? 'visible' : ''}`}
            onClick={() => setMenuOpen(false)}
          />
        </>
      )}
      <main className="main-content">
        <Outlet />
      </main>
      {showChrome && (
        <footer className="app-footer">
          <div className="footer-inner">
            <div className="footer-actions">
              <button type="button" className="icon-button" onClick={() => navigate(-1)}>
                <i className="fa-solid fa-arrow-left" aria-hidden="true" />
                <span>Voltar</span>
              </button>
              <button type="button" className="icon-button" onClick={handleClose}>
                <i className="fa-solid fa-xmark" aria-hidden="true" />
                <span>Fechar</span>
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
