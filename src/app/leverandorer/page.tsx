"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import {
  Bath,
  Droplets,
  Flame,
  Grip,
  Cylinder,
  Wind,
  GlassWater,
} from "lucide-react";

const categories = [
  {
    icon: Bath,
    title: "Bad",
    suppliers: [
      { name: "Porsgrund Bad", url: "https://www.porsgrund.com" },
      { name: "Ifø Bad", url: "https://www.ifo.se" },
      { name: "Foss Bad", url: "https://www.fossbad.no" },
      { name: "Tema Bad", url: "https://www.temabad.no" },
      { name: "VVS Marketing", url: "https://www.vvsmarketing.no" },
      { name: "Dansani", url: "https://www.dansani.no" },
    ],
  },
  {
    icon: Droplets,
    title: "Sanitær / Porselen",
    suppliers: [
      { name: "IFØ", url: "https://www.ifo.se" },
      { name: "Gustavsberg", url: "https://www.gustavsberg.com" },
      { name: "Porsgrunds Porselenfabrikk AS", url: "https://www.porsgrund.com" },
      { name: "Holtan Trading", url: "https://www.holtantrading.no" },
      { name: "VVS Marketing", url: "https://www.vvsmarketing.no" },
    ],
  },
  {
    icon: Flame,
    title: "Varme / Gulvvarme",
    suppliers: [
      { name: "OSO", url: "https://www.osohotwater.no" },
      { name: "CTC Ferrofil", url: "https://www.ctc.no" },
      { name: "Variant VVS", url: "https://www.variantvvs.no" },
      { name: "Høiax", url: "https://www.hoiax.no" },
    ],
  },
  {
    icon: Grip,
    title: "Armatur",
    suppliers: [
      { name: "Mora", url: "https://www.mora.se" },
      { name: "Korsbakken Trading", url: "https://www.korsbakken.no" },
      { name: "Grohe", url: "https://www.grohe.no" },
      { name: "Hans Grohe", url: "https://www.hansgrohe.no" },
      { name: "ORAS Armatur", url: "https://www.oras.com/no" },
      { name: "FM Mattson", url: "https://www.fmmattsson.se" },
      { name: "Vola", url: "https://www.vola.com" },
    ],
  },
  {
    icon: Cylinder,
    title: "Tanker / Utskillere",
    suppliers: [
      { name: "Odin Maskin", url: "https://www.odinmaskin.no" },
      { name: "Vestfold Plast", url: "https://www.vestfoldplast.no" },
    ],
  },
  {
    icon: Wind,
    title: "Varmepumper",
    suppliers: [
      { name: "Variant VVS", url: "https://www.variantvvs.no" },
      { name: "Brødrene Dahl", url: "https://www.dahl.no" },
      { name: "Qvantum", url: "https://www.qvantum.se" },
    ],
  },
  {
    icon: GlassWater,
    title: "Tappevannsystemer",
    suppliers: [
      { name: "Armaturjonsson", url: "https://www.armaturjonsson.no" },
    ],
  },
];

export default function LeverandorerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-teal-950">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/50 to-teal-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Våre VVS-leverandører i Lørenskog
          </h1>
          <p className="text-teal-200/80 text-lg">
            Vi samarbeider med ledende leverandører i VVS-bransjen for å levere kvalitet til kunder i Lørenskog og Akershus
          </p>
        </div>
      </section>

      {/* Supplier grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-teal-700 font-medium text-sm mb-2 uppercase tracking-wider">
                Produkter og merker
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Våre leverandører etter kategori
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <StaggerItem key={cat.title}>
                <Card className="h-full border-0 ring-1 ring-slate-100 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                        <cat.icon className="size-5 text-teal-600" />
                      </div>
                      <CardTitle className="text-lg">{cat.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cat.suppliers.map((s) => (
                        <li
                          key={s.name}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 hover:text-teal-800 hover:underline transition-colors cursor-pointer"
                          >
                            {s.name}
                          </a>
                        </li>
                      ))}
                    </ul>
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
