"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const heroImages = [
  { src: "/images/schoolimage.jpeg", alt: "Newaz Ali Ideal School main campus image" },
  { src: "/images/school1.jpg", alt: "Newaz Ali Ideal School campus view 1" },
  { src: "/images/school2.jpg", alt: "Newaz Ali Ideal School campus view 2" },
  { src: "/images/school3.jpg", alt: "Newaz Ali Ideal School campus view 3" },
  { src: "/images/school4.webp", alt: "Newaz Ali Ideal School campus view 4" },
];

const driftClasses = [
  "hero-slide-drift-a",
  "hero-slide-drift-b",
  "hero-slide-drift-c",
  "hero-slide-drift-d",
  "hero-slide-drift-e",
];

const driftOffsetClasses = [
  "hero-slide-offset-a",
  "hero-slide-offset-b",
  "hero-slide-offset-c",
  "hero-slide-offset-d",
  "hero-slide-offset-e",
];

export function HomeHeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="hero-media absolute inset-0">
      {heroImages.map((image, index) => {
        const isActive = index === activeIndex;

        return (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={[
              "hero-slide object-cover object-center brightness-[0.88] saturate-[1.02] contrast-[1.04]",
              "transition-opacity duration-7000 ease-in-out motion-reduce:transition-none",
              driftClasses[index],
              driftOffsetClasses[index],
              isActive ? "hero-slide-active opacity-100 blur-0" : "opacity-0 scale-[1.08] blur-sm",
            ].join(" ")}
          />
        );
      })}

      <div className="hero-overlay hero-overlay-shift absolute inset-0" aria-hidden="true" />
    </div>
  );
}
