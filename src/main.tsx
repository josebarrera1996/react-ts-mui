import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeConfig } from './config/theme.config';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Aplicando los estilos globales de la app */}
    <ThemeConfig>
      <App />
    </ThemeConfig>
  </React.StrictMode>,
)
