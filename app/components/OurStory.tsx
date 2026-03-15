"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import couplePhoto from "@/app/assets/couple-photo.jpeg";
import Image from "next/image";

const timeline = [
  {
    year: "2018",
    title: "First Meeting",
    description:
      "We first met in 2018 at the Lourensford Market in Somerset West. Heinrich was working there that day, while Tamryn was enjoying the market with friends. One of her friends knew Heinrich from university and introduced us. A simple hello quickly turned into a flowing conversation, and Tamryn found herself returning to the same stall again and again. Eventually, she gathered the courage to ask for Heinrich's number and just like that, our story really began.",
  },
  {
    year: "2017",
    title: "An Impression That Lasted",
    description:
      "As we spent more time together and shared our pasts, we realized our paths had crossed long before that day at the market. Heinrich remembered noticing Tamryn at his matric farewell in 2017. Although we didn't speak that evening, the moment left a quiet impression that stayed with him.",
  },
  {
    year: "2018",
    title: "A Shared Beginning",
    description:
      "In December of 2018, we discovered that our birthdays are just one day apart. As we talked more, we realised that we were born in the same hospital and perhaps even shared the same nursery in the very first days of life.",
  },
  {
    year: "2024",
    title: "Guided by Grace",
    description:
      "Looking back, these moments no longer feel like coincidences, but rather gentle reminders of the Lord's hand guiding our lives and leading us toward one another long before we knew it. With grateful hearts, we are so excited to say 'I do' and celebrate the forever He has been preparing for us all along.",
  },
  {
    year: "2026",
    title: "Forever Begins",
    description:
      "We invite you to witness the beginning of our greatest adventure together.",
  },
];

// ── Slide variants for the mobile carousel ───────────────────────────────────
const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "70%" : "-70%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-70%" : "70%",
    opacity: 0,
    scale: 0.95,
  }),
};

// ── Desktop timeline card (unchanged behaviour) ───────────────────────────────
interface TimelineCardProps {
  item: (typeof timeline)[0];
  index: number;
}

