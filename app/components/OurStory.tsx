"use client";

import React from "react";
import { motion } from "framer-motion";
import couplePhoto from "@/app/assets/couple-photo.jpeg";
import Image from "next/image";

const OurStory = () => {
  const timeline = [
    {
      year: "2019",
      title: "First Meeting",
      description:
        "We first met in 2018 at the Lourensford Market in Somerset West. Heinrich was working there that day, while Tamryn was enjoying the market with friends. One of her friends knew Heinrich from university and introduced us. A simple hello quickly turned into a flowing conversation, and Tamryn found herself returning to the same stall again and again. Eventually, she gathered the courage to ask for Heinrich's number and just like that, our story really began.",
    },
    {
      year: "2020",
      title: "An Impression That Lasted",
      description:
        "As we spent more time together and shared our pasts, we realized our paths had crossed long before that day at the market. Heinrich remembered noticing Tamryn at his matric farewell in 2017. Although we didn't speak that evening, the moment left a quiet impression that stayed with him.",
    },
    {
      year: "2022",
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

  return (
    <section
      className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden"
      style={
        {
          "--section-accent": "hsl(var(--palette-pink))",
        } as React.CSSProperties
      }
    >
      {/* Decorative Background Image */}
      <div className="absolute top-0 left-0 w-full sm:w-1/3 h-full">
        <Image
          src={couplePhoto}
          alt=""
          className="w-full h-full object-cover object-[left_40%_top_0] opacity-40 sm:opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-background" />
      </div>
      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Our Love Story
          </h2>
          <div className="decorative-line mt-6 max-w-xs mx-auto">
            <span style={{ color: "hsl(var(--palette-pink))" }}>✦</span>
          </div>
        </motion.div>

        <div className="relative">
          {/* Desktop timeline centre line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ backgroundColor: "hsl(var(--palette-pink) / 0.3)" }}
          />

          {timeline.map((item, index) => (
            <React.Fragment key={item.year}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex items-center md:mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                >
                  <div className="glass p-6 rounded-lg shadow-lg">
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Desktop timeline dot */}
                <div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background shadow-lg"
                  style={{ backgroundColor: "hsl(var(--palette-pink))" }}
                />

                {/* Desktop spacer for other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>

              {/* Mobile connector — dot + line between cards, not after last */}
              {index < timeline.length - 1 && (
                <div className="flex md:hidden flex-col items-center py-6">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: "hsl(var(--palette-pink) / 0.5)",
                    }}
                  />
                  <div
                    className="w-px my-2"
                    style={{
                      height: "6rem",
                      backgroundColor: "hsl(var(--palette-pink) / 0.3)",
                    }}
                  />
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: "hsl(var(--palette-pink) / 0.5)",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
