import Button from '../Button/Button';
import './CTASection.css';

export default function CTASection({
  eyebrow,
  heading,
  description,
  primaryText,
  primaryTo,
  secondaryText,
  secondaryTo,
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-section__inner reveal">
          {eyebrow && <span className="cta-section__eyebrow">{eyebrow}</span>}
          <h2 className="cta-section__heading">{heading}</h2>
          {description && <p className="cta-section__desc">{description}</p>}
          <div className="cta-section__actions">
            {primaryText && (
              <Button variant="white" to={primaryTo}>
                {primaryText}
              </Button>
            )}
            {secondaryText && (
              <Button variant="outline-white" to={secondaryTo}>
                {secondaryText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
