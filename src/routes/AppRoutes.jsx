import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import ServicesPage from '../pages/Services/ServicesPage';
import ContactPage from '../pages/Contact/ContactPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

// Scroll to top on every route change
function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function AppRoutes() {
  return (
    <>
      <ScrollReset />
      <Routes>
        <Route path="/"         element={<HomePage />} />
        <Route path="/about"    element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact"  element={<ContactPage />} />
        <Route path="*"         element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
