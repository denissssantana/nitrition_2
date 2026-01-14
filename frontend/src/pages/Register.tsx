import { useState } from 'react'; // o que for função
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

type RegisterForm = { email: string; password: string; confirm: string };

export function Register() {
  const [form, setForm] = useState<RegisterForm>({ email: '', password: '', confirm: '' });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.password !== form.confirm) return;
    register(form.email, form.password)
      .then(() => navigate('/cadastro'))
      .catch(() => navigate('/cadastro'));
  };

  return (
    <div className="page">
      <h1>Cadastre-se</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-group">
          <span>Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </label>
        <label className="form-group">
          <span>Senha</span>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </label>
        <label className="form-group">
          <span>Repetir senha</span>
          <input
            type="password"
            value={form.confirm}
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            required
          />
        </label>
        <div className="form-actions">
          <button type="submit" className="button">
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
}