const TimelineCard = ({ item, index }: TimelineCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
      }
      transition={{ duration: 0.8 }}
      className={`relative flex items-center md:mb-12 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div
        className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
      >
        <div className="glass p-6 rounded-lg shadow-lg">
          <h3 className="font-display text-xl text-foreground mb-2">
            {item.title}
          </h3>
          <p className="text-muted-foreground font-body">{item.description}</p>
        </div>
      </div>

      {/* Desktop timeline dot */}
      <div
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background shadow-lg"
        style={{ backgroundColor: "hsl(var(--palette-pink))" }}
      />

      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const OurStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const goTo = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    if (!hasInteracted) setHasInteracted(true);
  };

  const goNext = () => {
    if (activeIndex < timeline.length - 1) goTo(activeIndex + 1);
  };

  const goPrev = () => {
    if (activeIndex > 0) goTo(activeIndex - 1);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) goNext();
    else if (info.offset.x > 50) goPrev();
    if (!hasInteracted) setHasInteracted(true);
  };

  const current = timeline[activeIndex];

  return (
    <section
      className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden"
      style={
        {
          "--section-accent": "hsl(var(--palette-pink))",
        } as React.CSSProperties
      }
    >
      {/* Decorative background image */}
      <div className="absolute top-0 left-0 w-full sm:w-1/3 h-full">
        <Image
          src={couplePhoto}
          alt=""
          className="w-full h-full object-cover object-[left_40%_top_0] opacity-40 sm:opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-background" />
      </div>

      <div className="container max-w-4xl relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Our Love Story
          </h2>
          <div className="decorative-line mt-6 max-w-xs mx-auto">
            <span style={{ color: "hsl(var(--palette-pink))" }}>✦</span>
          </div>
        </motion.div>

        {/* ── Mobile carousel ───────────────────────────────────────────────── */}
        <div className="block md:hidden">
          {/* Chapter counter — fixed height so it never shifts */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center font-body text-xs tracking-[0.25em] uppercase mb-16"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Chapter{" "}
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{ color: "hsl(var(--palette-pink))" }}
            >
              {activeIndex + 1}
            </motion.span>{" "}
            of {timeline.length}
          </motion.p>

          {/*
           * Fixed-height container: cards are absolute inset-0 so they never
           * push the chapter counter or nav row around, regardless of content
           * length. The description area grows to fill remaining space and
           * scrolls if the text overflows (scrollbar hidden for aesthetics).
           */}
          <div className="relative h-[55vh] overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={handleDragEnd}
                // absolute inset-0 + flex-col so the card always fills the
                // fixed-height container and the description can scroll freely
                className="absolute inset-0 glass flex flex-col p-7 shadow-lg cursor-grab active:cursor-grabbing select-none"
                style={{
                  border: "1px solid hsl(var(--palette-pink) / 0.22)",
                  boxShadow:
                    "0 8px 40px hsl(var(--foreground) / 0.08), 0 2px 8px hsl(var(--foreground) / 0.05)",
                  touchAction: "none",
                }}
              >
                {/* Title row — never shrinks */}
                <div className="flex items-center gap-3 mb-5 shrink-0">
                  <h3 className="font-display text-2xl text-foreground">
                    {current.title}
                  </h3>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(var(--palette-pink) / 0.3), transparent)",
                    }}
                  />
                </div>

                {/* Description — grows to fill remaining height, scrolls if needed */}
                <p
                  className="font-body text-base leading-relaxed flex-1 overflow-y-auto"
                  style={{
                    color: "hsl(var(--muted-foreground))",
                    // hide scrollbar cross-browser while keeping functionality
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* One-time swipe hint — fades away after first interaction */}
            <AnimatePresence>
              {!hasInteracted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="absolute bottom-5 left-0 right-0 flex justify-center pointer-events-none z-10"
                >
                  <motion.p
                    animate={{ x: [0, -8, 8, -8, 8, 0] }}
                    transition={{
                      duration: 1.6,
                      delay: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3.5,
                      ease: "easeInOut",
                    }}
                    className="font-body text-xs tracking-widest"
                    style={{ color: "hsl(var(--palette-pink) / 0.5)" }}
                  >
                    ← swipe →
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation row — always sits directly below the fixed card area */}
          <div className="flex items-center justify-between mt-7 px-1">
            {/* Previous */}
            <motion.button
              onClick={goPrev}
              disabled={activeIndex === 0}
              whileTap={{ scale: 0.88 }}
              aria-label="Previous chapter"
              className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-25 transition-opacity"
              style={{
                backgroundColor: "hsl(var(--palette-pink) / 0.1)",
                border: "1px solid hsl(var(--palette-pink) / 0.25)",
              }}
            >
              <ChevronLeft
                className="w-5 h-5"
                style={{ color: "hsl(var(--palette-pink))" }}
              />
            </motion.button>

            {/* Pill dots */}
            <div className="flex items-center gap-1.5">
              {timeline.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to chapter ${i + 1}`}
                  className="h-2 rounded-full"
                  style={{
                    width: i === activeIndex ? "1.25rem" : "0.5rem",
                    backgroundColor:
                      i === activeIndex
                        ? "hsl(var(--palette-pink))"
                        : "hsl(var(--palette-pink) / 0.3)",
                    transition: "width 0.3s ease, background-color 0.3s ease",
                    minWidth: "0.5rem",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <motion.button
              onClick={goNext}
              disabled={activeIndex === timeline.length - 1}
              whileTap={{ scale: 0.88 }}
              aria-label="Next chapter"
              className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-25 transition-opacity"
              style={{
                backgroundColor: "hsl(var(--palette-pink) / 0.1)",
                border: "1px solid hsl(var(--palette-pink) / 0.25)",
              }}
            >
              <ChevronRight
                className="w-5 h-5"
                style={{ color: "hsl(var(--palette-pink))" }}
              />
            </motion.button>
          </div>
        </div>

        {/* ── Desktop timeline (unchanged) ──────────────────────────────────── */}
        <div className="hidden md:block relative">
          {/* Centre line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundColor: "hsl(var(--palette-pink) / 0.3)" }}
          />

          {timeline.map((item, index) => (
            <TimelineCard key={item.year + index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
