"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Are children welcome?",
    answer:
      "We love your little ones! Children are welcome at our celebration. We kindly ask that parents keep an eye on their children during the ceremony so everyone can enjoy the special moments. We will have a dedicated kids' area at the reception to keep them entertained.",
  },
  {
    question: "Will the event be indoors or outdoors?",
    answer:
      "Our ceremony and reception will be held outdoors in the beautiful garden grounds of Duvon Wine & Wedding Estate. We recommend comfortable footwear suitable for garden terrain. In the event of inclement weather, we have a stunning indoor backup venue ready to ensure the day goes perfectly.",
  },
  {
    question: "Is there parking at the venue?",
    answer:
      "Yes! Duvon Wine & Wedding Estate has ample on-site parking available for all guests at no charge. Parking attendants will be on hand to assist you. If you plan on enjoying the celebrations, we strongly encourage you to arrange a designated driver or make use of nearby accommodation.",
  },
  {
    question: "Is there a gift registry or preferred way to give gifts?",
    answer:
      "Your presence is truly the greatest gift! However, if you would like to contribute something special, we have a gift registry available. We also welcome cash contributions toward our honeymoon fund. Details will be shared closer to the date — please feel free to reach out to us directly if you'd like more information in the meantime.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, index, isOpen, onToggle }: FAQItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="rounded-2xl overflow-hidden"
    style={{
      backgroundColor: "hsl(40 35% 98%)",
      boxShadow: isOpen
        ? "0 8px 40px hsl(20 25% 15% / 0.1), 0 2px 8px hsl(20 25% 15% / 0.06)"
        : "0 2px 12px hsl(20 25% 15% / 0.06)",
      transition: "box-shadow 0.3s ease",
    }}
  >
    {/* Question row */}
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left group"
    >
      <div className="flex items-center gap-4">
        <span
          className="font-display text-lg shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm"
          style={{
            backgroundColor: isOpen
              ? "hsl(350 45% 35%)"
              : "hsl(38 70% 50% / 0.12)",
            color: isOpen ? "hsl(40 30% 96%)" : "hsl(38 70% 45%)",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        >
          {index + 1}
        </span>
        <span
          className="font-display text-lg md:text-xl"
          style={{
            color: isOpen ? "hsl(350 45% 35%)" : "hsl(20 25% 22%)",
            transition: "color 0.3s ease",
          }}
        >
          {question}
        </span>
      </div>

      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: isOpen
            ? "hsl(350 45% 35% / 0.1)"
            : "hsl(38 70% 50% / 0.1)",
        }}
      >
        {isOpen ? (
          <Minus className="w-4 h-4" style={{ color: "hsl(350 45% 35%)" }} />
        ) : (
          <Plus className="w-4 h-4" style={{ color: "hsl(38 70% 45%)" }} />
        )}
      </motion.div>
    </button>

    {/* Answer */}
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="answer"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{ overflow: "hidden" }}
        >
          <div
            className="px-7 pb-7 pt-0"
            style={{ borderTop: "1px solid hsl(35 25% 90%)" }}
          >
            <div className="pt-5 pl-11">
              <p
                className="font-body text-base md:text-lg leading-relaxed"
                style={{ color: "hsl(20 15% 45%)" }}
              >
                {answer}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden bg-muted/20">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(350 45% 35%) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(38 70% 50%) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container max-w-3xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p
            className="font-body tracking-[0.3em] uppercase text-sm mb-4"
            style={{ color: "hsl(38 70% 50%)" }}
          >
            Got questions?
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            FAQ&apos;s
          </h2>
          <div className="decorative-line mt-5 max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-body text-lg mt-6 max-w-xl mx-auto"
            style={{ color: "hsl(20 15% 50%)" }}
          >
            We&apos;ve answered some of the most common questions below. If you
            don&apos;t find what you&apos;re looking for, please don&apos;t
            hesitate to reach out to us directly.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Bottom note */}
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
            Still have questions? Reach out to us at{" "}
            <a
              href="mailto:tamryn.heinrich2025@gmail.com"
              className="underline underline-offset-4"
              style={{ color: "hsl(350 45% 40%)" }}
            >
              tamryn.heinrich2025@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
