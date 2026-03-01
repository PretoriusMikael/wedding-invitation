"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Heart, Music, Plus, X } from "lucide-react";
import { useToast } from "@/app/hooks/use-toast";
import reception from "@/app/assets/three-in-one.jpeg";
import Image from "next/image";

const RSVPSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    dietary: "",
    message: "",
  });
  const [songs, setSongs] = useState<string[]>([]);
  const [songInput, setSongInput] = useState("");
  const songInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  const addSong = () => {
    const trimmed = songInput.trim();
    if (!trimmed) return;
    setSongs((prev) => [...prev, trimmed]);
    setSongInput("");
    songInputRef.current?.focus();
  };

  const removeSong = (index: number) => {
    setSongs((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSongKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSong();
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      attending: "",
      dietary: "",
      message: "",
    });
    setSongs([]);
    setSongInput("");
    setIsSubmitted(false);
  };

  return (
    <section
      id="rsvp-section"
      className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Background image */}
      <div
        className={`absolute top-0 right-0 h-full opacity-30 sm:opacity-20 ${isSubmitted ? "w-full" : "w-full sm:w-1/3"}`}
      >
        <Image
          src={reception}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-background" />
      </div>

      <div className="container max-w-2xl relative z-10">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            /* ── Thank-you view ── */
            <motion.div
              key="thankyou"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
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

              <div className="mt-10 flex flex-col items-center gap-3">
                <p
                  className="font-body text-sm"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  RSVPing on behalf of someone else?
                </p>
                <motion.button
                  type="button"
                  onClick={handleReset}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: "hsl(var(--palette-amber) / 0.1)",
                    color: "hsl(var(--palette-amber))",
                    border: "1px solid hsl(var(--palette-amber) / 0.35)",
                  }}
                >
                  <Check className="w-4 h-4" />
                  Submit another RSVP
                </motion.button>
              </div>
            </motion.div>
          ) : (
            /* ── Form view ── */
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="font-display text-4xl md:text-6xl text-foreground">
                  RSVP
                </h2>
                <div className="decorative-line mt-6 max-w-xs mx-auto">
                  <span className="text-accent">✦</span>
                </div>
                <p className="text-muted-foreground font-body text-lg mt-6">
                  Please RSVP by the 30th of April, 2026
                </p>
              </div>

              {/* Form card */}
              <form
                onSubmit={handleSubmit}
                className="glass rounded-lg p-8 shadow-xl space-y-6"
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

                <AnimatePresence>
                  {formData.attending === "yes" && (
                    <motion.div
                      key="attending-yes-fields"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 overflow-hidden"
                    >
                      {/* Dietary */}
                      <div>
                        <label
                          htmlFor="dietary"
                          className="block font-body text-foreground mb-2"
                        >
                          Do you have any dietary restrictions?
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

                      {/* Song recommendations */}
                      <div>
                        <label
                          htmlFor="song"
                          className="block font-body text-foreground mb-1"
                        >
                          <span className="flex items-center gap-2">
                            <Music
                              className="w-4 h-4"
                              style={{ color: "hsl(var(--palette-amber))" }}
                            />
                            What songs will get you on the dance floor?
                          </span>
                        </label>
                        <p
                          className="font-body text-sm mb-3"
                          style={{ color: "hsl(var(--muted-foreground))" }}
                        >
                          Help us build the perfect playlist — add as many as
                          you like.
                        </p>

                        {/* Input row */}
                        <div className="flex gap-2">
                          <input
                            ref={songInputRef}
                            type="text"
                            id="song"
                            value={songInput}
                            onChange={(e) => setSongInput(e.target.value)}
                            onKeyDown={handleSongKeyDown}
                            className="flex-1 px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="Artist – Song title"
                          />
                          <motion.button
                            type="button"
                            onClick={addSong}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1.5 px-4 py-3 rounded-lg font-body text-sm font-medium shrink-0 transition-colors"
                            style={{
                              backgroundColor:
                                "hsl(var(--palette-amber) / 0.12)",
                              color: "hsl(var(--palette-amber))",
                              border:
                                "1px solid hsl(var(--palette-amber) / 0.3)",
                            }}
                          >
                            <Plus className="w-4 h-4" />
                            Add
                          </motion.button>
                        </div>

                        {/* Song list */}
                        <AnimatePresence>
                          {songs.length > 0 && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-3 rounded-lg overflow-hidden border"
                              style={{
                                borderColor: "hsl(var(--palette-amber) / 0.2)",
                              }}
                            >
                              <AnimatePresence initial={false}>
                                {songs.map((song, i) => (
                                  <motion.li
                                    key={song + i}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 12, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center gap-3 px-4 py-2.5"
                                    style={{
                                      backgroundColor:
                                        i % 2 === 0
                                          ? "hsl(var(--palette-amber) / 0.04)"
                                          : "hsl(var(--palette-amber) / 0.09)",
                                      borderBottom:
                                        i < songs.length - 1
                                          ? "1px solid hsl(var(--palette-amber) / 0.15)"
                                          : "none",
                                    }}
                                  >
                                    <Music
                                      className="w-3.5 h-3.5 shrink-0"
                                      style={{
                                        color: "hsl(var(--palette-amber))",
                                      }}
                                    />
                                    <span
                                      className="flex-1 font-body text-sm"
                                      style={{
                                        color: "hsl(var(--foreground))",
                                      }}
                                    >
                                      {song}
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => removeSong(i)}
                                      className="shrink-0 rounded-full p-0.5 transition-colors hover:bg-red-100"
                                      aria-label="Remove song"
                                    >
                                      <X
                                        className="w-3.5 h-3.5"
                                        style={{
                                          color: "hsl(var(--palette-coral))",
                                        }}
                                      />
                                    </button>
                                  </motion.li>
                                ))}
                              </AnimatePresence>
                              <div
                                className="px-4 py-2 font-body text-xs text-right"
                                style={{
                                  color: "hsl(var(--muted-foreground))",
                                }}
                              >
                                {songs.length} song
                                {songs.length !== 1 ? "s" : ""} added
                              </div>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

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
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RSVPSection;
