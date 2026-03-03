"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import envelopeBg from "@/app/assets/wax-seal-envelope.png";

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
    setPhase("opening");
    // No flap to wait for — brief pause for tactile feel, then slide away
    setTimeout(() => setPhase("leaving"), 150);
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

  const isLeaving = phase === "leaving";

  return (
    <motion.div
      className="fixed inset-0 z-50 select-none overflow-hidden"
      style={{ cursor: phase === "closed" ? "pointer" : "default" }}
      animate={{ y: isLeaving ? "-100%" : "0%" }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (isLeaving) setPhase("done");
      }}
      onClick={phase === "closed" ? handleOpen : undefined}
    >
      {/* ── Full-screen envelope photograph ── */}
      <div className="absolute inset-0">
        <Image
          src={envelopeBg}
          alt="Wedding envelope with H&T wax seal"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
      </div>

      {/* ── Edge vignette — adds depth without hiding the photo ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.22) 100%)",
        }}
      />

      {/* ── Bottom gradient — keeps the hint text readable ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: "10rem",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.38) 0%, transparent 100%)",
        }}
      />

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
          style={{ color: "rgba(255, 255, 255, 0.88)" }}
        >
          Scroll or tap to open
        </p>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            className="w-4 h-4"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EnvelopeHero;
