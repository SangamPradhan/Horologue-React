import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CartDrawer from './components/cart/CartDrawer';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
          <Navbar />
          <CartDrawer />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
