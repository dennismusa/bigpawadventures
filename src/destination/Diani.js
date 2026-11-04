import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Waves,
  Sun,
  Palmtree,
  Ship,
  Camera,
  MapPin,
  CalendarDays,
  CheckCircle2,
  Compass,
  Heart,
  Anchor,
  Plane,
  Shell,
  Sparkles,
  Phone,
  Mail,
 
} from "lucide-react";

import diani1 from "../assets/diani1.jpg";
import diani2 from "../assets/diani2.jpg";
import diani4 from "../assets/diani4.jpg";
import diani5 from "../assets/diani5.jpg";

import watamu1 from "../assets/watamu1.jpg";
import watamu2 from "../assets/watamu2.jpg";
import watamu3 from "../assets/watamu3.jpg";

//const ORANGE = "#FF7A1A";
const WHATSAPP = "254747859681";

const experiences = [
  {
    number: "01",
    title: "Beach Escapes",
    description:
      "Unwind on beautiful white-sand beaches, swim in turquoise waters and enjoy the relaxed rhythm of the Kenyan coast.",
    icon: Waves,
  },
  {
    number: "02",
    title: "Ocean Adventures",
    description:
      "Discover the Indian Ocean through boat excursions, snorkelling, diving and unforgettable marine experiences.",
    icon: Ship,
  },
  {
    number: "03",
    title: "Coastal Culture",
    description:
      "Explore Swahili heritage, historic coastal towns, local cuisine and the warm hospitality of the Kenyan coast.",
    icon: Shell,
  },
  {
    number: "04",
    title: "Romantic Getaways",
    description:
      "Create special memories with beautiful beachfront stays, sunset moments and carefully planned coastal escapes.",
    icon: Heart,
  },
];

const dianiHighlights = [
  "White-sand beaches and clear turquoise waters",
  "Snorkelling and diving experiences",
  "Dolphin excursions and ocean adventures",
  "Kisite-Mpunguti Marine Park excursions",
  "Shimba Hills nature and wildlife experiences",
  "Sunset dining and romantic beach escapes",
];

const watamuHighlights = [
  "Watamu Marine National Park",
  "Snorkelling and colourful coral reefs",
  "Mida Creek and scenic boat excursions",
  "Gede Ruins and Swahili history",
  "Beautiful beaches and coastal relaxation",
  "Marine wildlife and nature experiences",
];

const travelTips = [
  {
    title: "Best time to visit",
    description:
      "The Kenyan coast can be enjoyed throughout the year. Drier months are especially popular for beach activities and ocean excursions.",
    icon: Sun,
  },
  {
    title: "What to pack",
    description:
      "Bring light clothing, swimwear, comfortable sandals, sunscreen, sunglasses and a hat.",
    icon: Shell,
  },
  {
    title: "Getting there",
    description:
      "Diani is accessible through Ukunda Airport and road connections from Mombasa. Watamu can be reached through Malindi Airport or by road.",
    icon: Plane,
  },
  {
    title: "Travel experiences",
    description:
      "Combine beach relaxation with marine adventures, cultural visits and inland nature excursions.",
    icon: Compass,
  },
];

const galleryImages = [
  { image: diani1, title: "Diani Beach", category: "Coastal Paradise" },
  { image: diani2, title: "Ocean Adventures", category: "Explore the Coast" },
  { image: diani4, title: "Tropical Escape", category: "Relax & Unwind" },
  { image: diani5, title: "Indian Ocean", category: "Endless Blue" },
  { image: watamu1, title: "Watamu Coast", category: "Discover Watamu" },
  { image: watamu2, title: "Marine Experiences", category: "Ocean Discovery" },
  { image: watamu3, title: "Coastal Beauty", category: "Kenya's Coastline" },
];

