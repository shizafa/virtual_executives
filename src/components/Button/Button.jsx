import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({
  variant = 'primary',
  children,
  onClick,
  to,
  href,
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
}) {
  const classes = `btn btn--${variant}${loading ? ' btn--loading' : ''}${disabled ? ' btn--disabled' : ''} ${className}`.trim();

  const content = loading ? (
    <>
      <span className="btn__spinner" aria-hidden="true" />
      <span>Processing...</span>
    </>
  ) : children;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled || loading}>
      {content}
    </button>
  );
}
