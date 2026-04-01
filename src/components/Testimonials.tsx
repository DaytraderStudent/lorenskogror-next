"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const testimonials = [
  {
    quote:
      "Profesjonelt arbeid fra start til slutt. De var presise, ryddet etter seg, og holdt prisen de hadde oppgitt.",
    author: "Kari Hansen",
    role: "Boligeier",
    location: "Lørenskog",
  },
  {
    quote:
      "Vi har brukt Lørenskog Rørleggerbedrift i mange år til vedlikehold av varmeanlegget vårt. Alltid pålitelige og grundige.",
    author: "Magnus Eriksen",
    role: "Driftsleder",
    location: "Akershus Universitetssykehus",
  },
  {
    quote:
      "Totalrenovering av badet ble levert på tid og under budsjett. Svært fornøyd med kvaliteten.",
    author: "Lise Andersen",
    role: "Boligeier",
    location: "Lillestrøm",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-teal-700 font-medium text-sm mb-2 uppercase tracking-wider">
            Kundeomtaler
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
            Hva kundene sier
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto"
          onMouseMove={handleMouseMove}
        >
          {/* Oversized index number with parallax */}
          <motion.div
            aria-hidden="true"
            className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 text-[16rem] sm:text-[22rem] md:text-[28rem] font-bold text-teal-600/[0.08] select-none pointer-events-none leading-none tracking-tighter"
            style={{ x: numberX, y: numberY }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Main content */}
          <div className="relative flex">
            {/* Left column - vertical label + progress */}
            <div className="hidden sm:flex flex-col items-center justify-center pr-12 md:pr-16 border-r border-slate-200">
              <motion.span
                className="text-xs font-mono text-slate-400 tracking-widest uppercase"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Kundeomtaler
              </motion.span>

              {/* Vertical progress line */}
              <div className="relative h-32 w-px bg-slate-200 mt-8">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-teal-600 origin-top"
                  animate={{
                    height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Center - main content */}
            <div className="flex-1 sm:pl-12 md:pl-16 py-8 sm:py-12">
              {/* Location badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 border border-slate-200 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    {current.location}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Quote with word-by-word reveal */}
              <div className="relative mb-12 min-h-[120px] sm:min-h-[140px]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeIndex}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-[1.2] tracking-tight"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    &ldquo;
                    {current.quote.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.3em]"
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 90 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            transition: {
                              duration: 0.5,
                              delay: i * 0.04,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                          exit: {
                            opacity: 0,
                            y: -10,
                            transition: {
                              duration: 0.2,
                              delay: i * 0.02,
                            },
                          },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                    &rdquo;
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Author row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      className="w-8 h-px bg-teal-600"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      style={{ originX: 0 }}
                    />
                    <div>
                      <p className="text-base font-medium text-slate-900">
                        {current.author}
                      </p>
                      <p className="text-sm text-slate-500">{current.role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons */}
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={goPrev}
                    aria-label="Forrige kundeomtale"
                    className="group relative w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center overflow-hidden hover:border-teal-300 transition-colors cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="relative z-10 text-slate-600 group-hover:text-teal-600 transition-colors"
                    >
                      <path
                        d="M10 12L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>

                  <motion.button
                    onClick={goNext}
                    aria-label="Neste kundeomtale"
                    className="group relative w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center overflow-hidden hover:border-teal-300 transition-colors cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="relative z-10 text-slate-600 group-hover:text-teal-600 transition-colors"
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom ticker */}
          <div className="absolute -bottom-16 left-0 right-0 overflow-hidden opacity-[0.04] pointer-events-none">
            <motion.div
              className="flex whitespace-nowrap text-5xl sm:text-6xl font-bold tracking-tight text-teal-900"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-8">
                  {testimonials.map((t) => t.author).join(" \u2022 ")} \u2022
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
