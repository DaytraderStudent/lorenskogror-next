"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const services = [
  { title: "Sanitæranlegg", desc: "Komplett sanitærinstallasjon for næring og bolig.", image: "/images/service-sanitaer.jpg" },
  { title: "Varmeanlegg", desc: "Energieffektive varmeløsninger og gulvvarme.", image: "/images/service-varme.jpg" },
  { title: "Sprinkelanlegg", desc: "Brannsikring med godkjente sprinkeranlegg.", image: "/images/service-sprinkler.jpg" },
  { title: "Kjøleanlegg", desc: "Kjølesystemer for industrielle og kommersielle bygg.", image: "/images/service-kjole.jpg" },
  { title: "Gassanlegg", desc: "Installasjon og vedlikehold av gassanlegg.", image: "/images/service-gass.jpg" },
  { title: "Baderom", desc: "Totalrenovering og nybygg av baderom.", image: "/images/service-bad.jpg" },
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
  { src: "/images/ren.jpg", label: "Rørentreprenørene" },
  { src: "/images/nemko.jpg", label: "Nemko" },
  { src: "/images/gfa.jpg", label: "Godkjent for ansvarsrett" },
  { src: "/images/mestermerke.jpg", label: "Mesterbedrift" },
  { src: "/images/miljofyrtarn.png", label: "Miljøfyrtårn" },
];

export default function OmOssPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-teal-950">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/50 to-teal-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Om Lørenskog Rørleggerbedrift</h1>
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
                  Over 40 års erfaring med VVS
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Lørenskog Rørleggerbedrift AS er en tradisjonsrik
                    mesterbedrift med over 40 års erfaring. Med rundt 20 ansatte
                    leverer vi komplette VVS-løsninger for både næring og bolig
                    i Lørenskog, Lillestrøm, Rælingen, Skedsmo og hele Akershus.
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

      {/* Services — same image cards as homepage */}
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

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                  <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                    <Image
                      src={s.image}
                      alt={`${s.title} i Lørenskog og Akershus`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10 group-hover:from-slate-900/95 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading font-semibold text-xl text-white mb-1">
                        {s.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
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

      {/* Certifications — same style as homepage */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-teal-600 font-medium text-sm mb-2 uppercase tracking-wider">
                Kvalitet og trygghet
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Våre sertifiseringer
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
            {certifications.map((cert) => (
              <StaggerItem key={cert.label} className="text-center">
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-100 mb-3 hover:shadow-lg transition-all duration-300">
                    <Image
                      src={cert.src}
                      alt={cert.label}
                      width={100}
                      height={80}
                      className="h-16 w-auto mx-auto object-contain"
                    />
                  </div>
                  <p className="text-xs font-medium text-slate-600">
                    {cert.label}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
