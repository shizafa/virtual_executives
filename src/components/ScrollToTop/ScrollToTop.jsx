import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top${visible ? ' scroll-to-top--visible' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} strokeWidth={2.5} />
    </button>
  );
}
