export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <div data-reveal style={{ transitionDelay: `${delay}ms` }} className={className}>
      {children}
    </div>
  );
}
