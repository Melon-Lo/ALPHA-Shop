import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ThemeProvider from 'context/ThemeContext';
import { CartContextProvider } from 'context/CartContext';
import { ShippingContextProvider } from 'context/ShippingContext';
import FormContextProvider from 'context/FormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <FormContextProvider>
        <ShippingContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ShippingContextProvider>
      </FormContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
