import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from './assets/images/nutri-sfundo.png';
import { useAuth } from './auth/AuthContext';

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
  const { user, logout } = useAuth();
  const authRoutes = ['/auth', '/auth/recuperar', '/auth/registrar'];
  const showChrome = pathname !== '/';
  const hideMenu = authRoutes.includes(pathname);
  const appClass = ['app-shell', showChrome ? 'has-chrome' : 'no-chrome', hideMenu ? 'auth-chrome' : '']
    .filter(Boolean)
    .join(' ');
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);

  useEffect(() => {
    if (!hideMenu) {
      setHideFooter(false);
      return;
    }
    const onFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA') {
        setHideFooter(true);
      }
    };
    const onBlur = () => setHideFooter(false);
    window.addEventListener('focusin', onFocus);
    window.addEventListener('focusout', onBlur);
    return () => {
      window.removeEventListener('focusin', onFocus);
      window.removeEventListener('focusout', onBlur);
    };
  }, [hideMenu]);

  const handleNavigate = () => setMenuOpen(false);
  const handleClose = () => {
    setMenuOpen(false);
    logout();
    navigate('/');
    setConfirmLogout(false);
  };

  return (
    <div className={appClass}>
      {showChrome && (
        <>
          <header className="topbar">
            <div className="brand">
              <img src={logo} alt="Logo Nutrition" className="brand-logo" />
              <span>Nutrition</span>
            </div>
            {!hideMenu && (
              <>
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
                {user && <span className="user-email">{user.email}</span>}
              </>
            )}
          </header>
          {!hideMenu && (
            <div
              className={`menu-overlay ${menuOpen ? 'visible' : ''}`}
              onClick={() => setMenuOpen(false)}
            />
          )}
        </>
      )}
      <main className="main-content">
        <Outlet />
      </main>
      {showChrome && !hideFooter && (
        <footer className="app-footer">
          <div className="footer-inner">
            <div className="footer-actions">
              {!hideMenu && (
                <button type="button" className="icon-button" onClick={() => navigate(-1)}>
                  <i className="fa-solid fa-arrow-left" aria-hidden="true" />
                  <span>Voltar</span>
                </button>
              )}
              <button
                type="button"
                className="icon-button"
                onClick={() => setConfirmLogout(true)}
              >
                <i className="fa-solid fa-right-from-bracket" aria-hidden="true" />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </footer>
      )}
      {confirmLogout && (
        <div className="confirm-overlay">
          <div className="confirm-dialog">
            <p>Deseja realmente sair?</p>
            <div className="confirm-actions">
              <button type="button" className="button" onClick={handleClose}>
                Sim
              </button>
              <button
                type="button"
                className="icon-button"
                onClick={() => setConfirmLogout(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
