export function FooterSection({ text }) {
  return (
    <footer className="relative border-t border-border/60 py-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 lg:px-8">
        <p className="text-sm text-muted">{text}</p>
        <a href="#home" className="cursor-hover-target text-sm text-muted transition hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
