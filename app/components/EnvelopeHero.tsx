"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import roughPaper from "@/app/assets/slightly-textured-wallpaper-pattern.jpg";
import Image from "next/image";
import logo from "@/app/assets/ht-logo.jpeg";

type Phase = "closed" | "opening" | "leaving" | "done";

const EnvelopeHero = () => {
  const [phase, setPhase] = useState<Phase>("closed");

  // Lock scroll while the envelope overlay is active
  useEffect(() => {
    if (phase === "done") return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [phase]);

  const handleOpen = useCallback(() => {
    if (phase !== "closed") return;
    // Open the flap, then after the flap animation auto-slide up
    setPhase("opening");
    setTimeout(() => setPhase("leaving"), 700);
  }, [phase]);

  // Wheel trigger
  useEffect(() => {
    if (phase === "done") return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 10) handleOpen();
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [phase, handleOpen]);

  // Touch swipe trigger
  useEffect(() => {
    if (phase === "done") return;
    let startY = 0;
    const onStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const onEnd = (e: TouchEvent) => {
      if (startY - e.changedTouches[0].clientY > 30) handleOpen();
    };
    window.addEventListener("touchstart", onStart);
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [phase, handleOpen]);

  if (phase === "done") return null;

  const isFlapOpen = phase !== "closed";
  const isLeaving = phase === "leaving";

  return (
    <motion.div
      className="fixed inset-0 z-50 select-none overflow-hidden"
      style={{
        backgroundColor: "hsl(var(--envelope))",
        backgroundImage: `url(${roughPaper.src})`,
        backgroundSize: "cover",
        backgroundBlendMode: "soft-light",
        cursor: phase === "closed" ? "pointer" : "default",
      }}
      animate={{ y: isLeaving ? "-100%" : "0%" }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (isLeaving) setPhase("done");
      }}
      onClick={phase === "closed" ? handleOpen : undefined}
    >
      {/* ── Left diagonal fold ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          clipPath: "polygon(0 0, 50% 50%, 0 100%)",
          backgroundColor: "hsl(var(--envelope-dark))",
          backgroundImage: `url(${roughPaper.src})`,
          backgroundSize: "cover",
          backgroundBlendMode: "soft-light",
        }}
      />

      {/* ── Right diagonal fold ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          clipPath: "polygon(100% 0, 50% 50%, 100% 100%)",
          backgroundColor: "hsl(var(--envelope-dark))",
          backgroundImage: `url(${roughPaper.src})`,
          backgroundSize: "cover",
          backgroundBlendMode: "soft-light",
        }}
      />

      {/* ── Bottom fold ── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          clipPath: "polygon(0 100%, 50% 50%, 100% 100%)",
          backgroundColor: "hsl(var(--envelope))",
          backgroundImage: `url(${roughPaper.src})`,
          backgroundSize: "cover",
          backgroundBlendMode: "soft-light",
        }}
      />

      {/* ── Top flap — collapses flat when opening ── */}
      <motion.div
        className="absolute inset-0 z-20"
        animate={{
          clipPath: isFlapOpen
            ? "polygon(0 0, 50% 0%, 100% 0)"
            : "polygon(0 0, 50% 50%, 100% 0)",
        }}
        transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Flap base colour */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "hsl(var(--envelope-flap))",
            backgroundImage: `url(${roughPaper.src})`,
            backgroundSize: "cover",
            backgroundBlendMode: "soft-light",
          }}
        />
        {/* Subtle crease shadow toward the tip */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 55%, hsl(var(--envelope-dark) / 0.22) 100%)",
          }}
        />
      </motion.div>

      {/* ── Wax seal — dissolves as the flap opens ── */}
      <motion.div
        className="absolute z-30 pointer-events-none"
        style={{
          top: "33%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isFlapOpen ? 0 : 1,
          scale: isFlapOpen ? 0.55 : 1,
          y: isFlapOpen ? -24 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <div
          className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center relative"
          style={{
            backgroundColor: "hsl(var(--wax-seal))",
            boxShadow:
              "0 6px 28px hsl(var(--wax-seal) / 0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          <div
            className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full"
            style={{ border: "1.5px solid hsl(var(--palette-blue) / 0.5)" }}
          />
          <span
            className="font-display text-xl md:text-2xl"
            style={{ color: "hsl(var(--palette-blue))" }}
          >
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </span>
        </div>
      </motion.div>

      {/* ── Scroll / tap hint — only shown while closed ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
        style={{ translateX: "-50%" }}
        animate={{
          opacity: phase === "closed" ? 1 : 0,
          y: phase === "closed" ? 0 : 10,
        }}
        transition={{
          delay: phase === "closed" ? 1.2 : 0,
          duration: 0.5,
        }}
      >
        <p
          className="font-body tracking-widest uppercase text-xs"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          Scroll or tap to open
        </p>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            className="w-4 h-4"
            style={{ color: "hsl(var(--palette-amber))" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EnvelopeHero;
