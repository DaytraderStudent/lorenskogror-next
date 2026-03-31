"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const partners = [
  { src: "/images/variant-vvs.png", label: "Variant VVS" },
  { src: "/images/oso.png", label: "OSO" },
  { src: "/images/oras.png", label: "ORAS" },
  { src: "/images/bd.png", label: "Brødrene Dahl" },
  { src: "/images/heidenreich.jpg", label: "Heidenreich" },
];

// Repeat enough times to always fill the screen + overflow
const repeated = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

export default function PartnerMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;

    function animate() {
      posRef.current -= 0.5;
      // Each "set" is half the total width (we have 6 sets, so one set = 1/6)
      // Reset after 3 sets have scrolled (half of total) for seamless loop
      const halfWidth = track!.scrollWidth / 2;
      if (Math.abs(posRef.current) >= halfWidth) {
        posRef.current = 0;
      }
      track!.style.transform = `translateX(${posRef.current}px)`;
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

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
        <div
          ref={trackRef}
          className="flex items-center gap-16 will-change-transform"
          style={{ width: "max-content" }}
        >
          {repeated.map((p, i) => (
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
