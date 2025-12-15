import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { to: '/', label: 'Início' },
  { to: '/menu', label: 'Menu' },
  { to: '/dados', label: 'Dados' },
  { to: '/plano', label: 'Plano alimentar' },
  { to: '/orientacoes', label: 'Orientações' },
  { to: '/contatos', label: 'Contatos' },
];

export function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-circle">N</span>
          <span>Nutrition</span>
        </div>
        <nav className="nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
