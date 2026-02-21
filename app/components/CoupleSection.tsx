"use client";

import { motion } from "framer-motion";
import coupleImage from "@/app/assets/couple-close-up.jpeg";
import Image from "next/image";

const CoupleSection = () => {
  return (
    <section
      id="couple-section"
      className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 oil-paint-overlay" />

      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-body tracking-[0.3em] uppercase text-sm mb-4">
            Together with their families
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            The Happy Couple
          </h2>
          <div className="decorative-line mt-6 max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={coupleImage}
                alt="Heinrich and Tamryn"
                className="w-full h-[70vh] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border-2 border-accent/30 rounded-lg -z-10" />
            <div className="absolute -inset-8 border border-accent/10 rounded-lg -z-20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center md:text-left">
              <h3 className="font-display text-3xl text-primary mb-2">
                Tamryn McDonald
              </h3>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Daughter of Mr. & Mrs. William McDonald of Charleston. A devoted
                artist with a passion for watercolors and poetry, Tamryn
                believes every moment is a canvas waiting to be painted with
                love.
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <span className="text-accent text-4xl">♥</span>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-display text-3xl text-primary mb-2">
                Heinrich Swanepoel
              </h3>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Son of Mr. & Mrs. Edward Swanepoel of Savannah. An architect by
                profession and a romantic at heart, Heinrich has spent his life
                building dreams and found his greatest one in Tamryn.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
