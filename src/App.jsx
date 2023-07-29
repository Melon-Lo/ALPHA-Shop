import './App.css';
import Header from 'components/Header/Header';
import Checkout from 'pages/Checkout/Checkout';
import Footer from 'components/Footer/Footer';
import { useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';

export default function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div 
      className="app"
      style={{
        color: theme.foreground,
        backgroundColor: theme.background
      }}
    >
      <Header />
      <Checkout />
      <Footer />
    </div>
  );
}