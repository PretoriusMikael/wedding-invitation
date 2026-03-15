"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Will the event be indoors or outdoors?",
    answer:
      "Our ceremony and reception will take place outdoors in the beautiful garden grounds of Duvon Wine & Wedding Estate. We recommend wearing comfortable footwear suitable for walking on grass and uneven terrain. The ceremony area is covered in case of bad weather, and the reception will be held indoors, ensuring everyone can enjoy the evening comfortably.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "We kindly ask that guests arrive from 15:00, so you have time to get settled. The ceremony will begin promptly at 15:30, and we wouldn't want you to miss a single moment of the celebration.",
  },
  {
    question: "Are children welcome?",
    answer:
      "We love your little ones and know they bring joy, but we kindly ask that the wedding be an adults-only celebration. We appreciate your understanding and look forward to celebrating together.",
  },
  {
    question: "Are plus-ones allowed?",
    answer:
      "To help us manage the event and ensure seating arrangements, we can only accommodate the guests listed on the invitation. We appreciate your understanding and look forward to celebrating with you.",
  },
  {
    question: "Are there bar facilities at the reception",
    answer:
      "Yes! Drinks will be provided during the canapé hour, and wine will be available at each table during the reception. A cash bar will also be available for any additional beverages. Please note that outside drinks are not permitted at the venue.",
  },
  {
    question: "Is there a gift registry or preferred way to give gifts?",
    answer:
      "Your presence at our wedding is truly the greatest gift we could ask for, and we are so grateful to celebrate this special day with you. Should you wish to honour us with a gift, amonetary gift towards our future home would deeply be appreciated. Alternatively, we will share a small registry closer to the time for those who prefer to gift something for our home.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: FAQItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="glass rounded-2xl overflow-hidden"
    style={{
      boxShadow: isOpen
        ? "0 8px 40px hsl(var(--foreground) / 0.1), 0 2px 8px hsl(var(--foreground) / 0.06)"
        : "0 2px 12px hsl(var(--foreground) / 0.06)",
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
              ? "hsl(var(--palette-olive))"
              : "hsl(var(--palette-amber) / 0.15)",
            color: isOpen
              ? "hsl(var(--primary-foreground))"
              : "hsl(var(--palette-amber))",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        >
          {index + 1}
        </span>
        <span
          className="font-display text-lg md:text-xl"
          style={{
            color: isOpen
              ? "hsl(var(--palette-olive))"
              : "hsl(var(--foreground))",
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
            ? "hsl(var(--palette-olive) / 0.1)"
            : "hsl(var(--palette-amber) / 0.12)",
        }}
      >
        {isOpen ? (
          <Minus
            className="w-4 h-4"
            style={{ color: "hsl(var(--palette-olive))" }}
          />
        ) : (
          <Plus
            className="w-4 h-4"
            style={{ color: "hsl(var(--palette-amber))" }}
          />
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
            style={{ borderTop: "1px solid hsl(var(--border))" }}
          >
            <div className="pt-5 pl-11">
              <p
                className="font-body text-base md:text-lg leading-relaxed"
                style={{ color: "hsl(var(--muted-foreground))" }}
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
    <section
      className="snap-section relative flex items-center justify-center py-20 px-4 overflow-hidden bg-muted/20"
      style={
        {
          "--section-accent": "hsl(var(--palette-amber))",
        } as React.CSSProperties
      }
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--palette-amber)) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--palette-amber)) 0%, transparent 70%)",
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
            style={{ color: "hsl(var(--palette-amber))" }}
          >
            Got questions?
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            FAQ&apos;s
          </h2>
          <div className="decorative-line mt-5 max-w-xs mx-auto">
            <span style={{ color: "hsl(var(--palette-amber))" }}>✦</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-body text-lg mt-6 max-w-xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
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
          <p
            className="font-body text-base italic"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Still have questions? Reach out to us at{" "}
            <a
              href="mailto:swanepoel.hm@gmail.com"
              className="underline underline-offset-4"
              style={{ color: "hsl(var(--palette-olive))" }}
            >
              swanepoel.hm@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
