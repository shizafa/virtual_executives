import * as Icons from 'lucide-react';
import './FeatureCard.css';

export default function FeatureCard({ feature }) {
  const IconComponent = Icons[feature.icon] || Icons.CheckCircle;

  return (
    <div className="feature-card">
      <div className="feature-card__icon">
        <IconComponent size={22} strokeWidth={1.75} />
      </div>
      <div className="feature-card__body">
        <h3 className="feature-card__title">{feature.title}</h3>
        <p className="feature-card__desc">{feature.description}</p>
      </div>
    </div>
  );
}
