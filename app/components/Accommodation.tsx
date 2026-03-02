"use client";

import { motion } from "framer-motion";
import { MapPin, Route, Hotel } from "lucide-react";
import React from "react";
import garden from "@/app/assets/garden.jpeg";
import Image from "next/image";

const closeToVenue = [
  {
    name: "Wederom Guest Farm",
    distance: "2 km",
    href: "https://www.lekkeslaap.co.za/accommodation/wederom-hanepoot-huisies?ppc=AdWords_LS-DSAAccommName&gad_source=1&gad_campaignid=19150528781&gbraid=0AAAAAD2FOnPFSwDB6dad-xmOkylEtPCxb&gclid=CjwKCAiA1obMBhAbEiwAsUBbIpzhWLxFfHRDJlimlI2q1C5rrV-YYD6gxNiI3PVzt3SGw-4W7djkAhoCFxUQAvD_BwE",
  },
  {
    name: "Goederede Guest Farm",
    distance: "3 km",
    href: "https://goedereede.co.za/",
  },
  {
    name: "Rivierzicht River Resort",
    distance: "5 km",
    href: "https://www.rivierzicht-resort.com/cabins/",
  },
  {
    name: "Nerina Guest Farm",
    distance: "7 km",
    href: "https://www.nerinaguestfarm.com/robertson-farm-accommodation-breede-river",
  },
  {
    name: "Roam Rooiberg",
    distance: "7 km",
    href: "https://roamrooiberg.co.za/accommodation",
  },
];

const furtherAway = [
  {
    name: "Orange Grove Farm",
    distance: "11 km",
    href: "https://orangegrovefarm.co.za/",
  },
  {
    name: "The Robertson Small Boutique Hotel",
    distance: "12 km",
    href: "https://thelivingjourneycollection.co.za/the-robertson-small-hotel/",
  },
];

const silverstrand = [
  {
    name: "Albatross Lodge",
    distance: "11km",
    href: "https://www.lekkeslaap.co.za/accommodation/albatross-lodge-robertson",
  },
  {
    name: "Robertson Halfway House",
    distance: "11 km",
    href: "https://www.lekkeslaap.co.za/accommodation/robertson-halfway-house",
  },
  {
    name: "Muscat Manor",
    distance: "11 km",
    href: "https://www.airbnb.co.za/rooms/23587334?source_impression_id=p3_1770146390_P3qGJJPorqv9kwKB",
  },
  {
    name: "Silver Pond Lodge",
    distance: "11 km",
    href: "https://www.booking.com/hotel/za/silver-pond-lodge.en-gb.html",
  },
  {
    name: "Silver Eagle Lodge",
    href: "https://www.airbnb.co.za/rooms/7313730",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

interface AccommodationItemProps {
  name: string;
  distance?: string;
  href?: string;
  index: number;
}

const AccommodationItem = ({
  name,
  distance,
  href,
}: AccommodationItemProps) => (
  <motion.li
    variants={itemVariants}
    className="flex items-center justify-between gap-4 py-3 border-b last:border-b-0"
    style={{ borderColor: "hsl(var(--border))" }}
  >
    <div className="flex items-center gap-3">
      <span style={{ color: "hsl(var(--palette-olive))" }} className="text-sm">
        ✦
      </span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-base md:text-lg underline underline-offset-2 hover:opacity-70 transition-opacity"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {name}
        </a>
      ) : (
        <span
          className="font-body text-base md:text-lg"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {name}
        </span>
      )}
    </div>
    {distance && (
      <span
        className="font-body text-sm shrink-0 px-3 py-1 rounded-full"
        style={{
          color: "hsl(var(--palette-olive))",
          backgroundColor: "hsl(var(--palette-olive) / 0.1)",
        }}
      >
        {distance}
      </span>
    )}
  </motion.li>
);

interface GroupCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
  delay: number;
  children: React.ReactNode;
}

