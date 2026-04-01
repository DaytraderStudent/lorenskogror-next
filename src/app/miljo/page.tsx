"use client";

import Image from "next/image";
import {
  HardHat,
  Recycle,
  Zap,
  Truck,
  Leaf,
  Globe,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const requirements = [
  { icon: HardHat, title: "Arbeidsmiljø", desc: "Trygge arbeidsforhold og godt HMS-arbeid for alle ansatte." },
  { icon: Recycle, title: "Avfall og ombruk", desc: "Kildesortering, minimering av avfall og gjenbruk av materialer." },
  { icon: Zap, title: "Energi", desc: "Energieffektive løsninger og redusert energiforbruk." },
  { icon: Truck, title: "Innkjøp og transport", desc: "Miljøbevisste innkjøp og optimalisert logistikk." },
];

const policies = [
  "Overholde alle myndighetskrav knyttet til ytre miljø",
  "Kontinuerlig forbedre vårt miljøarbeid og forebygge forurensning",
  "Kildesortere avfall og redusere avfallsmengden",
  "Velge miljøvennlige produkter og leverandører der det er mulig",
  "Redusere energiforbruket i egen virksomhet",
  "Bidra til økt miljøbevissthet blant våre ansatte",
  "Sette konkrete miljømål og følge opp resultater",
];

const sdgs = [
  {
    icon: Heart,
    number: "3",
    title: "God helse og livskvalitet",
    desc: "Vi sikrer trygge arbeidsforhold og godt arbeidsmiljø for alle ansatte.",
  },
  {
    icon: Globe,
    number: "12",
    title: "Ansvarlig forbruk og produksjon",
    desc: "Vi kildesorterer, velger bærekraftige materialer og minimerer avfall.",
  },
  {
    icon: Leaf,
    number: "13",
    title: "Stoppe klimaendringene",
    desc: "Vi jobber aktivt med å redusere utslipp og energiforbruk.",
  },
];

export default function MiljoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-teal-950">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/50 to-teal-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Leaf className="size-10 text-teal-300 mx-auto mb-4" />
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Miljø og bærekraft</h1>
          <p className="text-teal-200/80 text-lg">
            Vi tar ansvar for miljøet i alt vi gjør
          </p>
        </div>
      </section>

      {/* Miljøfyrtårn intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/miljo.jpg"
                  alt="Miljøarbeid"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/images/miljofyrtarn.png"
                    alt="Miljøfyrtårn"
                    width={60}
                    height={60}
                    className="h-12 w-auto"
                  />
                  <p className="text-teal-600 font-medium text-sm uppercase tracking-wider">
                    Miljøfyrtårn-sertifisert
                  </p>
                </div>
                <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">
                  Sertifisert for bærekraft
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Lørenskog Rørleggerbedrift er sertifisert som Miljøfyrtårn.
                    Det betyr at vi systematisk jobber med miljøtiltak i hele
                    virksomheten, og at vi dokumenterer vårt miljøarbeid gjennom
                    årlige klimarapporter.
                  </p>
                  <p>
                    Miljøfyrtårn er Norges mest brukte sertifikat for
                    virksomheter som vil dokumentere sin miljøinnsats og vise
                    samfunnsansvar. Sertifikatet stiller krav innen fire
                    hovedområder.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Requirement areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-teal-600 font-medium text-sm mb-2 uppercase tracking-wider">
                Sertifiseringskrav
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Fire hovedområder
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req) => (
              <StaggerItem key={req.title}>
                <Card className="h-full border-0 ring-1 ring-slate-100 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-2">
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
                      <req.icon className="size-7 text-teal-600" />
                    </div>
                    <h3 className="font-heading font-semibold text-slate-900 mb-2">
                      {req.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {req.desc}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Miljøpolicy */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-teal-600 font-medium text-sm mb-2 uppercase tracking-wider">
                Vårt løfte
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Miljøpolicy
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-teal-50 rounded-2xl p-8">
              <ul className="space-y-4">
                {policies.map((policy) => (
                  <li key={policy} className="flex items-start gap-3">
                    <Leaf className="size-5 text-teal-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 leading-relaxed">{policy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FN Bærekraftsmål */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-teal-600 font-medium text-sm mb-2 uppercase tracking-wider">
                Globale mål
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                FNs bærekraftsmål
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Vårt miljøarbeid bidrar til flere av FNs bærekraftsmål.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sdgs.map((goal) => (
              <StaggerItem key={goal.number}>
                <Card className="h-full border-0 ring-1 ring-slate-100 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center text-white font-heading font-bold text-lg">
                        {goal.number}
                      </div>
                      <goal.icon className="size-6 text-teal-600" />
                    </div>
                    <h3 className="font-heading font-semibold text-slate-900 mb-2">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {goal.desc}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal className="text-center mt-12">
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50"
              render={
                <a
                  href="https://rapportering.miljofyrtarn.no/stats/187093"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Se vår klimarapport
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
