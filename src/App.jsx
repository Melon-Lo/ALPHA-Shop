import './App.css';
import Header from 'components/Header/Header';
import Checkout from 'pages/Checkout/Checkout';
import Footer from 'components/Footer/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Checkout />
      <Footer />
    </div>
  );
}