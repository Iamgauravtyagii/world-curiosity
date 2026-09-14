import type { ReactNode } from "react";

export function EditorialPageCard({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1 bg-background p-3 sm:p-4 lg:p-6" id="main-content">
      <div className="min-h-full rounded-md border border-border/70 bg-white shadow-[0_8px_24px_rgb(33_31_26_/_0.06)]">
        {children}
      </div>
    </main>
  );
}
