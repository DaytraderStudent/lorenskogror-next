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
      "Porsgrund Bad",
      "Ifø Bad",
      "Foss Bad",
      "Tema Bad",
      "VVS Marketing",
      "Dansani",
    ],
  },
  {
    icon: Droplets,
    title: "Sanitær / Porselen",
    suppliers: [
      "IFØ",
      "Gustavsberg",
      "Porsgrunds Porselenfabrikk AS",
      "Holtan Trading",
      "VVS Marketing",
    ],
  },
  {
    icon: Flame,
    title: "Varme / Gulvvarme",
    suppliers: ["OSO", "CTC Ferrofil", "Variant VVS", "Høiax"],
  },
  {
    icon: Grip,
    title: "Armatur",
    suppliers: [
      "Mora",
      "Korsbakken Trading",
      "Grohe",
      "Hans Grohe",
      "ORAS Armatur",
      "FM Mattson",
      "Vola",
    ],
  },
  {
    icon: Cylinder,
    title: "Tanker / Utskillere",
    suppliers: ["Odin Maskin", "Vestfold Plast"],
  },
  {
    icon: Wind,
    title: "Varmepumper",
    suppliers: ["Variant VVS", "Brødrene Dahl", "Qvantum"],
  },
  {
    icon: GlassWater,
    title: "Tappevannsystemer",
    suppliers: ["Armaturjonsson"],
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
            Leverandører
          </h1>
          <p className="text-teal-200/80 text-lg">
            Vi samarbeider med ledende leverandører i VVS-bransjen
          </p>
        </div>
      </section>

      {/* Supplier grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-teal-600 font-medium text-sm mb-2 uppercase tracking-wider">
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
                          key={s}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                          {s}
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
