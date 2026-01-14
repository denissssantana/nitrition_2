import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type AuthUser = { email: string; token: string };

type AuthContextValue = {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  recover: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:8080';

async function apiPost(path: string, body: unknown) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Erro ${res.status}`);
  }
  return res.json();
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const stored = localStorage.getItem('auth');
    return stored ? (JSON.parse(stored) as AuthUser) : null;
  });

  const persist = useCallback((next: AuthUser | null) => {
    setUser(next);
    if (next) {
      localStorage.setItem('auth', JSON.stringify(next));
    } else {
      localStorage.removeItem('auth');
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const data = await apiPost('/auth/login', { email, password });
    persist({ email: data.email, token: data.token });
  }, [persist]);

  const register = useCallback(async (email: string, password: string) => {
    const data = await apiPost('/auth/register', { email, password });
    persist({ email: data.email, token: data.token });
  }, [persist]);

  const recover = useCallback(async (email: string) => {
    await apiPost('/auth/recover', { email });
  }, []);

  const resetPassword = useCallback(async (token: string, password: string) => {
    await apiPost('/auth/reset', { token, password });
  }, []);

  const logout = useCallback(() => {
    persist(null);
  }, [persist]);

  const value = useMemo(
    () => ({ user, login, register, recover, resetPassword, logout }),
    [user, login, register, recover, resetPassword, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve ser usado dentro de AuthProvider');
  return ctx;
}
