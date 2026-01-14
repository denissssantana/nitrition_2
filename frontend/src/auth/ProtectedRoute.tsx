import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

export function ProtectedRoute() {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return <Outlet />;
}

export function RedirectIfAuth() {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/cadastro" replace />;
  }
  return <Outlet />;
}
