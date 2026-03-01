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
    href: "https://www.booking.com/hotel/za/silver-pond-lodge.en-gb.html?aid=356980&label=gog235jc-10CAso-wFCEXNpbHZlci1wb25kLWxvZGdlSDNYA2j7AYgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgC0JWJzAbAAgHSAiQzZTE4YmRmMi1jMDVhLTRmMzctYTk5YS1hZTQwYWVhNmNhMjfYAgHgAgE&sid=a60f77b14f13b806aa582d521b36f68f&dest_id=-1277201&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A,A&sb_price_type=total&sr_order=popularity&srepoch=1770146525&srpvid=24a1bf9c078547b4604508869bb08df8&type=total&ucfs=1&chal_t=1771585558034&force_referer=https%3A%2F%2Fsayi.do%2F",
  },
  {
    name: "Silver Eagle Lodge",
    href: "https://www.airbnb.co.za/rooms/7313730?search_mode=regular_search&adults=1&check_in=2026-03-09&check_out=2026-03-14&children=0&infants=0&pets=0&source_impression_id=p3_1770146572_P3zveyM6Vq5vmmsn&previous_page_section_name=1000",
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
    style={{ borderColor: "hsl(35 25% 88%)" }}
  >
    <div className="flex items-center gap-3">
      <span style={{ color: "hsl(38 70% 50%)" }} className="text-sm">
        ✦
      </span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-base md:text-lg underline underline-offset-2 hover:opacity-70 transition-opacity"
          style={{ color: "hsl(20 20% 30%)" }}
        >
          {name}
        </a>
      ) : (
        <span
          className="font-body text-base md:text-lg"
          style={{ color: "hsl(20 20% 30%)" }}
        >
          {name}
        </span>
      )}
    </div>
    {distance && (
      <span
        className="font-body text-sm shrink-0 px-3 py-1 rounded-full"
        style={{
          color: "hsl(38 70% 40%)",
          backgroundColor: "hsl(38 70% 50% / 0.1)",
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
    className="rounded-2xl p-7 md:p-9 relative overflow-hidden border-ornate"
    style={{
      backgroundColor: "hsl(40 35% 98%)",
      boxShadow:
        "0 8px 40px hsl(20 25% 15% / 0.08), 0 2px 8px hsl(20 25% 15% / 0.05)",
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
          style={{ color: "hsl(20 25% 22%)" }}
        >
          {title}
        </h3>
        <p
          className="font-body text-sm mt-0.5"
          style={{ color: "hsl(20 15% 55%)" }}
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
    >
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-20">
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
              "radial-gradient(circle, hsl(140 20% 60%) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(38 70% 50%) 0%, transparent 70%)",
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
          {/*<p
            className="font-body tracking-[0.3em] uppercase text-sm mb-4"
            style={{ color: "hsl(38 70% 50%)" }}
          >
            Plan your stay
          </p>*/}
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Accommodation
          </h2>
          <div className="decorative-line mt-5 max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-body text-center text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          style={{ color: "hsl(20 15% 45%)" }}
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
              borderColor: "hsl(38 70% 50% / 0.35)",
              color: "hsl(20 20% 40%)",
              backgroundColor: "hsl(38 70% 50% / 0.06)",
            }}
            onClick={() => {
              const venueSection = document.getElementById("venue-section");
              if (venueSection) {
                venueSection.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          >
            <MapPin className="w-4 h-4" style={{ color: "hsl(38 70% 50%)" }} />
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
                style={{ color: "hsl(140 20% 38%)" }}
              />
            }
            iconBg="hsl(140 20% 38% / 0.12)"
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
                style={{ color: "hsl(350 45% 38%)" }}
              />
            }
            iconBg="hsl(350 45% 38% / 0.12)"
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
            <Hotel className="w-6 h-6" style={{ color: "hsl(38 70% 40%)" }} />
          }
          iconBg="hsl(38 70% 50% / 0.12)"
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
          <div className="decorative-line max-w-sm mx-auto mb-6">
            <span style={{ color: "hsl(38 70% 50%)" }}>✦</span>
          </div>
          <p
            className="font-body text-base italic"
            style={{ color: "hsl(20 15% 52%)" }}
          >
            We recommend booking early to secure your preferred accommodation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodation;
