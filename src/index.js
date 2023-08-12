import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ThemeProvider from 'context/ThemeContext';
import CartContextProvider from 'context/CartContext';
import ShippingContextProvider from 'context/ShippingContext';
import FormContextProvider from 'context/FormContext';
import WindowWidthProvider from 'context/WindowWidthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <WindowWidthProvider>
        <FormContextProvider>
          <ShippingContextProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </ShippingContextProvider>
        </FormContextProvider>
      </WindowWidthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
