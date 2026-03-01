"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import flowersImage from "@/app/assets/flowers.jpg";
import Image from "next/image";

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: "The Date",
      content: "Saturday, 12 September, 2026",
    },
    {
      icon: Clock,
      title: "The Time",
      content: "Guests to arrive from 15:00\nCeremony start at 15:30",
    },
    {
      icon: MapPin,
      title: "The Place",
      content:
        "Duvon Wine & Wedding Estate\nLittle Italy, Robertson, South Africa",
    },
  ];

  return (
    <section className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden bg-muted/30">
      {/* Decorative Background Image */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
        <Image
          src={flowersImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-background" />
      </div>

      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/*<p className="text-accent font-body tracking-[0.3em] uppercase text-sm mb-4">
            Save the Date
          </p>*/}
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Wedding Details
          </h2>
          <div className="decorative-line mt-6 max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 text-center shadow-lg border-ornate"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <detail.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">
                {detail.title}
              </h3>
              <p className="text-muted-foreground font-body text-lg whitespace-pre-line">
                {detail.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/*<motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground font-body text-lg italic">
            &quot;Two souls with but a single thought, two hearts that beat as
            one.&quot;
          </p>
          <p className="text-accent text-sm mt-2">— John Keats</p>
        </motion.div>*/}
      </div>
    </section>
  );
};

export default EventDetails;
