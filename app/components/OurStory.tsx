"use client";

import { motion } from "framer-motion";
import couplePhoto from "@/app/assets/couple-photo.jpeg";
import Image from "next/image";

const OurStory = () => {
  const timeline = [
    {
      year: "2019",
      title: "First Meeting",
      description:
        "We first met in 2018 at the Lourensford Market in Somerset West. Heinrich was working there that day, while Tamryn was enjoying the market with friends. One of her friends knew Heinrich from university and introduced us. A simple hello quickly turned into a flowing conversation, and Tamryn found herself returning to the same stall again and again. Eventually, she gathered the courage to ask for Heinrich’s number and just like that, our story really began.",
    },
    {
      year: "2020",
      title: "An Impression that Lasted",
      description:
        "As we spent more time together and shared our pasts, we realized our paths had crossed long before that market day. Heinrich remembered noticing Tamryn at his matric farewell in 2017. Although we didn’t speak that evening, the moment left a quiet impression that stayed with him.",
    },
    {
      year: "2022",
      title: "A Shared Beginning",
      description:
        "Later that year, in December, we discovered that our birthdays are just one day apart. Aswe talked more, we realized we were born in the same hospital and perhaps even sharedthe same nursery in our very first days of life.",
    },
    {
      year: "2024",
      title: "Guided by Grace",
      description:
        "Looking back, these moments no longer feel like coincidences, but rather gentle reminders of the Lord’s hand guiding our lives and leading us toward one another long before we knew it. With grateful hearts, we are so excited to say “I do” and celebrate the forever He has been preparing for us all along.",
    },
    {
      year: "2026",
      title: "Forever Begins",
      description:
        "We invite you to witness the beginning of our greatest adventure together.",
    },
  ];

  return (
    <section className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Decorative Background Image */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-20">
        <Image
          src={couplePhoto}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-background" />
      </div>
      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body tracking-[0.3em] uppercase text-sm mb-4">
            How It All Began
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Our Love Story
          </h2>
          <div className="decorative-line mt-6 max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/30 -translate-x-1/2 hidden md:block" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
              >
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <span className="text-accent font-display text-2xl">
                    {item.year}
                  </span>
                  <h3 className="font-display text-xl text-foreground mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg" />

              {/* Spacer for other side */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