const GroupCard = ({
  icon,
  iconBg,
  title,
  subtitle,
  delay,
  children,
}: GroupCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true }}
    className="glass rounded-2xl p-7 md:p-9 relative overflow-hidden border-2 border-accent/30"
    style={{
      boxShadow:
        "0 8px 40px hsl(var(--foreground) / 0.08), 0 2px 8px hsl(var(--foreground) / 0.05)",
    }}
  >
    {/* Card header */}
    <div className="flex items-start gap-4 mb-5">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
      <div>
        <h3
          className="font-display text-xl md:text-2xl leading-tight"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {title}
        </h3>
        <p
          className="font-body text-sm mt-0.5"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {subtitle}
        </p>
      </div>
    </div>

    {/* Items */}
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-0"
    >
      {children}
    </motion.ul>
  </motion.div>
);

const Accommodation = () => {
  return (
    <section
      id="accommodation-section"
      className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden"
      style={
        {
          "--section-accent": "hsl(var(--palette-olive))",
        } as React.CSSProperties
      }
    >
      <div className="absolute top-0 left-0 w-full sm:w-1/3 h-full opacity-25 sm:opacity-20">
        <Image
          src={garden}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-background" />
      </div>
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--palette-olive)) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--palette-amber)) 0%, transparent 70%)",
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
          className="text-center mb-6"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Accommodation
          </h2>
          <div className="decorative-line mt-5 max-w-xs mx-auto">
            <span style={{ color: "hsl(var(--palette-olive))" }}>✦</span>
          </div>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-body text-center text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          To make planning easier, here is a list of recommended accommodation
          options near the venue. You are welcome to book at any location that
          best suits your needs.
        </motion.p>

        {/* Map pin reference pill */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-full border font-body text-sm underline hover:cursor-pointer"
            style={{
              borderColor: "hsl(var(--palette-olive) / 0.35)",
              color: "hsl(var(--muted-foreground))",
              backgroundColor: "hsl(var(--palette-olive) / 0.3)",
            }}
            onClick={() => {
              const venueSection = document.getElementById("venue-section");
              if (venueSection) {
                venueSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <MapPin
              className="w-4 h-4"
              style={{ color: "hsl(var(--palette-olive))" }}
            />
            DuVon Wine &amp; Wedding Estate, Robertson
          </div>
        </motion.div>

        {/* Two-column group cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Close to venue */}
          <GroupCard
            icon={
              <MapPin
                className="w-6 h-6"
                style={{ color: "hsl(var(--palette-olive))" }}
              />
            }
            iconBg="hsl(var(--palette-olive) / 0.15)"
            title="Close to the Venue"
            subtitle="Within 5 km"
            delay={0.1}
          >
            {closeToVenue.map((item, i) => (
              <AccommodationItem
                key={item.name}
                name={item.name}
                distance={item.distance}
                href={item.href}
                index={i}
              />
            ))}
          </GroupCard>

          {/* A little further */}
          <GroupCard
            icon={
              <Route
                className="w-6 h-6"
                style={{ color: "hsl(var(--palette-olive))" }}
              />
            }
            iconBg="hsl(var(--palette-olive) / 0.15)"
            title="A Little Further Away"
            subtitle="12 – 15 km from the venue"
            delay={0.2}
          >
            {furtherAway.map((item, i) => (
              <AccommodationItem
                key={item.name}
                name={item.name}
                distance={item.distance}
                href={item.href}
                index={i}
              />
            ))}
          </GroupCard>
        </div>

        {/* Silverstrand — full width */}
        <GroupCard
          icon={
            <Hotel
              className="w-6 h-6"
              style={{ color: "hsl(var(--palette-olive))" }}
            />
          }
          iconBg="hsl(var(--palette-olive) / 0.15)"
          title="Silverstrand & Surrounding Lodges"
          subtitle="Approx. 10 km from the venue"
          delay={0.3}
        >
          <div className="grid sm:grid-cols-2 gap-x-6">
            {silverstrand.map((item, i) => (
              <AccommodationItem
                key={item.name}
                distance={item.distance}
                name={item.name}
                href={item.href}
                index={i}
              />
            ))}
          </div>
        </GroupCard>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p
            className="font-body text-base italic"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            We recommend booking early to secure your preferred accommodation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodation;
