import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AppRoutes from './routes/AppRoutes';
import './styles/variables.css';
import './styles/globals.css';
import './styles/responsive.css';
import './styles/pages.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <AppRoutes />
      </main>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}
