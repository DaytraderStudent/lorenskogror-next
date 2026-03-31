"use client";

import Image from "next/image";

const partners = [
  { src: "/images/variant-vvs.png", label: "Variant VVS" },
  { src: "/images/oso.png", label: "OSO" },
  { src: "/images/oras.png", label: "ORAS" },
  { src: "/images/bd.png", label: "Brødrene Dahl" },
  { src: "/images/heidenreich.jpg", label: "Heidenreich" },
];

export default function PartnerMarquee() {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-10">
          Samarbeidspartnere vi stoler på
        </p>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <style>{`
          @keyframes partnerScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div
          className="flex gap-20 whitespace-nowrap"
          style={{
            animation: "partnerScroll 25s linear infinite",
            width: "max-content",
          }}
        >
          {/* Exact duplicate: first set + second set = seamless loop */}
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={p.src}
                alt={p.label}
                width={140}
                height={60}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
