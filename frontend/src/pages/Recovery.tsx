import { useState } from 'react'; // o que for função
import type { FormEvent } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Recovery() {
  const [email, setEmail] = useState('');
  const { recover } = useAuth();
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    recover(email)
      .then(() => setSent(true))
      .catch(() => setSent(true));
  };

  return (
    <div className="page">
      <h1>Recuperar acesso</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-group">
          <span>Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <div className="form-actions">
          <button type="submit" className="button">
            Enviar link
          </button>
        </div>
      </form>
      {sent && (
        <div className="confirm-overlay">
          <div className="confirm-dialog">
            <p>Enviamos um link de redefinição para o email informado.</p>
            <div className="confirm-actions">
              <button
                type="button"
                className="button"
                onClick={() => navigate('/auth/reset/demo-token')}
              >
                Abrir link
              </button>
              <button type="button" className="icon-button" onClick={() => setSent(false)}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
