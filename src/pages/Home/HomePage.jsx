import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Search, FileText, Cpu, LifeBuoy,
  ExternalLink, ChevronRight
} from 'lucide-react';
import * as Icons from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import CTASection from '../../components/CTASection/CTASection';
import Button from '../../components/Button/Button';
import { services } from '../../data/services';
import { features } from '../../data/features';
import { testimonials } from '../../data/testimonials';
import { processSteps } from '../../data/processSteps';
import { projects } from '../../data/projects';
import './HomePage.css';

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '400+', label: 'Happy Clients' },
  { value: '30+', label: 'Digital Services' },
  { value: '24/7', label: 'Dedicated Support' },
];

const processIcons = { Search, FileText, Cpu, LifeBuoy };

export default function HomePage() {
  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page page-content">
      {/* ── Hero ── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__bg-orb hero__bg-orb--1" aria-hidden="true" />
        <div className="hero__bg-orb hero__bg-orb--2" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__eyebrow">Remote Talent. Digital Execution. Real Growth.</span>
            <h1 className="hero__heading" id="hero-heading">
              Build, Manage and{' '}
              <span className="hero__highlight">Scale</span> Your Digital Operations
            </h1>
            <p className="hero__desc">
              Virtual Executives helps businesses access expert remote talent, managed digital teams
              and reliable technology solutions without the complexity of traditional hiring.
            </p>
            <div className="hero__actions">
              <Button variant="primary" to="/services" className="btn--lg">
                Explore Our Services
                <ArrowRight size={17} />
              </Button>
              <Button variant="secondary" to="/contact" className="btn--lg">
                Book a Consultation
              </Button>
            </div>
            <div className="hero__trust">
              {['Trusted by 100+ Businesses', 'Remote-First', 'Fast Delivery'].map((t) => (
                <span key={t} className="hero__trust-item">
                  <CheckCircle size={14} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Dashboard Visual */}
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__dashboard">
              <div className="hero__dash-header">
                <div className="hero__dash-dots">
                  <span /><span /><span />
                </div>
                <span className="hero__dash-title">Project Overview</span>
              </div>
              <div className="hero__dash-stats">
                <div className="hero__dash-stat">
                  <span className="hero__dash-stat-val">94%</span>
                  <span className="hero__dash-stat-lbl">On-time Delivery</span>
                </div>
                <div className="hero__dash-stat">
                  <span className="hero__dash-stat-val">38</span>
                  <span className="hero__dash-stat-lbl">Active Projects</span>
                </div>
                <div className="hero__dash-stat">
                  <span className="hero__dash-stat-val">5★</span>
                  <span className="hero__dash-stat-lbl">Avg. Rating</span>
                </div>
                
              </div>
              <div className="hero__dash-bar-wrap">
                <div className="hero__dash-bar-label">
                  <span>Web Dev</span><span>82%</span>
                </div>
                <div className="hero__dash-bar">
                  <div className="hero__dash-bar-fill" style={{ width: '82%' }} />
                </div>
                <div className="hero__dash-bar-label">
                  <span>Mobile Apps</span><span>67%</span>
                </div>
                <div className="hero__dash-bar">
                  <div className="hero__dash-bar-fill" style={{ width: '67%' }} />
                </div>
                <div className="hero__dash-bar-label">
                  <span>UI/UX</span><span>91%</span>
                </div>
                <div className="hero__dash-bar">
                  <div className="hero__dash-bar-fill" style={{ width: '91%' }} />
                </div>
                <div className="hero__dash-bar-label">
                  <span>Artificial Intelligence</span><span>89%</span>
                </div>
                <div className="hero__dash-bar">
                  <div className="hero__dash-bar-fill" style={{ width: '91%' }} />
                </div>
              </div>
              <div className="hero__dash-tasks">
                {['Website Redesign', 'API Integration', 'Brand Identity'].map((task, i) => (
                  <div key={task} className="hero__dash-task">
                    <span className={`hero__dash-badge hero__dash-badge--${i === 0 ? 'done' : i === 1 ? 'progress' : 'review'}`}>
                      {i === 0 ? 'Done' : i === 1 ? 'In Progress' : 'Review'}
                    </span>
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-bar" aria-label="Company statistics">
        <div className="container">
          <div className="stats-bar__grid">
            {stats.map((s, i) => (
              <div key={i} className="stats-bar__item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="stats-bar__value">{s.value}</span>
                <span className="stats-bar__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="section" id="services-preview" aria-labelledby="services-heading">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            heading="Digital Services Built for Growth"
            subtext="From custom software development to remote workforce solutions — we deliver what your business needs to scale."
            centered
          />
          <div className="services-grid reveal">
            {services.map((svc) => (
              <ServiceCard key={svc.id} service={svc} />
            ))}
          </div>
          <div className="section__cta reveal">
            <Button variant="primary" to="/services">
              View All Services
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section section--bg" aria-labelledby="why-heading">
        <div className="container">
          <div className="why-us__layout">
            <div className="why-us__left reveal">
              <SectionHeading
                eyebrow="Why Virtual Executives"
                heading="One Partner. Complete Digital Capability."
                subtext="We combine expert talent, structured execution and ongoing support to become a seamless extension of your team."
              />
              <Button variant="primary" to="/about">
                Learn About Us
                <ArrowRight size={16} />
              </Button>
            </div>
            <div className="why-us__grid">
              {features.map((f, i) => (
                <div key={f.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                  <FeatureCard feature={f} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section" aria-labelledby="process-heading">
        <div className="container">
          <SectionHeading
            eyebrow="How We Work"
            heading="Our Four-Step Process"
            subtext="A structured, transparent approach that keeps every project on track from day one to delivery."
            centered
          />
          <div className="process-steps reveal">
            {processSteps.map((step, i) => {
              const IconComp = Icons[step.icon] || Icons.CheckCircle;
              return (
                <div key={step.id} className="process-step">
                  <div className="process-step__icon">
                    <IconComp size={22} strokeWidth={1.75} />
                  </div>
                  <div className="process-step__num">{step.step}</div>
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__desc">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="process-step__connector" aria-hidden="true" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      {/* <section className="section section--bg" aria-labelledby="projects-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Our Work"
            heading="Featured Projects"
            subtext="A selection of projects that showcase our capabilities across web, mobile and design."
            centered
          />
          <div className="projects-grid">
            {projects.map((proj, i) => (
              <article
                key={proj.id}
                className={`project-card reveal reveal-delay-${i + 1}`}
              >
                <div
                  className="project-card__image"
                  style={{ backgroundColor: proj.bgColor }}
                  aria-hidden="true"
                >
                  <div className="project-card__image-inner">
                    <div className="project-card__img-bar" style={{ backgroundColor: proj.accentColor }} />
                    <div className="project-card__img-block" />
                    <div className="project-card__img-block project-card__img-block--sm" />
                  </div>
                </div>
                <div className="project-card__body">
                  <span className="project-card__category">{proj.category}</span>
                  <h3 className="project-card__title">{proj.title}</h3>
                  <p className="project-card__desc">{proj.description}</p>
                  <div className="project-card__tags">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="project-card__tag">{tag}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="project-card__btn">
                    View Project
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Testimonials ── */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Client Reviews"
            heading="What Our Clients Say"
            subtext="Real feedback from the businesses we've helped build, manage and scale their digital operations."
            centered
          />
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={t.id} className={`reveal reveal-delay-${i + 1}`}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        eyebrow="Get Started Today"
        heading="Ready to Scale Your Business?"
        description="Let's build the right digital team and execution strategy for your business."
        primaryText="Start Your Project"
        primaryTo="/contact"
        secondaryText="Explore Services"
        secondaryTo="/services"
      />
    </div>
  );
}
