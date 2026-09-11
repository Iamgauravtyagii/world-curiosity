"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "Tags", href: "/tags" },
  { label: "Archive", href: "/archive" },
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
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {navigationItems.map((item) => {
          const isCurrent = isCurrentPath(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                aria-current={isCurrent ? "page" : undefined}
                className={isCurrent ? "font-medium underline underline-offset-4" : "hover:underline"}
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
