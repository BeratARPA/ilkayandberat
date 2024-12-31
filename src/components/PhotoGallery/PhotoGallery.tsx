import React from "react";
import { Sparkles } from "lucide-react";
import { PhotoCard } from "./PhotoCard";
import { Section } from "../ui/Section";

const photos = [
  {
    url: "src/Images/1.jpg",
    caption: "Seni Seviyorum 🤍",
    date: "",
  },
  {
    url: "src/Images/2.jpg",
    caption: "Seni Seviyorum 🤍",
    date: "",
  },
  {
    url: "src/Images/3.jpg",
    caption: "Seni Seviyorum 🤍",
    date: "",
  },
  {
    url: "src/Images/4.jpg",
    caption: "Seni Seviyorum 🤍",
    date: "",
  },
  {
    url: "src/Images/5.jpg",
    caption: "Seni Seviyorum 🤍",
    date: "",
  },
  {
    url: "src/Images/6.jpg",
    caption: "Seni Seviyorum 🤍",
    date: "",
  },
];

export function PhotoGallery() {
  return (
    <Section>
      <h2 className="text-4xl font-bold text-center mb-12 text-red-600 flex items-center justify-center gap-3">
        <Sparkles className="w-8 h-8" />
        Unutulmaz Anılarımız
        <Sparkles className="w-8 h-8" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <PhotoCard key={index} {...photo} />
        ))}
      </div>
    </Section>
  );
}
