import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import CTASection from '../../components/CTASection/CTASection';
import Button from '../../components/Button/Button';
import { services } from '../../data/services';
import { engagementModels, techStack } from '../../data/contactInfo';
import './ServicesPage.css';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-page page-content">
      {/* ── Hero ── */}
      <section className="page-hero" aria-labelledby="services-page-heading">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb__link">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="breadcrumb__current" aria-current="page">Services</span>
          </nav>
          <span className="page-hero__eyebrow">What We Offer</span>
          <h1 className="page-hero__heading" id="services-page-heading">
            Digital Services Built for Business Growth
          </h1>
          <p className="page-hero__desc">
            From custom software development to remote operational support, we provide the expertise
            businesses need to grow efficiently and sustainably.
          </p>
        </div>
      </section>

      {/* ── Main Services Grid ── */}
      <section className="section" aria-labelledby="services-grid-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Our Services"
            heading="Everything Your Business Needs"
            subtext="Six core service areas, each staffed by experienced professionals and backed by structured delivery."
            centered
          />
          <div className="svc-full-grid">
            {services.map((svc, i) => {
              const Icon = Icons[svc.icon] || Icons.Code2;
              return (
                <article
                  key={svc.id}
                  className={`svc-full-card reveal reveal-delay-${(i % 2) + 1}`}
                >
                  <div className="svc-full-card__header">
                    <div className="svc-full-card__icon">
                      <Icon size={26} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h2 className="svc-full-card__title">{svc.title}</h2>
                      <p className="svc-full-card__desc">{svc.description}</p>
                    </div>
                  </div>
                  <ul className="svc-full-card__features" aria-label={`${svc.title} features`}>
                    {svc.features.map((f) => (
                      <li key={f} className="svc-full-card__feature">
                        <Icons.Check size={14} strokeWidth={2.5} aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="svc-full-card__footer">
                    <Button variant="secondary" to="/contact" className="btn--sm">
                      Get a Quote
                    </Button>
                    <Link to="/contact" className="svc-full-card__learn">
                      Discuss Project <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Engagement Models ── */}
      <section className="section section--bg" aria-labelledby="engage-heading">
        <div className="container">
          <SectionHeading
            eyebrow="How We Engage"
            heading="Flexible Engagement Models"
            subtext="Choose the model that best fits your project requirements and team structure."
            centered
          />
          <div className="engage-grid reveal">
            {engagementModels.map((model, i) => {
              const Icon = Icons[model.icon] || Icons.Briefcase;
              return (
                <div key={model.id} className="engage-card">
                  <div className="engage-card__icon">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="engage-card__title">{model.title}</h3>
                  <p className="engage-card__desc">{model.description}</p>
                  <ul className="engage-card__list">
                    {model.points.map((p) => (
                      <li key={p}>
                        <Icons.Check size={13} strokeWidth={2.5} aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="engage-card__cta">
                    Get Started <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="section" aria-labelledby="tech-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Technologies We Use"
            heading="Our Technology Stack"
            subtext="Proven, modern technologies chosen to build reliable, scalable and maintainable solutions."
            centered
          />
          <div className="tech-badges reveal">
            {techStack.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        eyebrow="Let's Talk"
        heading="Need a Custom Digital Solution?"
        description="Share your project requirements and our team will get back to you within one business day."
        primaryText="Discuss Your Project"
        primaryTo="/contact"
        secondaryText="View About Us"
        secondaryTo="/about"
      />
    </div>
  );
}
