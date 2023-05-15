import React from 'react';

// La página a renderizar al principio de la aplicación no manejará 'lazy load'
export { HomePage } from './home';

// Implementando 'lazy load' para los siguientes componentes
export const LoginPage = React.lazy(()=> import('./login'));
export const CharacterPage = React.lazy(()=> import('./character'));