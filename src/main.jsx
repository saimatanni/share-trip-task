// main.jsx

import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductProvider } from './context/ProductContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ProductProvider>
        <App />
      </ProductProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
