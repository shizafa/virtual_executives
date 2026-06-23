import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Eye, CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import CTASection from '../../components/CTASection/CTASection';
import Button from '../../components/Button/Button';
import { coreValues, faqs } from '../../data/faqs';
import { whyVEPoints } from '../../data/features';
import './AboutPage.css';

const storyPoints = [
  { icon: 'Users', label: 'Remote Workforce' },
  { icon: 'Monitor', label: 'Digital Solutions' },
  { icon: 'Settings', label: 'Managed Operations' },
  { icon: 'Star', label: 'Expert Talent' },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page page-content">
      {/* ── Hero ── */}
      <section className="page-hero page-hero--about" aria-labelledby="about-heading">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb__link">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="breadcrumb__current" aria-current="page">About</span>
          </nav>
          <span className="page-hero__eyebrow">About Virtual Executives</span>
          <h1 className="page-hero__heading" id="about-heading">
            Your Trusted Digital Execution Partner
          </h1>
          <p className="page-hero__desc">
            We help businesses build, manage and scale their digital operations through expert remote talent,
            structured processes and reliable technology solutions.
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container">
          <div className="story__layout reveal">
            <div className="story__image" aria-hidden="true">
              <div className="story__image-inner">
                <img
                  src="/about.png"        
                  alt="About Virtual Executives"
                  className="story__img-main"
                />
                <div className="story__img-accent" />
                <div className="story__img-card story__img-card--1">
                  <span className="story__img-stat">50+</span>
                  <span>Happy Clients</span>
                </div>
                <div className="story__img-card story__img-card--2">
                  <span className="story__img-stat">100+</span>
                  <span>Projects Delivered</span>
                </div>
              </div>
            </div>
            <div className="story__content">
              <SectionHeading
                eyebrow="Our Story"
                heading="Built to Power Your Digital Growth"
              />
              <p className="story__text">
                Virtual Executives is a remote workforce and digital solutions company helping businesses
                build, manage and scale their digital operations through experienced professionals and
                structured execution.
              </p>
              <p className="story__text">
                We founded Virtual Executives with a clear mission: to remove the barriers businesses face
                when trying to access quality digital talent and reliable execution. Whether you need a
                website, a mobile app, a marketing team or a virtual assistant — we bring together the
                right professionals under one roof.
              </p>
              <div className="story__points">
                {storyPoints.map((p) => {
                  const Icon = Icons[p.icon] || Icons.CheckCircle;
                  return (
                    <div key={p.label} className="story__point">
                      <Icon size={16} strokeWidth={2} />
                      <span>{p.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section section--bg" aria-labelledby="mv-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Our Direction"
            heading="Mission &amp; Vision"
            centered
          />
          <div className="mv-grid reveal">
            <div className="mv-card mv-card--mission">
              <div className="mv-card__icon">
                <Target size={26} strokeWidth={1.75} />
              </div>
              <h2 className="mv-card__title">Our Mission</h2>
              <p className="mv-card__text">
                To simplify digital growth by providing businesses with reliable talent, managed teams
                and scalable technology solutions.
              </p>
            </div>
            <div className="mv-card mv-card--vision">
              <div className="mv-card__icon">
                <Eye size={26} strokeWidth={1.75} />
              </div>
              <h2 className="mv-card__title">Our Vision</h2>
              <p className="mv-card__text">
                To become the world's most trusted remote workforce partner,
                empowering businesses globally through technology, talent and
                efficient execution.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section" aria-labelledby="values-heading">
        <div className="container">
          <SectionHeading
            eyebrow="What We Stand For"
            heading="Our Core Values"
            subtext="The principles that shape every decision, project and relationship at Virtual Executives."
            centered
          />
          <div className="values-grid">
            {coreValues.map((val, i) => {
              const Icon = Icons[val.icon] || Icons.Star;
              return (
                <div key={val.id} className={`value-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="value-card__icon">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="value-card__title">{val.title}</h3>
                  <p className="value-card__desc">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why VE ── */}
      <section className="section section--bg" aria-labelledby="why-ve-heading">
        <div className="container">
          <div className="why-ve__layout">
            <div className="why-ve__left reveal">
              <SectionHeading
                eyebrow="Why Choose Us"
                heading="Why Virtual Executives?"
                subtext="We're not just a service provider — we're a committed partner in your business growth."
              />
              <Button variant="primary" to="/contact">
                Work With Us
              </Button>
            </div>
            <div className="why-ve__points">
              {whyVEPoints.map((p, i) => (
                <div key={p.id} className={`why-ve__point reveal reveal-delay-${(i % 2) + 1}`}>
                  <div className="why-ve__point-icon">
                    <CheckCircle size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="why-ve__point-title">{p.title}</h3>
                    <p className="why-ve__point-desc">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        eyebrow="Start a Conversation"
        heading="Let's Build Something Great Together"
        description="Reach out to discuss your project, team requirements or digital strategy."
        primaryText="Work With Us"
        primaryTo="/contact"
        secondaryText="View Services"
        secondaryTo="/services"
      />
    </div>
  );
}