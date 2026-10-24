import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { wedding } from "../config/wedding";

function formatBlessing(name: string, prefix = "from the blessings of"): string {
  const trimmed = name.trim();
  if (/family$/i.test(trimmed)) {
    return `${prefix} ${trimmed}`;
  }
  return `${prefix} ${trimmed} and Family`;
}

/**
 * Celebratory blessings marquee banner ticker.
 * Positioned right after Hero Temple (post the first section),
 * gracefully rolling out cordial blessings from family and friends with live AI RSVP updates.
 */
export function HorizontalStory() {
  const configuredNames = wedding.blessingsMarquee?.names || [
    "Ramakanth",
    "Varshini P S",
    "Kumar",
    "Rahul",
    "Harish",
    "Hanumantha",
    "Kallu",
    "Farnandes",
    "Gagan",
    "Drake",
  ];
  const prefix = wedding.blessingsMarquee?.prefix || "from the blessings of";

  const [guestNames, setGuestNames] = useState<string[]>(configuredNames);

  // Fetch updated list from the AI chat backend, and listen for live guest RSVP additions
  useEffect(() => {
    let isMounted = true;

    fetch("/api/blessings")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: string[]) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setGuestNames((prev) => {
            const merged = Array.from(new Set([...data, ...prev]));
            return merged;
          });
        }
      })
      .catch(() => {
        // Fallback cleanly to configured names
      });

    const handleNewBlessing = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && typeof customEvent.detail === "string") {
        const newName = customEvent.detail.trim();
        if (newName) {
          setGuestNames((prev) => {
            if (!prev.includes(newName)) {
              return [newName, ...prev];
            }
            return prev;
          });
        }
      }
    };

    window.addEventListener("guest-blessing-updated", handleNewBlessing);
    return () => {
      isMounted = false;
      window.removeEventListener("guest-blessing-updated", handleNewBlessing);
    };
  }, []);

  const tickerItems = useMemo(() => {
    const blessingItems = guestNames.map((name) => ({
      text: formatBlessing(name, prefix),
      highlight: false,
    }));

    // Interleave celebratory phrases with the blessings for a rich, royal rhythm
    const items: { text: string; highlight: boolean }[] = [
      { text: "✨ CELEBRATING PRITHVI & VARSHINI ✨", highlight: true },
    ];

    blessingItems.forEach((blessing, idx) => {
      items.push(blessing);
      if (idx === 3) {
        items.push({ text: "💛 TWO HEARTS, ONE BEAUTIFUL JOURNEY 💛", highlight: true });
      } else if (idx === 7) {
        items.push({ text: "🎉 BEGINNING OF FOREVER 🎉", highlight: true });
      }
    });

    return items;
  }, [guestNames, prefix]);

  // Duplicated sequence to allow a seamless 50% loop
  const repeated = useMemo(() => [...tickerItems, ...tickerItems], [tickerItems]);

  // Proportional speed so scrolling remains comfortable regardless of list size
  const duration = Math.max(34, tickerItems.length * 3.5);

  return (
    <section 
      aria-label="Celebration blessings banner"
      className="relative w-full overflow-hidden bg-[#F5EBDD] py-3 sm:py-3.5 border-y border-[#B69A62]/40 z-20 select-none shadow-xs"
    >
      {/* Subtle edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F5EBDD] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F5EBDD] to-transparent z-10" />

      {/* Infinite scrolling ticker */}
      <motion.div
        className="flex whitespace-nowrap items-center will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
      >
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center shrink-0">
            <span
              className={`px-3 sm:px-4 ${
                item.highlight
                  ? "font-editorial font-bold text-sm sm:text-base text-[#B69A62] tracking-widest uppercase"
                  : "font-editorial text-sm sm:text-base text-[#49372B]/85 tracking-wide"
              }`}
            >
              {item.text}
            </span>
            <span className="text-[#B69A62] text-xs select-none px-2 sm:px-3">
              ✦
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
