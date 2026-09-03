import Link from "next/link";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";

const quickLinks = [
  { href: "/notices", label: "Notices" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteFooter() {
  return (
    <footer className="footer-shell text-white">
      <div className="site-container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-heading text-xl font-bold text-white">Newaz Ali Ideal School</h2>
            <p className="mt-4 max-w-sm text-white/70">
              Providing quality education and shaping the future of our students since 2007.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 transition-colors hover:text-school-red">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white">Contact Info</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <BsGeoAlt className="mt-1 shrink-0 text-lg" />
                <span>123 School Street, City</span>
              </li>
              <li className="flex items-start gap-3">
                <BsTelephone className="mt-1 shrink-0 text-lg" />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <BsEnvelope className="mt-1 shrink-0 text-lg" />
                <span>info@school.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <p className="text-center text-sm text-white/70">
          &copy; {new Date().getFullYear()} Newaz Ali Ideal School. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
