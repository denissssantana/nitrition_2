import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import './index.css';
import { Welcome } from './pages/Welcome';
import { Menu } from './pages/Menu';
import { Dados } from './pages/Dados';
import { Plano } from './pages/Plano';
import { Orientacoes } from './pages/Orientacoes';
import { Contatos } from './pages/Contatos';
import { NotFound } from './pages/NotFound';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/dados" element={<Dados />} />
          <Route path="/plano" element={<Plano />} />
          <Route path="/orientacoes" element={<Orientacoes />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
