"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  Flame,
  ShieldCheck,
  Snowflake,
  Fuel,
  Bath,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import Testimonials from "@/components/Testimonials";
import PartnerMarquee from "@/components/PartnerMarquee";

const services = [
  { icon: Droplets, title: "Sanitæranlegg", desc: "Komplett sanitærinstallasjon for næring og bolig." },
  { icon: Flame, title: "Varmeanlegg", desc: "Energieffektive varmeløsninger og gulvvarme." },
  { icon: ShieldCheck, title: "Sprinkelanlegg", desc: "Brannsikring med godkjente sprinkeranlegg." },
  { icon: Snowflake, title: "Kjøleanlegg", desc: "Kjølesystemer for industrielle og kommersielle bygg." },
  { icon: Fuel, title: "Gassanlegg", desc: "Installasjon og vedlikehold av gassanlegg." },
  { icon: Bath, title: "Baderom", desc: "Totalrenovering og nybygg av baderom." },
];

const certifications = [
  { src: "/images/ren.jpg", label: "Rørentreprenørene" },
  { src: "/images/nemko.jpg", label: "Nemko" },
  { src: "/images/gfa.jpg", label: "Godkjent for ansvarsrett" },
  { src: "/images/mestermerke.jpg", label: "Mesterbedrift" },
  { src: "/images/miljofyrtarn.png", label: "Miljøfyrtårn" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — FlowMate-inspired fullscreen with visible background image */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
        {/* Background image — visible, not hidden behind overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Rørlegger i arbeid"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Gradient: dark on left for text readability, transparent on right to show image */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-0">
          <div className="max-w-2xl">
            {/* Eyebrow badges */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {["Mesterbedrift", "Miljøfyrtårn", "Nemko-sertifisert"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10 backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Vår kompetanse,
              <br />
              din{" "}
              <span className="text-teal-400">trygghet</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Tradisjonsrik rørleggerbedrift med over 35 års erfaring.
              Vi leverer kvalitetsarbeid innen sanitær, varme,
              sprinkler og baderom i hele Akershus-regionen.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-500 text-white h-14 px-8 text-base font-semibold rounded-full group"
                render={<Link href="/kontakt" />}
              >
                Våre tjenester
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white h-14 px-8 text-base rounded-full backdrop-blur-sm"
                render={<a href="tel:+4792258585" />}
              >
                Ring 922 58 585
              </Button>
            </motion.div>

            {/* Quick stats row */}
            <motion.div
              className="mt-14 flex gap-8 sm:gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {[
                { value: "35+", label: "Års erfaring" },
                { value: "20+", label: "Ansatte" },
                { value: "500+", label: "Prosjekter" },
                { value: "4", label: "Sertifiseringer" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a href="#tjenester" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors cursor-pointer">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </section>


      {/* Partner Marquee */}
      <PartnerMarquee />

      {/* Services */}
      <section id="tjenester" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-teal-600 font-medium text-sm mb-2 uppercase tracking-wider">
                Våre tjenester
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Komplett VVS-leverandør
              </h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Vi tar på oss alle typer oppdrag innenfor VVS og rørleggerarbeid,
                og garanterer kvalitet til avtalt tid og pris.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                  <Card className="h-full border-0 ring-1 ring-slate-100 hover:shadow-xl hover:ring-teal-200 transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                        <s.icon className="size-6 text-teal-600" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                        {s.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Certifications */}
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

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Rørleggerarbeid"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ta kontakt for et uforpliktende tilbud
            </h2>
            <p className="text-teal-100 mb-10 text-lg max-w-xl mx-auto">
              Vi hjelper deg gjerne med ditt neste prosjekt — fra
              baderomsrenovering til komplett VVS-anlegg.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-teal-700 hover:bg-teal-50 h-14 px-10 text-base font-semibold rounded-full"
                render={<Link href="/kontakt" />}
              >
                Kontakt oss
              </Button>
              <a
                href="tel:+4792258585"
                className="inline-flex items-center justify-center h-14 px-10 text-base font-medium text-white rounded-full border border-white/30 hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                Ring 922 58 585
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
