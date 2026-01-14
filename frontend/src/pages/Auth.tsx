import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

type AuthForm = { email: string; password: string };

export function Auth() {
  const [login, setLogin] = useState<AuthForm>({ email: '', password: '' });
  const navigate = useNavigate();
  const { login: doLogin } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    doLogin(login.email, login.password)
      .then(() => navigate('/cadastro'))
      .catch(() => {
        setError('Senha incorreta. Tente novamente.');
      })
      .finally(() => setLoading(false));
  };

  const handleCloseError = () => {
    setError(null);
    setLogin((prev) => ({ ...prev, password: '' }));
  };

  return (
    <div className="auth-screen">
      <h1 className="auth-title">Login</h1>
      <div className="auth-panel">
        <div className="auth-card">
          <h2>Entrar</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label className="form-group">
              <span>Email</span>
              <input
                type="email"
                value={login.email}
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
              />
            </label>
            <label className="form-group">
              <span>Senha</span>
              <input
                type="password"
                value={login.password}
                onChange={(e) => setLogin({ ...login, password: e.target.value })}
              />
            </label>
            <Link to="/auth/recuperar" className="inline-link">
              Esqueci minha senha
            </Link>
            <Link to="/auth/registrar" className="inline-link">
              Cadastre-se
            </Link>
            <div className="form-actions">
              <button type="submit" className="button" disabled={loading}>
                Entrar
              </button>
            </div>
          </form>
          <div className="spacer-vertical" />
          <div className="auth-divider">
            <span>ou</span>
          </div>
          <div className="spacer-vertical" />
          <button type="button" className="button google-button">
            <i className="fa-brands fa-google" aria-hidden="true" />
            Entrar com Google
          </button>
        </div>
      </div>
      {error && (
        <div className="confirm-overlay">
          <div className="confirm-dialog">
            <p>{error}</p>
            <div className="confirm-actions">
              <button type="button" className="icon-button" onClick={handleCloseError}>
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
