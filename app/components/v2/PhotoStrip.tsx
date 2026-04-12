"use client";

import Image from "next/image";

const photos = [
  "/cohort/cohort17.jpeg", "/cohort/cohort18.jpeg", "/cohort/cohort19.jpeg",
  "/cohort/cohort0.png", "/cohort/cohort1.jpeg", "/cohort/cohort3.jpeg",
  "/cohort/cohort5.jpeg", "/cohort/cohort7.jpeg", "/cohort/cohort9.jpeg",
  "/cohort/cohort11.jpeg", "/cohort/cohort13.jpeg", "/cohort/cohort15.jpeg",
];

const PhotoSet = () => (
  <div className="flex gap-[3px] shrink-0">
    {photos.map((src, i) => (
      <div key={i} className="h-[130px] lg:h-[180px] shrink-0 relative w-[200px] lg:w-[270px] overflow-hidden group">
        <Image
          src={src}
          alt={`Cohort photo ${i + 1}`}
          fill
          sizes="270px"
          className="object-cover opacity-70 grayscale-[0.15] group-hover:opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-8vc"
        />
      </div>
    ))}
  </div>
);

function PhotoStrip() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />
      <div className="flex gap-[3px] animate-marquee-photos">
        <PhotoSet />
        <PhotoSet />
      </div>
    </div>
  );
}

export default PhotoStrip;
