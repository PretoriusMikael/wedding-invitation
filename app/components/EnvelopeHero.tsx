"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import roughPaper from "@/app/assets/slightly-textured-wallpaper-pattern.jpg";

type Phase = "closed" | "opening" | "open" | "leaving" | "done";

const EnvelopeHero = () => {
  const [phase, setPhase] = useState<Phase>("closed");

  // Lock scroll behind the overlay while active
  useEffect(() => {
    if (phase === "done") return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [phase]);

  const handleOpen = useCallback(() => {
    if (phase === "closed") {
      // First interaction — open the flap and raise the letter
      setPhase("opening");
      setTimeout(() => setPhase("open"), 1700);
    } else if (phase === "open") {
      // Second interaction — slide the whole overlay away
      setPhase("leaving");
    }
  }, [phase]);

  // Wheel trigger — also blocks scroll-through while animating
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
  const isIdle = phase === "closed" || phase === "open";

  return (
    <motion.div
      className="fixed inset-0 z-50 select-none overflow-hidden"
      style={{
        backgroundColor: "hsl(35 38% 88%)",
        backgroundImage: `url(${roughPaper.src})`,
        backgroundSize: "cover",
        backgroundBlendMode: "soft-light",
        cursor: isIdle ? "pointer" : "default",
      }}
      animate={{ y: isLeaving ? "-100%" : "0%" }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (isLeaving) setPhase("done");
      }}
      onClick={isIdle ? handleOpen : undefined}
    >
      {/* ── Left diagonal fold ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          clipPath: "polygon(0 0, 50% 50%, 0 100%)",
          backgroundColor: "hsl(30 32% 74%)",
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
          backgroundColor: "hsl(30 32% 74%)",
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
          backgroundColor: "hsl(35 42% 82%)",
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
            backgroundColor: "hsl(35 40% 85%)",
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
              "linear-gradient(to bottom, transparent 55%, hsl(30 30% 60% / 0.22) 100%)",
          }}
        />
      </motion.div>

      {/* ── Wax seal — dissolves as the flap opens ── */}
      <motion.div
        className="absolute z-30 pointer-events-none hover:scale-105"
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
            backgroundColor: "hsl(350 50% 38%)",
            boxShadow:
              "0 6px 28px hsl(350 50% 30% / 0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          <div
            className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full"
            style={{ border: "1.5px solid hsl(40 60% 75% / 0.5)" }}
          />
          <span
            className="font-display text-xl md:text-2xl"
            style={{ color: "hsl(40 60% 90%)" }}
          >
            H&amp;T
          </span>
        </div>
      </motion.div>

      {/* ── Address — fades out as the envelope opens ── */}
      {/*<motion.div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        style={{ zIndex: 5 }}
        animate={{ opacity: isFlapOpen ? 0 : 1 }}
        transition={{ duration: 0.35 }}
      >
        <div className="mt-32 md:mt-40 text-center space-y-1 opacity-40">
          <p
            className="font-body tracking-[0.25em] uppercase text-xs"
            style={{ color: "hsl(20 25% 30%)" }}
          >
            To
          </p>
          <p
            className="font-display text-lg md:text-2xl"
            style={{ color: "hsl(20 25% 30%)" }}
          >
            Our Beloved Guests
          </p>
        </div>
      </motion.div>*/}

      {/* ── Invitation letter — rises from inside the envelope pocket ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: 15 }}
      >
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md px-4"
          animate={{
            y: isFlapOpen ? ["-20%", "-55%", "-0%"] : "20%",
            opacity: isFlapOpen ? [0, 1, 1] : 0,
            scale: isFlapOpen ? [0.28, 1.06, 1.0] : 0.88,
          }}
          transition={{
            y: {
              duration: 1.5,
              delay: isFlapOpen ? 0.45 : 0,
              times: [0, 0.52, 1],
              ease: ["easeOut", "easeInOut"],
            },
            opacity: {
              duration: 0.12,
              delay: isFlapOpen ? 0.45 : 0,
            },
            scale: {
              duration: 1.5,
              delay: isFlapOpen ? 0.45 : 0,
              times: [0, 0.52, 1],
              ease: ["easeOut", "easeInOut"],
            },
          }}
        >
          <div
            className="rounded-lg text-center px-8 py-10 md:px-12 md:py-14"
            style={{
              backgroundColor: "hsl(40 35% 98%)",
              boxShadow:
                "0 24px 80px hsl(20 25% 15% / 0.22), 0 4px 16px hsl(20 25% 15% / 0.1)",
            }}
          >
            {/* Top ornament */}
            <div className="flex justify-center mb-6">
              <div className="decorative-line w-32">
                <span style={{ color: "hsl(38 70% 50%)" }}>✦</span>
              </div>
            </div>

            <p
              className="font-body tracking-[0.3em] uppercase text-xs mb-3"
              style={{ color: "hsl(20 15% 50%)" }}
            >
              You are joyfully invited
            </p>
            <p
              className="font-body text-sm mb-5"
              style={{ color: "hsl(38 70% 45%)" }}
            >
              to the wedding of
            </p>

            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight"
              style={{ color: "hsl(20 25% 18%)" }}
            >
              Heinrich
              <br />
              <span
                className="text-2xl sm:text-3xl"
                style={{ color: "hsl(38 70% 50%)" }}
              >
                &amp;
              </span>
              <br />
              Tamryn
            </h1>

            <div className="flex justify-center my-6">
              <div className="decorative-line w-40">
                <span style={{ color: "hsl(38 70% 50%)", fontSize: "1.1rem" }}>
                  ♥
                </span>
              </div>
            </div>

            <p
              className="font-body text-lg md:text-xl mb-1"
              style={{ color: "hsl(20 15% 40%)" }}
            >
              12 September, 2026
            </p>
            <p
              className="font-body text-sm tracking-widest"
              style={{ color: "hsl(20 15% 55%)" }}
            >
              DuVon Wine and Wedding Estate, Robertson
            </p>

            {/* Bottom ornament */}
            <div className="flex justify-center mt-6">
              <div className="decorative-line w-32">
                <span style={{ color: "hsl(38 70% 50%)" }}>✦</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll / tap hint — text changes between the two idle states ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
        style={{ translateX: "-50%" }}
        animate={{
          opacity: isIdle ? 1 : 0,
          y: isIdle ? 0 : 10,
        }}
        transition={{
          delay: phase === "closed" ? 1.2 : phase === "open" ? 0.4 : 0,
          duration: 0.5,
        }}
      >
        <p
          className="font-body tracking-widest uppercase text-xs"
          style={{ color: "hsl(20 20% 40%)" }}
        >
          {phase === "open"
            ? "Scroll or tap to continue"
            : "Scroll or tap to open"}
        </p>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            className="w-4 h-4"
            style={{ color: "hsl(38 70% 50%)" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EnvelopeHero;
