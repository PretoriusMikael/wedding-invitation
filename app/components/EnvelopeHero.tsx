"use client";

import { useState, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import envelopeBg from "@/app/assets/wax-seal-envelope.png";

type Phase = "closed" | "opening" | "leaving" | "done";

const EnvelopeHero = () => {
  const [phase, setPhase] = useState<Phase>("closed");

  // ── Radial mask values ────────────────────────────────────────────────────
  // maskProgress (0 → 1) drives a transparent "hole" that grows from the
  // centre of the envelope outward, erasing it like a dissolving wax seal.
  const maskProgress = useMotionValue(0);
  const innerPct = useTransform(maskProgress, [0, 1], [-20, 160]);
  const outerPct = useTransform(maskProgress, [0, 1], [0, 180]);
  // At progress=0 : transparent -20%, black 0%  → whole element visible
  // At progress=1 : transparent 160%, black 180% → whole element invisible
  const maskImage = useMotionTemplate`radial-gradient(circle, transparent ${innerPct}%, black ${outerPct}%)`;

  // ── Lock scroll while overlay is active ───────────────────────────────────
  useEffect(() => {
    if (phase === "done") return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [phase]);

  // ── Drive the mask when "leaving" ─────────────────────────────────────────
  useEffect(() => {
    if (phase !== "leaving") return;
    maskProgress.set(0);
    const controls = animate(maskProgress, 1, {
      duration: 1.15,
      ease: [0.2, 0, 0.65, 1],
      onComplete: () => setPhase("done"),
    });
    return () => controls.stop();
  }, [phase, maskProgress]);

  // ── Trigger ───────────────────────────────────────────────────────────────
  const handleOpen = useCallback(() => {
    if (phase !== "closed") return;
    // Play the opening animation (lift + ring pulses), then dissolve
    setPhase("opening");
    setTimeout(() => setPhase("leaving"), 900);
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

  // Touch-swipe trigger
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

  const isOpening = phase === "opening";
  const isLeaving = phase === "leaving";

  return (
    <motion.div
      className="fixed inset-0 z-50 select-none overflow-hidden"
      style={{
        cursor: phase === "closed" ? "pointer" : "default",
        // Apply the growing-hole mask during "leaving"; no mask otherwise
        WebkitMaskImage: isLeaving ? maskImage : undefined,
        maskImage: isLeaving ? maskImage : undefined,
      }}
      // Subtle lift + zoom during opening; continue drifting while dissolving
      animate={{
        scale: isLeaving ? 1.07 : isOpening ? 1.03 : 1,
        y: isLeaving ? -20 : isOpening ? -8 : 0,
      }}
      transition={{
        scale: {
          duration: isLeaving ? 1.15 : 0.65,
          ease: [0.4, 0, 0.2, 1],
        },
        y: {
          duration: isLeaving ? 1.15 : 0.65,
          ease: [0.4, 0, 0.2, 1],
        },
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

      {/* ── Edge vignette ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.22) 100%)",
        }}
      />

      {/* ── Bottom gradient for hint readability ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: "10rem",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.40) 0%, transparent 100%)",
        }}
      />

      {/*
       * ── Seal-break ring pulses ─────────────────────────────────────────
       * Two rings emanate from the wax seal (image centre) when "opening".
       * They complete within the 900 ms opening window and are invisible
       * in all other phases.
       */}

      {/* Ring 1 — immediate */}
      <motion.div
        className="absolute z-20 pointer-events-none rounded-full"
        style={{
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
          width: "7rem",
          height: "7rem",
          border: "2px solid rgba(255, 255, 255, 0.8)",
          boxShadow: "0 0 16px rgba(255, 255, 255, 0.18)",
        }}
        animate={
          isOpening
            ? { scale: [1, 3.0], opacity: [0.85, 0] }
            : { scale: 1, opacity: 0 }
        }
        transition={{ duration: 0.75, ease: "easeOut" }}
      />

      {/* Ring 2 — delayed for ripple */}
      <motion.div
        className="absolute z-20 pointer-events-none rounded-full"
        style={{
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
          width: "7rem",
          height: "7rem",
          border: "1.5px solid rgba(255, 255, 255, 0.45)",
        }}
        animate={
          isOpening
            ? { scale: [1, 4.2], opacity: [0.6, 0] }
            : { scale: 1, opacity: 0 }
        }
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
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
