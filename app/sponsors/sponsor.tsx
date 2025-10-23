'use client';
import React from "react";
import { motion } from "framer-motion";


export type Sponsor = {
  id: string;
  name?: string;
  src: string; // served path, e.g. /sponsors/binance.png
  alt?: string;
  url?: string;
};

interface SponsorsProps {
  sponsors?: Sponsor[];
  /** seconds for one full loop across the viewport */
  loopDuration?: number;
  className?: string;
}

export default function Sponsors({
  sponsors,
  loopDuration = 100,
  className = "",
}: SponsorsProps) {
  if (!sponsors || sponsors.length === 0) {
    if (typeof window !== "undefined")
      console.info(
        "Sponsors: no sponsors provided. Use getSponsorsFromPublicDir() in Next.js or pass a sponsors prop."
      );
    return (
      <section aria-labelledby="sponsors-heading" className={`py-8 ${className}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="sponsors-heading" className="text-center text-3xl sm:text-4xl font-semibold mb-6">
            Meet Our Sponsors
          </h2>
          <div className="h-24 flex items-center justify-center text-sm text-muted-foreground">
            No sponsors found.
          </div>
        </div>
      </section>
    );
  }

  // triple duplicate to create a seamless infinite loop
  const duplicated = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section aria-labelledby="sponsors-heading" className={`py-8 ${className}`}>
      <div className="w-full mx-auto px-6">
        <h2 id="sponsors-heading" className="text-center text-3xl sm:text-4xl font-semibold mb-6">
          Meet Our Sponsors
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center whitespace-nowrap"
            initial={{ x: "0%" }}
            animate={{ x: ["-0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: loopDuration,
                ease: "linear",
              },
            }}
          >
            {duplicated.map((s, idx) => (
              <a
                key={`${s.id ?? s.src}-${idx}`}
                href={s.url ?? "#"}
                target={s.url ? "_blank" : undefined}
                rel={s.url ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center px-8 py-6"
                aria-label={s.alt ?? s.name ?? `sponsor-${idx}`}
              >
                <img
                  src={s.src}
                  alt={s.alt ?? s.name ?? "sponsor"}
                  loading="lazy"
                  className="w-auto h-16 min-h-[128px] min-w-[64px] sm:h-28 md:h-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ filter: "grayscale(1)", transition: "filter .25s" }}
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
