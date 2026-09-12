export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cinema text-cinema-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="font-display text-xl tracking-[-0.03em]">I Got Curious</p>
        <p className="text-xs uppercase tracking-[0.14em] text-cinema-muted">
          © {currentYear} I Got Curious
        </p>
      </div>
    </footer>
  );
}
