"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Heart } from "lucide-react";
import { useToast } from "@/app/hooks/use-toast";
import reception from "@/app/assets/mountain-and-field.jpeg";
import Image from "next/image";

const RSVPSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    dietary: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "RSVP Received!",
      description:
        "Thank you for your response. We can't wait to celebrate with you!",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <Image
            src={reception}
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-background" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-accent/20 flex items-center justify-center">
            <Heart className="w-12 h-12 text-accent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Thank You!
          </h2>
          <p className="text-muted-foreground font-body text-xl max-w-md mx-auto">
            Your RSVP has been received. We are so excited to celebrate our
            special day with you!
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-20">
        <Image
          src={reception}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-background" />
      </div>
      <div className="container max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-body tracking-[0.3em] uppercase text-sm mb-4">
            We Hope You Can Join Us
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            RSVP
          </h2>
          <div className="decorative-line mt-6 max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
          <p className="text-muted-foreground font-body text-lg mt-6">
            Please RSVP by April 20th, 2026
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-card rounded-lg p-8 shadow-xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block font-body text-foreground mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-body text-foreground mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block font-body text-foreground mb-3">
              Will you be attending? *
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  required
                  checked={formData.attending === "yes"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-accent"
                />
                <span className="font-body text-foreground">
                  Joyfully Accept
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === "no"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-accent"
                />
                <span className="font-body text-foreground">
                  Regretfully Decline
                </span>
              </label>
            </div>
          </div>

          {formData.attending === "yes" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="guests"
                  className="block font-body text-foreground mb-2"
                >
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="dietary"
                  className="block font-body text-foreground mb-2"
                >
                  Dietary Restrictions
                </label>
                <input
                  type="text"
                  id="dietary"
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Any allergies or dietary requirements"
                />
              </div>
            </motion.div>
          )}

          <div>
            <label
              htmlFor="message"
              className="block font-body text-foreground mb-2"
            >
              Message for the Couple (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              placeholder="Share your well wishes..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-primary-foreground font-display text-xl py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" />
            Send RSVP
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPSection;
