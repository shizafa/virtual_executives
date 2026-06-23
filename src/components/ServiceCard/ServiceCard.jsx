import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

export default function ServiceCard({ service, showFeatures = false }) {
  const IconComponent = Icons[service.icon] || Icons.Code2;

  return (
    <div className="service-card">
      <div className="service-card__icon-wrap">
        <IconComponent size={24} strokeWidth={1.75} />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.description}</p>

      {showFeatures && service.features && (
        <ul className="service-card__features">
          {service.features.map((f, i) => (
            <li key={i} className="service-card__feature-item">
              <Icons.Check size={14} strokeWidth={2.5} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      <Link to="/services" className="service-card__link">
        <span>Learn more</span>
        <ArrowRight size={15} strokeWidth={2} />
      </Link>
    </div>
  );
}
