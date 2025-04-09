import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);