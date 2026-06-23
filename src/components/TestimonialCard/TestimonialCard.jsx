import { Star } from 'lucide-react';
import './TestimonialCard.css';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__stars" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={15} fill="#007AFF" color="#007AFF" />
        ))}
      </div>
      <blockquote className="testimonial-card__quote">
        &ldquo;{testimonial.review}&rdquo;
      </blockquote>
      <div className="testimonial-card__author">
        <div
          className="testimonial-card__avatar"
          style={{ backgroundColor: testimonial.avatarColor }}
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div className="testimonial-card__info">
          <span className="testimonial-card__name">{testimonial.name}</span>
          <span className="testimonial-card__role">
            {testimonial.role}, {testimonial.company}
          </span>
        </div>
      </div>
    </div>
  );
}
