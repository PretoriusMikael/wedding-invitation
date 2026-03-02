"use client";

import { motion } from "framer-motion";
import { Flower } from "lucide-react";
// Custom SVG icons — lucide-react has no bow tie or heel
const HeelIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 503.997 503.997"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M419.628,276.772c-0.092-5.103-1.939-9.955-5.422-13.748c-3.777-4.121-8.939-6.53-14.529-6.773l-41.992-1.805
      c-9.652-0.453-18.012,5.825-20.799,14.638c-42.404-6.773-81.249-24.861-117.5-43.092c-7.218-3.634-14.705-7.546-22.368-11.726
      L45.935,130.331c-3.324-1.855-7.495-1.225-10.139,1.536c-4.927,5.145-47.666,52.148-32.592,116.459v0.008
      c1.511,6.446,3.19,11.977,5.263,17.29c0.906,7.831,6.354,55.279,8.259,74.324c2.207,22.024,13.169,32.734,33.532,32.734h50.361
      c4.642,0,8.393-3.76,8.393-8.393v-72.511c23.116,7.621,79.36,28.378,119.967,61.658c7.529,7.529,39.558,21.286,109.367,21.286
      c28.781,0,63.992-2.342,106.546-8.419c39.332-5.624,58.67-16.636,59.098-33.674C504.628,307.047,457.172,285.442,419.628,276.772z
      M92.225,355.897H50.258c-8.822,0-15.201-1.259-16.829-17.626c-2.031-20.337-8.066-72.729-8.393-75.549
      c0.436,0.201,0.831,0.336,1.259,0.529c2.795,1.251,5.506,2.392,8.142,3.441c0.705,0.285,1.427,0.571,2.124,0.848
      c2.996,1.15,5.926,2.224,8.754,3.198c0.353,0.117,0.688,0.218,1.032,0.336c2.594,0.873,5.12,1.687,7.621,2.459
      c0.747,0.227,1.494,0.462,2.241,0.688c2.568,0.781,5.12,1.544,7.646,2.291c2.476,0.722,4.919,1.452,7.361,2.191
      c0.823,0.252,1.654,0.52,2.476,0.772c1.721,0.529,3.433,1.074,5.162,1.637c0.99,0.327,1.989,0.68,2.988,1.016
      c1.62,0.554,3.257,1.133,4.919,1.746c1.049,0.386,2.124,0.797,3.198,1.217c0.739,0.285,1.511,0.613,2.266,0.915V355.897z
      M402.581,285.526c-0.067,1.494-0.873,2.443-1.351,2.879c-0.193,0.185-0.504,0.42-0.856,0.63
      c-0.076,0.042-0.134,0.101-0.21,0.134c-0.478,0.227-1.091,0.386-1.922,0.327l-41.992-1.813
      c-0.705-0.034-1.259-0.243-1.729-0.487c-0.865-0.453-1.544-1.192-1.922-2.098c-0.193-0.462-0.336-1.024-0.319-1.687
      c0-0.017-0.017-0.042-0.017-0.067l0.193-4.239c0-0.008-0.008-0.017-0.008-0.025l0.168-3.878
      c0.101-2.241,1.947-3.995,4.172-3.995c0.05,0,0.109,0,0.176,0.008l41.992,1.805c1.502,0.067,2.451,0.873,2.887,1.351
      c0.428,0.47,1.15,1.494,1.091,2.996L402.581,285.526z"
    />
  </svg>
);

const BowTieIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 512 512"
    fill="currentColor"
    className={className}
    style={style}
  >
    <path d="M51.855 169.203C31.677 191.101 21 223.381 21 256s10.677 64.9 30.855 86.797c15.674-.505 44.822-4.243 73.961-11.527 21.772-5.443 43.342-13.134 58.973-21.8-5.558-6.025-8.448-13.975-10.55-22.91a107.81 107.81 0 0 1-1.323-6.603l-58.443 16.697-4.946-17.308 61.588-17.596c-.068-1.912-.115-3.83-.115-5.75s.047-3.838.115-5.75l-61.588-17.596 4.946-17.308 58.443 16.697a107.81 107.81 0 0 1 1.322-6.604c2.103-8.934 4.993-16.884 10.551-22.91-15.631-8.665-37.2-16.356-58.973-21.799-29.14-7.284-58.287-11.022-73.96-11.527zm408.29 0c-15.674.505-44.822 4.243-73.961 11.527-21.772 5.443-43.342 13.134-58.973 21.8 5.558 6.025 8.448 13.975 10.55 22.91.505 2.14.94 4.35 1.323 6.603l58.443-16.697 4.946 17.308-61.588 17.596c.068 1.912.115 3.83.115 5.75s-.047 3.838-.115 5.75l61.588 17.596-4.946 17.308-58.443-16.697a107.81 107.81 0 0 1-1.322 6.604c-2.103 8.934-4.993 16.884-10.551 22.91 15.631 8.665 37.2 16.356 58.973 21.799 29.14 7.284 58.287 11.022 73.96 11.527C480.324 320.899 491 288.619 491 256s-10.677-64.9-30.855-86.797zM256 205c-13.571 0-27.173.992-37.957 2.867-10.784 1.876-18.862 5.678-19.68 6.496-1.878 1.879-4.809 7.578-6.601 15.198C189.969 237.18 189 246.6 189 256c0 9.4.969 18.82 2.762 26.44 1.792 7.619 4.723 13.318 6.601 15.197.818.818 8.896 4.62 19.68 6.496C228.827 306.008 242.429 307 256 307c13.571 0 27.173-.992 37.957-2.867 10.784-1.876 18.862-5.678 19.68-6.496 1.878-1.879 4.809-7.578 6.601-15.198C322.031 274.82 323 265.4 323 256c0-9.4-.969-18.82-2.762-26.44-1.792-7.619-4.723-13.318-6.601-15.197-.818-.818-8.896-4.62-19.68-6.496C283.173 205.992 269.571 205 256 205z" />
  </svg>
);
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
    <section
      className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden bg-muted/20"
      style={
        {
          "--section-accent": "hsl(var(--palette-pink))",
        } as React.CSSProperties
      }
    >
      {/* Background image */}
      <div className="absolute top-0 right-0 w-full sm:w-1/3 h-full opacity-25 sm:opacity-20">
        <Image
          src={mountainsAndField}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-background" />
      </div>

      {/* Pink-to-blue gradient wash across the section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--palette-pink) / 0.06) 0%, transparent 50%, hsl(var(--palette-blue) / 0.06) 100%)",
        }}
      />

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--palette-pink)) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--palette-blue)) 0%, transparent 70%)",
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
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Dress Code
          </h2>
          {/* Pink-to-blue gradient decorative line */}
          <div className="flex items-center gap-4 mt-5 max-w-xs mx-auto">
            <div
              className="flex-1 h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, hsl(var(--palette-pink)))",
              }}
            />
            <span
              style={{
                background: `linear-gradient(to right, hsl(var(--palette-pink)), hsl(var(--palette-blue)))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ✦
            </span>
            <div
              className="flex-1 h-px"
              style={{
                background:
                  "linear-gradient(to right, hsl(var(--palette-blue)), transparent)",
              }}
            />
          </div>

          {/* Theme badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mt-8 px-8 py-3 rounded-full border"
            style={{
              borderColor: "transparent",
              backgroundImage: `linear-gradient(hsl(var(--background) / 0.01), hsl(var(--background) / 0.01)), linear-gradient(to right, hsl(var(--palette-pink) / 0.3), hsl(var(--palette-blue) / 0.3))`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              backgroundColor: "hsl(var(--palette-pink) / 0.04)",
            }}
          >
            <Flower
              className="w-5 h-5"
              style={{ color: "hsl(var(--palette-pink))" }}
            />
            <span
              className="font-display text-xl md:text-2xl tracking-wide"
              style={{
                backgroundImage: `linear-gradient(to right, hsl(var(--palette-pink)), hsl(var(--palette-blue)))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Semi-Formal Garden Chic
            </span>
            <Flower
              className="w-5 h-5"
              style={{ color: "hsl(var(--palette-blue))" }}
            />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-body text-center text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-14"
          style={{ color: "hsl(var(--muted-foreground))" }}
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
            className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
            style={{
              background: "hsl(var(--card) / 0.3)",
              backdropFilter: "blur(4px) saturate(1.4)",
              WebkitBackdropFilter: "blur(24px) saturate(1.4)",
              border:
                "1px solid color-mix(in srgb, hsl(var(--palette-pink)) 30%, transparent)",
              boxShadow:
                "0 8px 40px hsl(var(--foreground) / 0.08), 0 2px 8px hsl(var(--foreground) / 0.05)",
            }}
          >
            {/* Soft corner accent */}
            <div
              className="absolute top-0 right-0 w-24 h-24 opacity-20 rounded-bl-full"
              style={{ backgroundColor: "hsl(var(--palette-coral))" }}
            />

            <div
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "hsl(var(--palette-coral) / 0.1)" }}
            >
              <HeelIcon
                className="w-8 h-8"
                style={{ color: "hsl(var(--palette-pink))" }}
              />
            </div>
            <h3
              className="font-display text-2xl md:text-3xl mb-2"
              style={{ color: "hsl(var(--palette-pink))" }}
            >
              Ladies
            </h3>
            <div className="decorative-line mb-6 max-w-30 mx-auto">
              <span
                style={{
                  color: "hsl(var(--palette-pink))",
                  fontSize: "0.8rem",
                }}
              >
                ♥
              </span>
            </div>

            <ul className="space-y-3 inline-block text-left">
              {ladies.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0 inline-block"
                    style={{ backgroundColor: "hsl(var(--palette-pink))" }}
                  />
                  <span
                    className="font-body text-base md:text-lg"
                    style={{ color: "hsl(var(--muted-foreground))" }}
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
            className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
            style={{
              background: "hsl(var(--card) / 0.3)",
              backdropFilter: "blur(4px) saturate(1.4)",
              WebkitBackdropFilter: "blur(24px) saturate(1.4)",
              border:
                "1px solid color-mix(in srgb, hsl(var(--palette-blue)) 30%, transparent)",
              boxShadow:
                "0 8px 40px hsl(var(--foreground) / 0.08), 0 2px 8px hsl(var(--foreground) / 0.05)",
            }}
          >
            {/* Soft corner accent */}
            <div
              className="absolute top-0 left-0 w-24 h-24 opacity-20 rounded-br-full"
              style={{ backgroundColor: "hsl(var(--palette-blue))" }}
            />

            <div
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "hsl(var(--palette-blue) / 0.1)" }}
            >
              <BowTieIcon
                className="w-8 h-8"
                style={{ color: "hsl(var(--palette-blue))" }}
              />
            </div>
            <h3
              className="font-display text-2xl md:text-3xl mb-2"
              style={{ color: "hsl(var(--palette-blue))" }}
            >
              Gentlemen
            </h3>
            <div className="decorative-line mb-6 max-w-30 mx-auto">
              <span
                style={{
                  color: "hsl(var(--palette-blue))",
                  fontSize: "0.8rem",
                }}
              >
                ♥
              </span>
            </div>

            <ul className="space-y-3 inline-block text-left">
              {gentlemen.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0 inline-block"
                    style={{ backgroundColor: "hsl(var(--palette-blue))" }}
                  />
                  <span
                    className="font-body text-base md:text-lg"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
