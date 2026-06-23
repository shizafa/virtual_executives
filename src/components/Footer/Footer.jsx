import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin,  Facebook, Instagram, Send } from 'lucide-react';
import { contactInfo } from '../../data/contactInfo';
import './Footer.css';

const quickLinks = [
  { href: "https://www.linkedin.com/", label: "LinkedIn" },
  { href: "https://www.facebook.com/", label: "Facebook" },
  { href: "https://www.instagram.com/", label: "Instagram" },
];

const serviceLinks = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Digital Marketing',
  'Virtual Assistance',
  'Business Process Support',
];

const socialLinks = {
  Linkedin: { Icon: Linkedin, href: "https://www.linkedin.com/company/vexecutives/" },

  Facebook: { Icon: Facebook, href: "https://www.facebook.com/VExecutives" },
  Instagram: { Icon: Instagram, href: "https://www.instagram.com/virtualexecutives/" },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Virtual Executives Home">
              <img src="/logo.png" alt="Virtual Executives" className=".footer__logo img"/>
              <span className="footer__logo-text">Virtual <strong>Executives</strong></span>
            </Link>
            <p className="footer__tagline">
              Remote talent, managed digital teams and reliable technology solutions — helping businesses grow without limits.
            </p>
            <div className="footer__social">
              {Object.entries(socialLinks).map(([name, { Icon, href }]) => (
                <a key={name} href={href} className="footer__social-link" aria-label={name} target="_blank" rel="noopener noreferrer">
                  <Icon size={17} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Quick Links</h3>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h3 className="footer__col-title">Services</h3>
            <ul className="footer__links">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/services" className="footer__link">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">Contact</h3>
            <ul className="footer__contact-list">
              <li>
                <Mail size={15} />
                <a href={`mailto:${contactInfo.email}`} className="footer__link">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <Phone size={15} />
                <a href={`tel:${contactInfo.phone}`} className="footer__link">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <MapPin size={15} />
                <span>{contactInfo.location}</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="footer__newsletter" aria-label="Newsletter signup">
              <p className="footer__newsletter-label">Stay updated</p>
              <div className="footer__newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer__newsletter-input"
                  aria-label="Email for newsletter"
                />
                <button className="footer__newsletter-btn" aria-label="Subscribe">
                  <Send size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {currentYear} Virtual Executives. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="footer__legal-link">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}