import { FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (password !== confirm) {
      setMessage('As senhas não coincidem.');
      return;
    }
    if (!token) {
      setMessage('Link inválido.');
      return;
    }
    resetPassword(token, password)
      .then(() => {
        setMessage('Senha redefinida com sucesso.');
        setTimeout(() => navigate('/auth'), 1200);
      })
      .catch(() => setMessage('Não foi possível redefinir. Tente novamente.'));
  };

  return (
    <div className="page">
      <h1>Redefinir senha</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-group">
          <span>Nova senha</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label className="form-group">
          <span>Repetir senha</span>
          <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        </label>
        <div className="form-actions">
          <button type="submit" className="button">
            Redefinir
          </button>
        </div>
      </form>
      {message && <p className="pill" style={{ marginTop: 12 }}>{message}</p>}
    </div>
  );
}
