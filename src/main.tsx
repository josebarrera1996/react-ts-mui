import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeConfig } from './config/theme.config';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Aplicando el Provider de Redux (con su respectivo 'store') */}
    <Provider store={store}>
      {/* Aplicando los estilos globales de la app */}
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </Provider>
  </React.StrictMode>,
)
