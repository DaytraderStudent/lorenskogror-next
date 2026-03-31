"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Briefcase, ShieldCheck } from "lucide-react";

const stats = [
  { value: "20+", label: "Ansatte", icon: Users },
  { value: "40+", label: "Års erfaring", icon: Award },
  { value: "500+", label: "Prosjekter", icon: Briefcase },
  { value: "4", label: "Sertifiseringer", icon: ShieldCheck },
];

const partners = [
  { src: "/images/variant-vvs.png", label: "Variant VVS" },
  { src: "/images/oso.png", label: "OSO" },
  { src: "/images/oras.png", label: "ORAS" },
  { src: "/images/bd.png", label: "Brødrene Dahl" },
  { src: "/images/heidenreich.jpg", label: "Heidenreich" },
];

function StatCard({
  value,
  label,
  icon: Icon,
  index,
}: {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border border-teal-100 bg-white/70 backdrop-blur-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
    >
      {/* Subtle glass glow */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-teal-100/40 blur-2xl pointer-events-none group-hover:bg-teal-200/50 transition-colors" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 ring-1 ring-teal-200/50 mb-4">
          <Icon className="h-6 w-6 text-teal-600" />
        </div>
        <div className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-1">
          {value}
        </div>
        <div className="text-sm text-slate-500 font-medium">{label}</div>
      </div>
    </motion.div>
  );
}

export default function TrustSection() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        {/* Partner Marquee */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
            Samarbeidspartnere vi stoler pa
          </p>
        </div>

        <div
          className="relative overflow-hidden py-6"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <style>{`
            @keyframes marquee-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .partner-marquee {
              animation: marquee-scroll 30s linear infinite;
            }
          `}</style>

          <div className="partner-marquee flex gap-16 whitespace-nowrap">
            {[...partners, ...partners, ...partners, ...partners].map(
              (p, i) => (
                <div
                  key={i}
                  className="flex items-center flex-shrink-0 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={p.src}
                    alt={p.label}
                    width={120}
                    height={60}
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
