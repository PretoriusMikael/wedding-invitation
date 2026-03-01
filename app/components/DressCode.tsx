"use client";

import { motion } from "framer-motion";
import { Flower, Gem, Leaf } from "lucide-react";
import mountainsAndField from "@/app/assets/mountain-and-field.jpeg";
import Image from "next/image";

const ladies = [
  // "Midi or full-length dresses",
  "Light, flowy fabrics",
  "Soft pastels & florals",
  "Block heels or elegant sandals",
  "Colours are welcome",
];

const gentlemen = [
  "Chinos or dress trousers are welcome",
  "Lightweight blazers, suits, and ties are optional",
  "Dress shoes or loafers",
  "Soft colours are welcome",
];

const DressCode = () => {
  return (
    <section className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden bg-muted/20">
      {/* Soft background petals */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
        <Image
          src={mountainsAndField}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-background" />
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(38 70% 50%) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(140 20% 60%) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, hsl(350 45% 35%) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {/*<p
            className="font-body tracking-[0.3em] uppercase text-sm mb-4"
            style={{ color: "hsl(38 70% 50%)" }}
          >
            Dress to impress
          </p>*/}
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Dress Code
          </h2>
          <div className="decorative-line mt-5 max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>

          {/* Theme badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mt-8 px-8 py-3 rounded-full border"
            style={{
              borderColor: "hsl(38 70% 50% / 0.4)",
              backgroundColor: "hsl(38 70% 50% / 0.07)",
            }}
          >
            <Leaf className="w-5 h-5" style={{ color: "hsl(140 20% 45%)" }} />
            <span
              className="font-display text-xl md:text-2xl tracking-wide"
              style={{ color: "hsl(20 25% 25%)" }}
            >
              Semi-Formal Garden Chic
            </span>
            <Leaf className="w-5 h-5" style={{ color: "hsl(140 20% 45%)" }} />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-body text-center text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-14"
          style={{ color: "hsl(20 15% 45%)" }}
        >
          Think light, flowy fabrics, soft pastels, florals, and garden-inspired
          elegance. Keep it fresh and elegant!
        </motion.p>

        {/* Ladies & Gentlemen cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Ladies */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden border-ornate"
            style={{
              backgroundColor: "hsl(40 35% 98%)",
              boxShadow:
                "0 8px 40px hsl(20 25% 15% / 0.08), 0 2px 8px hsl(20 25% 15% / 0.05)",
            }}
          >
            {/* Soft corner accent */}
            <div
              className="absolute top-0 right-0 w-24 h-24 opacity-20 rounded-bl-full"
              style={{ backgroundColor: "hsl(350 45% 35%)" }}
            />

            <div
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "hsl(350 45% 35% / 0.1)" }}
            >
              <Flower
                className="w-8 h-8"
                style={{ color: "hsl(350 45% 35%)" }}
              />
            </div>
            <h3
              className="font-display text-2xl md:text-3xl mb-2"
              style={{ color: "hsl(350 45% 35%)" }}
            >
              Ladies
            </h3>
            <div className="decorative-line mb-6 max-w-30 mx-auto">
              <span style={{ color: "hsl(38 70% 50%)", fontSize: "0.8rem" }}>
                ♥
              </span>
            </div>

            <ul className="space-y-3">
              {ladies.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 justify-center"
                >
                  <span style={{ color: "hsl(38 70% 50%)" }}>✦</span>
                  <span
                    className="font-body text-base md:text-lg"
                    style={{ color: "hsl(20 15% 40%)" }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Gentlemen */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden border-ornate"
            style={{
              backgroundColor: "hsl(40 35% 98%)",
              boxShadow:
                "0 8px 40px hsl(20 25% 15% / 0.08), 0 2px 8px hsl(20 25% 15% / 0.05)",
            }}
          >
            {/* Soft corner accent */}
            <div
              className="absolute top-0 left-0 w-24 h-24 opacity-20 rounded-br-full"
              style={{ backgroundColor: "hsl(140 20% 50%)" }}
            />

            <div
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "hsl(140 20% 38% / 0.1)" }}
            >
              <Gem className="w-8 h-8" style={{ color: "hsl(140 20% 38%)" }} />
            </div>
            <h3
              className="font-display text-2xl md:text-3xl mb-2"
              style={{ color: "hsl(140 20% 38%)" }}
            >
              Gentlemen
            </h3>
            <div className="decorative-line mb-6 max-w-30 mx-auto">
              <span style={{ color: "hsl(38 70% 50%)", fontSize: "0.8rem" }}>
                ♥
              </span>
            </div>

            <ul className="space-y-3">
              {gentlemen.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 justify-center"
                >
                  <span style={{ color: "hsl(38 70% 50%)" }}>✦</span>
                  <span
                    className="font-body text-base md:text-lg"
                    style={{ color: "hsl(20 15% 40%)" }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom note */}
        {/*<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="decorative-line max-w-sm mx-auto mb-6">
            <span style={{ color: "hsl(38 70% 50%)" }}>✦</span>
          </div>
          <p
            className="font-body text-base md:text-lg italic"
            style={{ color: "hsl(20 15% 50%)" }}
          >
            &ldquo;Dress well. It&apos;s a form of good manners.&rdquo;
          </p>
          <p
            className="font-body text-sm mt-2"
            style={{ color: "hsl(38 70% 50%)" }}
          >
            — Tom Ford
          </p>
        </motion.div>*/}
      </div>
    </section>
  );
};

export default DressCode;
