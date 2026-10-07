"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link
            href="/"
            className="brand"
            aria-label="PixelFlux home"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={28}
              height={28}
              className="brand-mark"
              priority
            />
            <span>PixelFlux</span>
          </Link>

          <button
            type="button"
            className={`nav-toggle ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
            <span className="nav-toggle-bars">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <nav
        className={`nav-overlay ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="container">
          <div className="nav-overlay-list">
            {NAV_LINKS.map((link, i) => (
              <div key={link.href} className="nav-overlay-item">
                <span className="nav-overlay-index mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Link
                  href={link.href}
                  className={`nav-overlay-link ${
                    isActive(link.href) ? "active" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="nav-overlay-footer">
            <div className="nav-overlay-social">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Instagram
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Dribbble
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                LinkedIn
              </a>
            </div>

            <a href={`mailto:${SITE.email}`} className="nav-overlay-contact">
              {SITE.email}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
