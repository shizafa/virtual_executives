import './SectionHeading.css';

export default function SectionHeading({ eyebrow, heading, subtext, centered = false, light = false }) {
  return (
    <div className={`section-heading${centered ? ' section-heading--centered' : ''}${light ? ' section-heading--light' : ''}`}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{heading}</h2>
      {subtext && <p className="section-heading__sub">{subtext}</p>}
    </div>
  );
}
