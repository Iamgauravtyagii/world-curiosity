export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>World Curiosity</p>
        <p>© {currentYear} World Curiosity</p>
      </div>
    </footer>
  );
}
