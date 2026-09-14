"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Stories", href: "/stories" },
  { label: "Categories", href: "/categories" },
  { label: "Archive", href: "/archive" },
  { label: "About", href: "/about" },
  { label: "Search", href: "/search" },
];

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PrimaryNavigation() {
  const pathname = usePathname() ?? "/";

  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-wrap gap-x-5 gap-y-3 text-xs uppercase tracking-[0.14em] text-muted">
        {navigationItems.map((item) => {
          const isCurrent = isCurrentPath(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                aria-current={isCurrent ? "page" : undefined}
                className={
                  isCurrent
                    ? "font-semibold text-rust underline decoration-rust underline-offset-6"
                    : "hover:text-foreground hover:underline"
                }
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
