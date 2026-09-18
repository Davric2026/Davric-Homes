import Image from "next/image";
import Link from "next/link";
import { contact, footerCompany, footerDevelopments } from "@/lib/content";

function FooterHeading({ children }: { children: string }) {
  return <h2 className="eyebrow text-white">{children}</h2>;
}

export default function Footer() {
  return (
    <footer className="bg-ink text-[0.92rem] text-white/65">
      <div className="container-x grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <Image
            src="/brand/logo-light.png"
            alt="Dav-Ric Homes"
            width={144}
            height={48}
            className="h-12 w-auto"
          />
          <p className="mt-6 font-display text-xl text-white">Crafting Homes. Building Legacies.</p>
          <p className="mt-2 italic">The Real Estate Development arm of the Dav-Ric Group.</p>
          <span aria-hidden className="mt-6 block h-0.5 w-12 bg-red" />
        </div>

        <nav aria-label="Developments">
          <FooterHeading>Developments</FooterHeading>
          <ul className="mt-5 space-y-3">
            {footerDevelopments.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <FooterHeading>Company</FooterHeading>
          <ul className="mt-5 space-y-3">
            {footerCompany.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <FooterHeading>Reach Us</FooterHeading>
          <ul className="mt-5 space-y-3">
            <li>
              <a href={contact.phoneHref} className="transition-colors hover:text-white">
                {contact.phoneFormal}
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className="transition-colors hover:text-white">
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {contact.website}
              </a>
            </li>
          </ul>
          <address className="mt-7 space-y-4 not-italic">
            <p>
              <span className="block font-bold text-white">Nigeria Office</span>
              {contact.nigeriaOffice}
            </p>
            <p>
              <span className="block font-bold text-white">Canada Office</span>
              {contact.canadaOffice}
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dav-Ric Homes, a member of the Dav-Ric Group. All rights reserved.</p>
          <p className="italic">Our Word is Bond and Our Bond links the World.</p>
        </div>
      </div>
    </footer>
  );
}
