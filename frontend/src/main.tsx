import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import './index.css';
import { Welcome } from './pages/Welcome';
import { Dados } from './pages/Dados';
import { Plano } from './pages/Plano';
import { Cadastro } from './pages/Cadastro';
import { Auth } from './pages/Auth';
import { Register } from './pages/Register';
import { CadastroPaciente } from './pages/CadastroPaciente';
import { CadastroPlano } from './pages/CadastroPlano';
import { Recovery } from './pages/Recovery';
import { ResetPassword } from './pages/ResetPassword';
import { Orientacoes } from './pages/Orientacoes';
import { Contatos } from './pages/Contatos';
import { NotFound } from './pages/NotFound';
import { AuthProvider } from './auth/AuthContext';
import { ProtectedRoute, RedirectIfAuth } from './auth/ProtectedRoute';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Welcome />} />
            <Route element={<RedirectIfAuth />}>
              <Route path="/auth" element={<Auth />} />
              <Route path="/auth/registrar" element={<Register />} />
              <Route path="/auth/recuperar" element={<Recovery />} />
              <Route path="/auth/reset/:token" element={<ResetPassword />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/cadastro/paciente" element={<CadastroPaciente />} />
              <Route path="/cadastro/plano" element={<CadastroPlano />} />
              <Route path="/dados" element={<Dados />} />
              <Route path="/plano" element={<Plano />} />
              <Route path="/orientacoes" element={<Orientacoes />} />
              <Route path="/contatos" element={<Contatos />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
