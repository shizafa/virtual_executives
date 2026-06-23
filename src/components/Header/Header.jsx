import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change (handled by NavLink onClick)
  const closeMenu = () => setMenuOpen(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`} role="banner">
      <div className="container header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo" onClick={closeMenu} aria-label="Virtual Executives Home">
           <img src="/logo.png" alt="VE" height={40} className="header__logo img" />
          <span className="header__logo-text">Virtual <strong>Executives</strong></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `header__nav-link${isActive ? ' header__nav-link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="header__actions">
          <Link to="/contact" className="header__cta">
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="header__hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`header__mobile-menu${menuOpen ? ' header__mobile-menu--open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="header__mobile-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `header__mobile-link${isActive ? ' header__mobile-link--active' : ''}`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="header__mobile-cta" onClick={closeMenu}>
            Get Started
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="header__overlay" onClick={closeMenu} aria-hidden="true" />
      )}
    </header>
  );
}
