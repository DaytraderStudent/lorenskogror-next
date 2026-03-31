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
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-[marquee_25s_linear_infinite]">
          {/* Two identical sets for seamless loop */}
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center gap-20 px-10">
              {partners.map((p) => (
                <div
                  key={`${set}-${p.label}`}
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
          ))}
        </div>
      </div>
    </section>
  );
}
