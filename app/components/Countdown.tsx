"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import reception from "@/app/assets/reception-blurred.jpeg";
import Image from "next/image";

interface TimeUnit {
  value: number;
  label: string;
}

function getTimeRemaining(): TimeUnit[] {
  const target = new Date("2026-09-12T00:00:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

interface CountUnitProps {
  value: number;
  label: string;
  index: number;
}

function CountUnit({ value, label, index }: CountUnitProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-3"
    >
      {/* Card */}
      <div
        className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg flex items-center justify-center border-ornate"
        style={{
          backgroundColor: "hsl(40 35% 98%)",
          boxShadow:
            "0 8px 32px hsl(20 25% 15% / 0.12), 0 2px 8px hsl(20 25% 15% / 0.08)",
        }}
      >
        {/* Subtle top-to-bottom gradient split */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, hsl(40 30% 96% / 0.6) 0%, transparent 50%, hsl(35 25% 90% / 0.4) 100%)",
          }}
        />

        {/* Number — AnimatePresence swaps the digit when it changes */}
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="font-display select-none relative z-10"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              color: "hsl(20 25% 18%)",
              lineHeight: 1,
            }}
          >
            {pad(value)}
          </motion.span>
        </AnimatePresence>

        {/* Horizontal crease line */}
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: "50%",
            height: "1px",
            background: "hsl(35 25% 85% / 0.8)",
          }}
        />
      </div>

      {/* Label */}
      <p
        className="font-body tracking-[0.25em] uppercase text-xs"
        style={{ color: "hsl(20 15% 50%)" }}
      >
        {label}
      </p>
    </motion.div>
  );
}

const Countdown = () => {
  const [units, setUnits] = useState<TimeUnit[]>(getTimeRemaining);
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — render placeholder until client mounts
  useEffect(() => {
    const mountTimer = setTimeout(() => setMounted(true), 0);
    const id = setInterval(() => {
      setUnits(getTimeRemaining());
    }, 1000);
    return () => {
      clearTimeout(mountTimer);
      clearInterval(id);
    };
  }, []);

  const isOver =
    mounted &&
    units[0].value === 0 &&
    units[1].value === 0 &&
    units[2].value === 0 &&
    units[3].value === 0;

  return (
    <section className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Soft radial background accent */}
      <div className="absolute top-0 right-0 w-full h-full opacity-40">
        <Image
          src={reception}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-background" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, hsl(38 70% 50% / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container max-w-4xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent font-body tracking-[0.3em] uppercase text-sm mb-4">
            Mark Your Calendar
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            {isOver ? "The Day Is Here!" : "Counting Down"}
          </h2>
          <div className="decorative-line mt-6 max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
          {!isOver && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-body text-lg mt-6 italic"
              style={{ color: "hsl(20 15% 50%)" }}
            >
              Until we say &ldquo;I do&rdquo;
            </motion.p>
          )}
        </motion.div>

        {/* Timer grid */}
        {!isOver ? (
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 flex-col sm:flex-row">
            {mounted
              ? units.map((unit, i) => (
                  <CountUnit
                    key={unit.label}
                    value={unit.value}
                    label={unit.label}
                    index={i}
                  />
                ))
              : // SSR placeholder — same layout, zeroed out
                [
                  { value: 0, label: "Days" },
                  { value: 0, label: "Hours" },
                  { value: 0, label: "Minutes" },
                  { value: 0, label: "Seconds" },
                ].map((unit, i) => (
                  <CountUnit
                    key={unit.label}
                    value={unit.value}
                    label={unit.label}
                    index={i}
                  />
                ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p
              className="font-display text-3xl md:text-5xl"
              style={{ color: "hsl(38 70% 50%)" }}
            >
              Today we celebrate love ♥
            </p>
          </motion.div>
        )}

        {/* Ornamental footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <div className="decorative-line w-64">
            <span className="text-accent text-lg">♥</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
