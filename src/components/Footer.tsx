import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/leverandorer", label: "Leverandører" },
  { href: "/miljo", label: "Miljø" },
  { href: "/kontakt", label: "Kontakt" },
];

const certifications = [
  { src: "/images/ren.jpg", alt: "Rørentreprenørene" },
  { src: "/images/nemko.jpg", alt: "Nemko" },
  { src: "/images/gfa.jpg", alt: "Godkjent for ansvarsrett" },
  { src: "/images/mestermerke.jpg", alt: "Mesterbedrift" },
  { src: "/images/miljofyrtarn.png", alt: "Miljøfyrtårn" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Lørenskog Rørleggerbedrift"
                width={364}
                height={60}
                className="h-10 w-auto brightness-0 invert"
                unoptimized
              />
            </div>
            <p className="text-teal-200/70 text-sm leading-relaxed">
              Tradisjonsrik mesterbedrift med over 40 års erfaring innen VVS.
              Vi leverer kvalitetsarbeid med fokus på miljø og bærekraft.
            </p>
            <p className="text-teal-200/70 text-sm mt-3">
              Vi betjener Lørenskog, Lillestrøm, Rælingen, Skedsmo og hele Akershus.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4">
              Navigasjon
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-teal-200/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+4792258585"
                  className="flex items-center gap-2.5 text-sm text-teal-200/70 hover:text-white transition-colors"
                >
                  <Phone className="size-4 text-teal-400" />
                  +47 922 58 585
                </a>
              </li>
              <li>
                <a
                  href="mailto:mail@lorenskogror.no"
                  className="flex items-center gap-2.5 text-sm text-teal-200/70 hover:text-white transition-colors"
                >
                  <Mail className="size-4 text-teal-400" />
                  mail@lorenskogror.no
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-teal-200/70">
                <MapPin className="size-4 text-teal-400 mt-0.5 shrink-0" />
                <span>
                  Lørenskog Rørleggerbedrift AS
                  <br />
                  Solheimveien 62
                  <br />
                  1473 Lørenskog
                </span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4">
              Sertifiseringer
            </h3>
            <div className="flex items-center gap-4 flex-wrap">
              {certifications.map((cert) => (
                <Image
                  key={cert.alt}
                  src={cert.src}
                  alt={cert.alt}
                  width={60}
                  height={60}
                  className="h-12 w-auto rounded bg-white p-1"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-teal-900">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-teal-300/70">
          <p>&copy; {new Date().getFullYear()} Lørenskog Rørleggerbedrift AS. Org.nr: 935 935 024</p>
          <p>Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
}
