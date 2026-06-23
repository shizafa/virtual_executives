import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../../components/Button/Button';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found page-content">
      <div className="container not-found__inner">
        <div className="not-found__number" aria-hidden="true">404</div>
        <h1 className="not-found__heading">Page Not Found</h1>
        <p className="not-found__desc">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="not-found__actions">
          <Button variant="primary" to="/" className="btn--lg">
            <Home size={17} />
            Go Back Home
          </Button>
          <Button variant="secondary" onClick={() => window.history.back()}>
            <ArrowLeft size={17} />
            Go Back
          </Button>
        </div>
        <div className="not-found__links">
          <Link to="/services" className="not-found__link">Our Services</Link>
          <Link to="/about" className="not-found__link">About Us</Link>
          <Link to="/contact" className="not-found__link">Contact</Link>
        </div>
      </div>
    </div>
  );
}
