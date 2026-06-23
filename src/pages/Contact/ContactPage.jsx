import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Mail, Phone, MessageCircle, Clock, MapPin,
  CheckCircle, ChevronDown
} from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Button from '../../components/Button/Button';
import { contactInfo } from '../../data/contactInfo';
import { faqs } from '../../data/faqs';
import { submitContact } from '../../services/api';
import './ContactPage.css';

const serviceOptions = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Digital Marketing',
  'Virtual Assistance',
  'Business Process Support',
  'Other',
];

const budgetOptions = [
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Not sure yet',
];

const contactCards = [
  { icon: Mail, label: 'Email Us', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: 'Call Us', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
  { icon: MessageCircle, label: 'WhatsApp', value: contactInfo.whatsapp, href: '#' },
  { icon: Clock, label: 'Business Hours', value: contactInfo.hours, href: null },
  { icon: MapPin, label: 'Location', value: contactInfo.location, href: null },
];

function validate(fields) {
  const errors = {};
  if (!fields.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.subject.trim()) errors.subject = 'Subject is required.';
  if (!fields.message.trim()) {
    errors.message = 'Message is required.';
  } else if (fields.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
  }
  return errors;
}

const emptyForm = {
  fullName: '', email: '', phone: '', company: '',
  service: '', budget: '', subject: '', message: '',
};

export default function ContactPage() {
  const [fields, setFields] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    try {
      await submitContact(fields);
      setSubmitted(true);
      setFields(emptyForm);
    } catch {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page page-content">
      {/* ── Hero ── */}
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb__link">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="breadcrumb__current" aria-current="page">Contact</span>
          </nav>
          <span className="page-hero__eyebrow">Get In Touch</span>
          <h1 className="page-hero__heading" id="contact-heading">
            Let's Start a Conversation
          </h1>
          <p className="page-hero__desc">
            Tell us about your business, project or support requirements. Our team will get back
            to you as soon as possible.
          </p>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="section" aria-labelledby="contact-form-section">
        <div className="container">
          <div className="contact-layout">
            {/* Info Cards */}
            <div className="contact-info reveal">
              <h2 className="contact-info__heading">Contact Information</h2>
              <p className="contact-info__sub">
                Reach out via any of the channels below or use the form to send us a message.
              </p>
              <div className="contact-cards">
                {contactCards.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="contact-card">
                    <div className="contact-card__icon">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <div className="contact-card__body">
                      <span className="contact-card__label">{label}</span>
                      {href ? (
                        <a href={href} className="contact-card__value contact-card__value--link">
                          {value}
                        </a>
                      ) : (
                        <span className="contact-card__value">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap reveal reveal-delay-2">
              {submitted ? (
                <div className="form-success" role="alert">
                  <div className="form-success__icon">
                    <CheckCircle size={36} strokeWidth={1.75} />
                  </div>
                  <h3 className="form-success__title">Message Sent!</h3>
                  <p className="form-success__desc">
                    Thank you for reaching out. Our team will review your message and get back to
                    you within one business day.
                  </p>
                  <Button variant="primary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  <h2 className="contact-form__title">Send Us a Message</h2>

                  {errors.submit && (
                    <div className="form-error-banner" role="alert">{errors.submit}</div>
                  )}

                  <div className="form-row">
                    <div className={`form-group${errors.fullName ? ' form-group--error' : ''}`}>
                      <label htmlFor="fullName" className="form-label">
                        Full Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        className="form-input"
                        placeholder="Enter Your Full Name Here"
                        value={fields.fullName}
                        onChange={handleChange}
                        autoComplete="name"
                        aria-required="true"
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <span id="fullName-error" className="form-error" role="alert">
                          {errors.fullName}
                        </span>
                      )}
                    </div>
                    <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
                      <label htmlFor="email" className="form-label">
                        Email Address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="example@company.com"
                        value={fields.email}
                        onChange={handleChange}
                        autoComplete="email"
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <span id="email-error" className="form-error" role="alert">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        placeholder="+92xxxxxxxxxx"
                        value={fields.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="form-input"
                        placeholder="Your Company"
                        value={fields.company}
                        onChange={handleChange}
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="service" className="form-label">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        className="form-select"
                        value={fields.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget" className="form-label">Project Budget</label>
                      <select
                        id="budget"
                        name="budget"
                        className="form-select"
                        value={fields.budget}
                        onChange={handleChange}
                      >
                        <option value="">Select a range</option>
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={`form-group${errors.subject ? ' form-group--error' : ''}`}>
                    <label htmlFor="subject" className="form-label">
                      Subject <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="form-input"
                      placeholder="How can we help you?"
                      value={fields.subject}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <span id="subject-error" className="form-error" role="alert">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className={`form-group${errors.message ? ' form-group--error' : ''}`}>
                    <label htmlFor="message" className="form-label">
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Tell us about your project, requirements or questions..."
                      rows={5}
                      value={fields.message}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <span id="message-error" className="form-error" role="alert">
                        {errors.message}
                      </span>
                    )}
                    <span className="form-char-count">
                      {fields.message.length} characters (min 20)
                    </span>
                  </div>

                  <Button
                    variant="primary"
                    type="submit"
                    loading={submitting}
                    disabled={submitting}
                    className="btn--lg"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section--bg" aria-labelledby="faq-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Common Questions"
            heading="Frequently Asked Questions"
            subtext="Answers to the questions we hear most often from businesses considering working with us."
            centered
          />
          <div className="faq-list reveal" role="list">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item${openFaq === faq.id ? ' faq-item--open' : ''}`}
                role="listitem"
              >
                <button
                  className="faq-item__question"
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  aria-expanded={openFaq === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className="faq-item__chevron"
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-answer-${faq.id}`}
                  className="faq-item__answer"
                  role="region"
                  aria-hidden={openFaq !== faq.id}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}