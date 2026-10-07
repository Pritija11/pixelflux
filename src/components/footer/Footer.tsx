import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  InstagramIcon,
  DribbbleIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link href="/" className="footer-brand">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={40}
              height={40}
              className="footer-brand-mark"
            />
            PixelFlux
          </Link>

          <div className="footer-links">
            <div className="footer-column">
              <p className="footer-heading">Studio</p>
              <Link href="/work">Work</Link>
              <Link href="/services">Services</Link>
              <Link href="/studio">Studio</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Contact</p>
              <a
                href={`mailto:${SITE.email}`}
                className="footer-icon-row"
              >
                <Mail size={16} strokeWidth={1.7} />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                className="footer-icon-row"
              >
                <Phone size={16} strokeWidth={1.7} />
                {SITE.phone}
              </a>
              <span className="footer-icon-row">
                <MapPin size={16} strokeWidth={1.7} />
                {SITE.address}
              </span>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Elsewhere</p>
              <span className="footer-icon-row">
                <InstagramIcon size={16} strokeWidth={1.7} />
                Instagram
              </span>
              <span className="footer-icon-row">
                <DribbbleIcon size={16} strokeWidth={1.7} />
                Dribbble
              </span>
              <span className="footer-icon-row">
                <LinkedinIcon size={16} strokeWidth={1.7} />
                LinkedIn
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 PixelFlux. All rights reserved.</p>

          <nav className="footer-legal-links" aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
