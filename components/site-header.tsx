"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsList, BsMortarboardFill, BsX } from "react-icons/bs";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/teachers", label: "Teachers" },
  { href: "/notices", label: "Notices" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell sticky top-0 z-50">
      <div className="site-container">
        <div className="flex min-h-[72px] items-center justify-between gap-3 py-2 sm:min-h-[88px] sm:gap-4 sm:py-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-school-red to-school-redDark text-white shadow-[0_10px_24px_rgba(176,16,48,0.28)]">
              <BsMortarboardFill className="text-xl" aria-hidden="true" />
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="truncate font-heading text-[0.98rem] font-extrabold tracking-tight text-school-ink sm:text-[1.08rem]">
                Newaz Ali Ideal School
              </span>
              <span className="mt-1 hidden text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-school-red sm:block">
                Est. 2007
              </span>
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-school-border bg-white text-school-ink shadow-sm lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <BsX className="text-xl" /> : <BsList className="text-xl" />}
          </button>

          <nav
            className={clsx(
              "absolute left-0 top-full max-h-[calc(100vh-4.5rem)] w-full overflow-y-auto border-b border-school-border bg-white px-4 py-4 shadow-soft lg:static lg:max-h-none lg:w-auto lg:overflow-visible lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none",
              open ? "block" : "hidden lg:block",
            )}
          >
            <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-1">
              {navItems.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "block rounded-full px-4 py-3 text-sm font-bold transition-colors",
                        active ? "bg-[rgba(176,16,48,0.1)] text-school-red" : "text-[rgba(17,17,17,0.72)] hover:bg-[rgba(176,16,48,0.07)] hover:text-school-red",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
