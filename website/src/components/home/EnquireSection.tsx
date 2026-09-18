import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { contact } from "@/lib/content";

export default function EnquireSection() {
  return (
    <section id="enquire" className="bg-paper py-24 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <Eyebrow>Contact Us</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-tight font-bold text-ink sm:text-5xl">
            Let&apos;s talk about your next address.
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            Whether you&apos;re buying a home, securing a serviced plot or planning an event venue, our property
            consultants will walk you through what&apos;s available and what&apos;s coming.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href={contact.phoneHref} variant="outline-dark">
              Call {contact.phoneDisplay}
            </ButtonLink>
          </div>

          <figure className="mt-12">
            <div className="bg-panel p-3">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/estate-street.jpg"
                  alt="Contemporary white Dav-Ric Homes residences with timber screens behind a landscaped street frontage"
                  fill
                  sizes="(min-width: 1024px) 34rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-3 text-xs text-muted">Artist&apos;s impression</figcaption>
          </figure>

          <dl className="mt-10 grid gap-6 text-[0.95rem] sm:grid-cols-2">
            <div>
              <dt className="eyebrow text-maroon">Email</dt>
              <dd className="mt-2">
                <a href={contact.emailHref} className="text-ink hover:text-red">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-maroon">Nigeria Office</dt>
              <dd className="mt-2">{contact.nigeriaOffice}</dd>
            </div>
          </dl>
        </div>

        <div className="lg:pt-4">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
