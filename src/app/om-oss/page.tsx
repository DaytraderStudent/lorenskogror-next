"use client";

import Image from "next/image";
import {
  Droplets,
  Flame,
  ShieldCheck,
  Snowflake,
  Fuel,
  Bath,
  Wrench,
  Building2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const serviceAreas = [
  { icon: Droplets, name: "Sanitæranlegg" },
  { icon: Flame, name: "Varmeanlegg" },
  { icon: ShieldCheck, name: "Sprinkelanlegg" },
  { icon: Snowflake, name: "Kjøleanlegg" },
  { icon: Fuel, name: "Gassanlegg" },
  { icon: Bath, name: "Baderom" },
  { icon: Wrench, name: "Service og vedlikehold" },
  { icon: Building2, name: "Nybygg og rehabilitering" },
];

const clients = [
  "Akershus Universitetssykehus",
  "Boligbedriften Oslo kommune",
  "Forsvarets Forskningsinstitutt",
  "OBOS",
  "Veidekke",
  "NCC",
  "AF Gruppen",
  "Skanska",
];

const certifications = [
  {
    src: "/images/cert-ror.jpg",
    title: "Rørleggersertifikat",
    desc: "Godkjent rørleggerbedrift med sentral godkjenning.",
  },
  {
    src: "/images/cert-nemko.jpg",
    title: "Nemko-sertifisert",
    desc: "Sertifisert for installasjon av elektriske varmeanlegg.",
  },
  {
    src: "/images/cert-ansvar.jpg",
    title: "Sentral godkjenning",
    desc: "Godkjent for ansvarsrett i tiltaksklasse 1 og 2.",
  },
  {
    src: "/images/cert-mester.jpg",
    title: "Mesterbedrift",
    desc: "Medlem av Mesterbrev-ordningen med dokumentert kompetanse.",
  },
];

export default function OmOssPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-teal-950">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/50 to-teal-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Om oss</h1>
          <p className="text-teal-200/80 text-lg">
            Tradisjonsrik mesterbedrift med fokus på kvalitet og miljø
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/plumber.jpg"
                  alt="Rørlegger på jobb"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <p className="text-teal-600 font-medium text-sm mb-2 uppercase tracking-wider">
                  Hvem vi er
                </p>
                <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">
                  Over 60 års erfaring med VVS
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Lørenskog Rørleggerbedrift AS er en tradisjonsrik
                    mesterbedrift med over 40 års erfaring. Med rundt 20 ansatte
                    leverer vi komplette VVS-løsninger for både næring og bolig.
                  </p>
                  <p>
                    Vi er en godkjent opplæringsbedrift og legger stor vekt på
                    faglig utvikling. Våre ansatte holder seg oppdatert på de
                    nyeste teknologiene og metodene innen VVS-faget.
                  </p>
                  <p>
                    Som Miljøfyrtårn-sertifisert bedrift tar vi ansvar for
                    miljøet i alt vi gjør. Vi velger bærekraftige løsninger og
                    jobber kontinuerlig med å redusere vårt miljøavtrykk.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-teal-600 font-medium text-sm mb-2 uppercase tracking-wider">
                Fagområder
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Våre tjenesteområder
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <StaggerItem key={area.name}>
                <div className="bg-white rounded-xl p-5 text-center ring-1 ring-slate-100 hover:shadow-md transition-shadow">
                  <area.icon className="size-7 text-teal-600 mx-auto mb-3" />
                  <p className="text-sm font-medium text-slate-800">{area.name}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Key clients */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-teal-600 font-medium text-sm mb-2 uppercase tracking-wider">
                Referanser
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Noen av våre kunder
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client) => (
              <StaggerItem key={client}>
                <div className="bg-slate-50 rounded-xl px-5 py-4 text-center ring-1 ring-slate-100">
                  <p className="text-sm font-medium text-slate-700">{client}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-teal-600 font-medium text-sm mb-2 uppercase tracking-wider">
                Dokumentert kvalitet
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Sertifiseringer og godkjenninger
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <StaggerItem key={cert.title}>
                <Card className="h-full border-0 ring-1 ring-slate-100 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-2 text-center">
                    <div className="bg-slate-50 rounded-xl p-4 mb-4 inline-block">
                      <Image
                        src={cert.src}
                        alt={cert.title}
                        width={120}
                        height={90}
                        className="h-20 w-auto mx-auto object-contain"
                      />
                    </div>
                    <h3 className="font-heading font-semibold text-slate-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-600">{cert.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
