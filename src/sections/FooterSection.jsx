export function FooterSection({ text }) {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        <p className="text-sm text-muted">{text}</p>
        <a href="#home" className="text-sm text-muted transition hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
