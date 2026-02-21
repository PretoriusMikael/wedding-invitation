"use client";

import { motion } from "framer-motion";
import { MapPin, Car, Plane } from "lucide-react";
import venueImage from "@/app/assets/duvon-directions.jpeg";
import reception from "@/app/assets/reception-blurred.jpeg";
import Image from "next/image";

const VenueSection = () => {
  return (
    <section className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden bg-muted/30">
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-20">
        <Image
          src={reception}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-background" />
      </div>
      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-body tracking-[0.3em] uppercase text-sm mb-4">
            Where Dreams Come True
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            The Venue
          </h2>
          <div className="decorative-line mt-6 max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={venueImage}
                alt="Duvon Wine & Wedding Estate"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -inset-4 border-2 border-accent/30 rounded-lg -z-10" />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-3xl text-foreground mb-4">
                Duvon Wine & Wedding Estate
              </h3>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Nestled in the heart of Roberston historic district, Duvon Wine
                & Wedding Estate is a breathtaking venue featuring manicured
                gardens, a stunning ballroom, and views that seem to belong in a
                painting.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground">
                    Address
                  </h4>
                  <p className="text-muted-foreground font-body">
                    Duvon Wine &amp; Wedding Estate
                    <br />
                    Little Italy, Robertson, 6705
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground">
                    Parking
                  </h4>
                  <p className="text-muted-foreground font-body">
                    Parking will be made available for all guests
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Plane className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4
                    className="font-display text-lg text-foreground underline hover:cursor-pointer"
                    onClick={() => {
                      const accommodationSection = document.getElementById(
                        "accommodation-section",
                      );
                      if (accommodationSection) {
                        accommodationSection.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    Accommodations
                  </h4>
                  <p className="text-muted-foreground font-body">
                    Refer back to the Accommodations section for more
                    information.
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://www.google.com/maps/place/DuVon+|+Robertson+|+Wedding+Venue+|+Winelands/@-33.8126029,19.7819996,17z/data=!3m1!4b1!4m9!3m8!1s0x1dd26e48e61ef1fd:0x26f6a9d61cf5a3dc!5m2!4m1!1i2!8m2!3d-33.8126029!4d19.7845745!16s%2Fg%2F1vnhvp6w?entry=ttu&amps;g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-primary text-primary-foreground font-body text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Directions
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
