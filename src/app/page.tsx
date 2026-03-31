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
  Award,
  Leaf,
  Users,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import AnimatedCounter from "@/components/motion/AnimatedCounter";

const services = [
  { icon: Droplets, title: "Sanitæranlegg", desc: "Komplett sanitærinstallasjon for næring og bolig." },
  { icon: Flame, title: "Varmeanlegg", desc: "Energieffektive varmeløsninger og gulvvarme." },
  { icon: ShieldCheck, title: "Sprinkelanlegg", desc: "Brannsikring med godkjente sprinkeranlegg." },
  { icon: Snowflake, title: "Kjøleanlegg", desc: "Kjølesystemer for industrielle og kommersielle bygg." },
  { icon: Fuel, title: "Gassanlegg", desc: "Installasjon og vedlikehold av gassanlegg." },
  { icon: Bath, title: "Baderom", desc: "Totalrenovering og nybygg av baderom." },
];

const stats = [
  { value: 20, suffix: "+", label: "Ansatte", icon: Users },
  { value: 60, suffix: "+", label: "År med erfaring", icon: Award },
  { value: 1, suffix: "", label: "Miljøfyrtårn-sertifisert", icon: Leaf },
  { value: 1, suffix: "", label: "Godkjent opplæringsbedrift", icon: GraduationCap },
];

const certifications = [
  { src: "/images/ren.jpg", label: "REN" },
  { src: "/images/nemko.jpg", label: "Nemko" },
  { src: "/images/gfa.jpg", label: "GFA" },
  { src: "/images/mestermerke.jpg", label: "Mesterbedrift" },
  { src: "/images/miljofyrtarn.png", label: "Miljøfyrtårn" },
];

const partners = [
  { src: "/images/variant-vvs.png", label: "Variant VVS" },
  { src: "/images/oso.png", label: "OSO" },
  { src: "/images/oras.png", label: "ORAS" },
  { src: "/images/bd.png", label: "Brødrene Dahl" },
  { src: "/images/heidenreich.jpg", label: "Heidenreich" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <Image
          src="/images/hero-bg.jpg"
          alt="Rørleggerarbeid"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/80 via-teal-950/60 to-teal-950/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white py-32">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["Mesterbedrift", "Miljøfyrtårn", "Nemko"].map((badge) => (
                <Badge
                  key={badge}
                  className="bg-white/15 text-white border-white/20 backdrop-blur-sm text-xs px-3 py-1"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Vår kompetanse,
              <br />
              <span className="text-teal-300">din trygghet!</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Valg av håndverkere bygger på tillit. Vi kan faget vårt, og vi er
              til å stole på.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white h-12 px-8 text-base"
                render={<Link href="/kontakt" />}
              >
                Kontakt oss
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 h-12 px-8 text-base"
                render={<a href="tel:+4792258585" />}
              >
                Ring 922 58 585
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-teal-600 font-medium text-sm mb-2 uppercase tracking-wider">
                Våre tjenester
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Komplett VVS-leverandør
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <Card className="h-full hover:shadow-lg transition-shadow border-0 ring-1 ring-slate-100">
                  <CardContent className="pt-2">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-24">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-teal-950/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label} className="text-center text-white">
                <stat.icon className="size-8 text-teal-300 mx-auto mb-3" />
                {stat.value > 1 ? (
                  <div className="text-4xl font-heading font-bold mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                ) : (
                  <div className="text-4xl font-heading font-bold mb-1 text-teal-300">&#10003;</div>
                )}
                <p className="text-teal-200/80 text-sm">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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

          <StaggerContainer className="flex flex-wrap items-center justify-center gap-10">
            {certifications.map((cert) => (
              <StaggerItem key={cert.label} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-100 mb-3">
                  <Image
                    src={cert.src}
                    alt={cert.label}
                    width={100}
                    height={80}
                    className="h-16 w-auto mx-auto object-contain"
                  />
                </div>
                <p className="text-xs font-medium text-slate-600">{cert.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-teal-600 font-medium text-sm mb-2 uppercase tracking-wider">
                Samarbeidspartnere
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Våre leverandører
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap items-center justify-center gap-12">
            {partners.map((p) => (
              <StaggerItem key={p.label}>
                <Image
                  src={p.src}
                  alt={p.label}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Ta kontakt for et uforpliktende tilbud
            </h2>
            <p className="text-teal-100 mb-8 text-lg">
              Vi hjelper deg gjerne med ditt neste prosjekt.
            </p>
            <Button
              size="lg"
              className="bg-white text-teal-700 hover:bg-teal-50 h-12 px-8 text-base font-semibold"
              render={<Link href="/kontakt" />}
            >
              Kontakt oss
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
