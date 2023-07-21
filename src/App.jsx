import './App.css';
import Header from 'components/Header';
import Checkout from 'pages/Checkout';
import Footer from 'components/Footer';

export default function App() {
  return (
    <div class="app">
      <Header />
      <Checkout />
      <Footer />
    </div>
  );
}