const Diani = () => {
  useEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, []);

  const whatsappLink = (message) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  return (
    <main className="overflow-hidden bg-white text-[#171014]">
      {/* HERO */}
      <section className="relative flex min-h-[680px] items-center overflow-hidden bg-[#171014] sm:min-h-[740px]">
        <img
          src={diani1}
          alt="Beautiful tropical Diani Beach on the Kenyan coast"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171014]/90 via-[#171014]/65 to-[#171014]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171014]/75 via-transparent to-[#171014]/20" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#FF7A1A]" />
              BigPaw Coastal Collection
            </div>

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#FFA51F] sm:text-sm">
              Discover Kenya's Tropical Coast
            </p>

            <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]">
              Diani & Watamu.
              <span className="mt-2 block text-[#FFA51F]">
                Coastal Magic.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Escape to a world of white-sand beaches, turquoise waters,
              unforgettable ocean adventures and the relaxed beauty of
              Kenya's coastline.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink(
                  "Hello BigPaw Adventure Safaris, I would like to plan a Diani or Watamu coastal holiday. Please share your packages and prices."
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FF7A1A] px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#e8660b]"
              >
                Plan Your Coastal Escape
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#destinations"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/50 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#171014]"
              >
                Explore Destinations
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/20 pt-7 text-white/80">
            <div className="flex items-center gap-3">
              <Waves className="text-[#FFA51F]" size={19} />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Indian Ocean
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Palmtree className="text-[#FFA51F]" size={19} />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Tropical Beaches
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="text-[#FFA51F]" size={19} />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Unforgettable Escapes
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden h-40 w-40 rounded-tl-full border-l border-t border-white/20 lg:block" />
      </section>

      {/* INTRO */}
      <section className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#FF7A1A]" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#FF7A1A]">
                The Kenyan Coast
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight text-[#171014] sm:text-5xl lg:text-6xl">
              Where the ocean meets
              <span className="text-[#FF7A1A]"> paradise.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600">
              Kenya's coastline offers a beautiful blend of natural scenery,
              Swahili culture, warm hospitality and exciting ocean adventures.
              From the palm-lined shores of Diani to the marine beauty of
              Watamu, every destination offers something special.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Whether you are planning a romantic getaway, a family holiday,
              a group adventure or a peaceful retreat, BigPaw Adventure Safaris
              can help you create a coastal experience worth remembering.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-6 border-t border-gray-200 pt-8">
              <div>
                <p className="font-serif text-3xl font-bold text-[#FF7A1A]">
                  Diani
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                  Beach Paradise
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-[#FF7A1A]">
                  Watamu
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                  Marine Beauty
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border border-[#FF7A1A]/30" />
            <img
              src={diani2}
              alt="Diani coastal holiday experience"
              className="relative z-10 h-[420px] w-full rounded-sm object-cover shadow-2xl sm:h-[540px]"
            />

            <div className="absolute -bottom-7 -left-4 z-20 max-w-[270px] bg-[#171014] p-7 text-white shadow-xl sm:-left-8">
              <Waves className="mb-4 text-[#FFA51F]" size={28} />
              <p className="font-serif text-2xl font-semibold">
                Your coastal story starts here.
              </p>
              <p className="mt-3 text-xs leading-6 text-white/60">
                Discover the beauty of Kenya's Indian Ocean coastline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section
        id="destinations"
        className="bg-[#FFF9F5] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#FF7A1A]" />
                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#FF7A1A]">
                  Explore the Coast
                </span>
              </div>

              <h2 className="font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
                Two destinations.
                <span className="block text-[#FF7A1A]">
                  Endless experiences.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-600">
              Explore two of Kenya's most beautiful coastal destinations,
              each offering its own unique atmosphere and unforgettable
              experiences.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* DIANI CARD */}
            <article className="group relative min-h-[570px] overflow-hidden bg-[#171014]">
              <img
                src={diani4}
                alt="Diani Beach tropical coastline"
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#171014] via-[#171014]/30 to-transparent" />

              <div className="absolute left-7 top-7">
                <span className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  Destination 01
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFA51F]">
                  South Coast • Kwale County
                </p>

                <h3 className="font-serif text-5xl font-semibold text-white sm:text-6xl">
                  Diani Beach
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/75">
                  Famous for its powder-white beaches, palm trees, beautiful
                  ocean views and a wide range of coastal adventures.
                </p>

                <div className="mt-7 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-wider text-white">
                  <span className="rounded-full border border-white/30 px-4 py-2">
                    Beach Holidays
                  </span>
                  <span className="rounded-full border border-white/30 px-4 py-2">
                    Water Sports
                  </span>
                  <span className="rounded-full border border-white/30 px-4 py-2">
                    Marine Life
                  </span>
                </div>

                <a
                  href={whatsappLink(
                    "Hello BigPaw Adventure Safaris, I am interested in a Diani Beach holiday. Please share available packages and prices."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-[#FFA51F] transition hover:text-white"
                >
                  Explore Diani
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>

            {/* WATAMU CARD */}
            <article className="group relative min-h-[570px] overflow-hidden bg-[#171014]">
              <img
                src={watamu1}
                alt="Watamu coastal paradise in Kenya"
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#171014] via-[#171014]/30 to-transparent" />

              <div className="absolute left-7 top-7">
                <span className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  Destination 02
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFA51F]">
                  North Coast • Kilifi County
                </p>

                <h3 className="font-serif text-5xl font-semibold text-white sm:text-6xl">
                  Watamu
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/75">
                  A peaceful coastal paradise known for its marine park,
                  coral reefs, beautiful beaches and fascinating coastal
                  heritage.
                </p>

                <div className="mt-7 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-wider text-white">
                  <span className="rounded-full border border-white/30 px-4 py-2">
                    Marine Park
                  </span>
                  <span className="rounded-full border border-white/30 px-4 py-2">
                    Snorkelling
                  </span>
                  <span className="rounded-full border border-white/30 px-4 py-2">
                    Nature
                  </span>
                </div>

                <a
                  href={whatsappLink(
                    "Hello BigPaw Adventure Safaris, I am interested in a Watamu coastal holiday. Please share available packages and prices."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-[#FFA51F] transition hover:text-white"
                >
                  Explore Watamu
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-[#171014] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#FF7A1A]" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#FFA51F]">
                Make Every Moment Count
              </span>
              <span className="h-[2px] w-10 bg-[#FF7A1A]" />
            </div>

            <h2 className="font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Experiences beyond
              <span className="text-[#FFA51F]"> the beach.</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/55">
              Your coastal holiday is more than a destination. It is a
              collection of moments, discoveries and experiences that stay
              with you long after the journey ends.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group bg-[#171014] p-8 transition duration-500 hover:bg-[#241a1b] sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-[#FF7A1A]">
                      {item.number}
                    </span>
                    <Icon
                      size={28}
                      strokeWidth={1.4}
                      className="text-[#FFA51F] transition duration-300 group-hover:-translate-y-1"
                    />
                  </div>

                  <h3 className="mt-12 font-serif text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {item.description}
                  </p>

                  <div className="mt-8 h-[2px] w-10 bg-[#FF7A1A] transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIANI HIGHLIGHTS */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img
              src={diani5}
              alt="Beautiful Diani Beach scenery"
              className="h-[460px] w-full object-cover sm:h-[590px]"
            />

            <div className="absolute bottom-6 left-6 max-w-[260px] bg-[#FF7A1A] p-7 text-white sm:bottom-10 sm:left-10">
              <Waves size={28} />
              <p className="mt-4 font-serif text-2xl font-semibold">
                Discover the beauty of Diani.
              </p>
            </div>

            <div className="absolute -right-4 -top-4 -z-10 h-32 w-32 border-r-2 border-t-2 border-[#FF7A1A]" />
          </div>

          <div>
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-[#FF7A1A]">
              South Coast Experiences
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Diani.
              <span className="block text-[#FF7A1A]">
                A tropical state of mind.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-gray-600">
              Diani is one of Kenya's most loved beach destinations. Its
              combination of soft white sand, warm ocean waters, swaying
              palms and exciting activities makes it an excellent choice
              for all kinds of travellers.
            </p>

            <div className="mt-9 space-y-4">
              {dianiHighlights.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#FF7A1A]"
                  />
                  <p className="text-sm font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink(
                "Hello BigPaw Adventure Safaris, I would like to explore Diani Beach and its activities. Please help me plan my trip."
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#171014] px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-[#FF7A1A]"
            >
              Plan a Diani Holiday
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* WATAMU HIGHLIGHTS */}
      <section className="bg-[#FFF9F5] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-[#FF7A1A]">
              North Coast Experiences
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Watamu.
              <span className="block text-[#FF7A1A]">
                A world beneath the waves.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-gray-600">
              Watamu is a beautiful coastal destination where marine
              conservation, nature and relaxation come together. Its
              surrounding waters offer wonderful opportunities to discover
              colourful marine life and explore the coastline.
            </p>

            <div className="mt-9 space-y-4">
              {watamuHighlights.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#FF7A1A]"
                  />
                  <p className="text-sm font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink(
                "Hello BigPaw Adventure Safaris, I would like to explore Watamu and its marine experiences. Please share more information."
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#171014] px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-[#FF7A1A]"
            >
              Plan a Watamu Holiday
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="relative order-1 lg:order-2">
            <img
              src={watamu2}
              alt="Watamu marine and coastal scenery"
              className="h-[460px] w-full object-cover sm:h-[590px]"
            />

            <div className="absolute -bottom-5 -right-4 h-32 w-32 border-b-2 border-r-2 border-[#FF7A1A]" />

            <div className="absolute right-6 top-6 bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:right-10 sm:top-10">
              <Anchor className="text-[#FF7A1A]" size={27} />
              <p className="mt-3 font-serif text-xl font-semibold text-[#171014]">
                Marine Discovery
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">
                Explore the Indian Ocean
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-[#FF7A1A]">
              Moments Worth Remembering
            </p>

            <h2 className="font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
              The coast in pictures.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
              Explore the beauty of Diani and Watamu through the landscapes,
              ocean views and tropical scenery that make Kenya's coast so
              special.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {galleryImages.map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden bg-gray-100 ${
                  index === 0 || index === 5
                    ? "col-span-2 h-[280px] sm:h-[360px]"
                    : "h-[280px] sm:h-[360px]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#171014]/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#FFA51F]">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                  <Camera size={15} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS */}
      <section className="bg-[#171014] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-[#FFA51F]">
              Plan With Confidence
            </p>

            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
              Before you take off.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/55">
              A few helpful tips to make your coastal holiday comfortable,
              enjoyable and memorable.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {travelTips.map((tip, index) => {
              const Icon = tip.icon;

              return (
                <div
                  key={tip.title}
                  className="border-t border-white/20 pt-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#FFA51F]">
                      0{index + 1}
                    </span>
                    <Icon size={24} className="text-[#FF7A1A]" />
                  </div>

                  <h3 className="mt-8 font-serif text-2xl font-semibold">
                    {tip.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLANNING STRIP */}
      <section className="border-b border-gray-200 bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0E5] text-[#FF7A1A]">
              <CalendarDays size={22} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold">
                Flexible Holidays
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Plan a short beach break or a longer coastal adventure.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0E5] text-[#FF7A1A]">
              <Compass size={22} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold">
                Personalised Planning
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Get assistance planning experiences that match your interests.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0E5] text-[#FF7A1A]">
              <Heart size={22} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold">
                Memorable Moments
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Enjoy meaningful travel experiences along the Kenyan coast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#FF7A1A] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/20" />
        <div className="absolute -right-5 -top-16 h-64 w-64 rounded-full border border-white/20" />
        <div className="absolute -bottom-36 -left-20 h-96 w-96 rounded-full border border-white/20" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-6 text-[11px] font-black uppercase tracking-[0.3em] text-white/80">
              Your Next Adventure Awaits
            </p>

            <h2 className="font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Let's make your
              <span className="block text-[#171014]">
                coastal escape happen.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/85">
              Whether it is Diani, Watamu or both, let BigPaw Adventure
              Safaris help you plan a coastal holiday filled with beautiful
              scenery, exciting experiences and lasting memories.
            </p>
          </div>

          <a
            href={whatsappLink(
              "Hello BigPaw Adventure Safaris! I am ready to plan my Diani and Watamu coastal holiday. Please assist me with packages, accommodation and prices."
            )}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-[#171014] px-9 py-5 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#171014]"
          >
            Start Planning
            <ArrowUpRight
              size={18}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#171014] px-5 pb-8 pt-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block">
                <span className="font-serif text-3xl font-bold tracking-tight">
                  BIGPAW
                  <span className="text-[#FF7A1A]">.</span>
                </span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.32em] text-white/50">
                  Adventure Safaris
                </span>
              </Link>

              <p className="mt-7 max-w-sm text-sm leading-7 text-white/50">
                We don't count moments! We make moments count. Discover
                unforgettable African adventures and beautiful coastal
                experiences with BigPaw Adventure Safaris.
              </p>

              <div className="mt-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFA51F]">
                <span className="h-[1px] w-8 bg-[#FF7A1A]" />
                Explore. Experience. Remember.
              </div>
            </div>

            <div>
              <h3 className="mb-7 text-xs font-black uppercase tracking-[0.2em] text-[#FFA51F]">
                Quick Links
              </h3>

              <ul className="space-y-4 text-sm text-white/60">
                <li>
                  <Link to="/" className="transition hover:text-[#FF7A1A]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="transition hover:text-[#FF7A1A]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/safaris"
                    className="transition hover:text-[#FF7A1A]"
                  >
                    Safari Packages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/activities"
                    className="transition hover:text-[#FF7A1A]"
                  >
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="transition hover:text-[#FF7A1A]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-7 text-xs font-black uppercase tracking-[0.2em] text-[#FFA51F]">
                Get In Touch
              </h3>

              <div className="space-y-5 text-sm text-white/60">
                <a
                  href="tel:+254747859681"
                  className="flex items-center gap-3 transition hover:text-[#FF7A1A]"
                >
                  <Phone size={16} className="text-[#FF7A1A]" />
                  +254 747 859681
                </a>

                <a
                  href="tel:+254720859681"
                  className="flex items-center gap-3 transition hover:text-[#FF7A1A]"
                >
                  <Phone size={16} className="text-[#FF7A1A]" />
                  +254 720 859681
                </a>

                <a
                  href="mailto:bigpawadventures@gmail.com"
                  className="flex items-center gap-3 break-all transition hover:text-[#FF7A1A]"
                >
                  <Mail size={16} className="shrink-0 text-[#FF7A1A]" />
                  bigpawadventures@gmail.com
                </a>

                <p className="flex items-center gap-3">
                  <MapPin size={16} className="shrink-0 text-[#FF7A1A]" />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-7 text-[10px] font-medium uppercase tracking-[0.15em] text-white/35 sm:flex-row">
            <p>
              © {new Date().getFullYear()} BigPaw Adventure Safaris. All
              rights reserved.
            </p>
            <p>We Don't Count Moments. We Make Moments Count.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsappLink(
          "Hello BigPaw Adventure Safaris, I would like to enquire about Diani and Watamu coastal holidays."
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with BigPaw Adventure Safaris on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF7A1A] text-white shadow-2xl transition hover:scale-110 hover:bg-[#e8660b]"
      >
        <Phone size={23} />
      </a>
    </main>
  );
};

export default Diani;