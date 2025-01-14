import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from '../../kasa/src/components/AppRouter';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<AppRouter />);
