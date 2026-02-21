"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-muted/50">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Tamryn & Heinrich
          </h2>
          <p className="text-accent font-body text-xl mb-6">
            September 12th, 2026
          </p>

          <div className="decorative-line max-w-xs mx-auto mb-8">
            <Heart className="w-5 h-5 text-accent" />
          </div>

          <p className="text-muted-foreground font-body text-lg max-w-lg mx-auto mb-8">
            Thank you for being part of our love story. We cannot wait to
            celebrate this beautiful new chapter with you.
          </p>

          <p className="text-muted-foreground font-body text-sm">
            #SwanepoelSprokie
          </p>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground/60 font-body text-xs">
              Made with love for our special day
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
