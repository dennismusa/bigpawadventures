
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Music2,  MapPin,  Phone,  Mail,  Heart,} from "lucide-react";


import amboseli from "../assets/amboseli.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";
import serengeti from "../assets/serengeti.jpg";
//import serengeti3 from "../assets/serengeti3.jpg";
import nakuru from "../assets/nakuru.jpg";
import kili1 from "../assets/kili1.jpg";
import ngorongori1 from "../assets/ngorongoro1.jpg";
import mara1 from "../assets/mara1.jpg";
import diani1 from "../assets/diani1.jpg";
import zanzibar4 from "../assets/zanzibar4.jpg";
import image16 from "../assets/image16.jpg";
import image17 from "../assets/image17.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import climbingkenya from "../assets/climbingkenya.jpg";


import mara2 from "../assets/mara2.jpg";
import mage8 from "../assets/mage8.jpg";
import mage15 from "../assets/mage15.jpg";
import mage13 from "../assets/mage13.jpg";
/*
import mage1 from "../assets/mage1.jpg";
import mage2 from "../assets/mage2.jpg";
import mage3 from "../assets/mage3.jpg";
import mage4 from "../assets/mage4.jpg";
import mage5 from "../assets/mage5.jpg";
import mage6 from "../assets/mage6.jpg";
import mage7 from "../assets/mage7.jpg";

import mage9 from "../assets/mage9.jpg";
import mage10 from "../assets/mage10.jpg";
import mage11 from "../assets/mage11.jpg";
import mage12 from "../assets/mage12.jpg";

import mage14 from "../assets/mage14.jpg";

import mage16 from "../assets/mage16.jpg";
import mage17 from "../assets/mage17.jpg";
 ============================================================
   BIGPAW BRAND SETTINGS
============================================================ */

// eslint-disable-next-line no-unused-vars
const BRAND = {
  burgundy: "#25000F",
  orange: "#FF5A16",
  gold: "#FFA51F",
  lightGold: "#FFB04A",
  cream: "#FFF9F5",
  dark: "#171014",
};

const WHATSAPP_NUMBER = "254747859681";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/* ============================================================
   HERO SLIDES
============================================================ */

const heroSlides = [
  {
    image: mage15,
    eyebrow: "KENYA • WILDLIFE • ADVENTURE",
    title: "Discover The",
    highlight: "Wild Beauty Of Africa With Bigpaw Adventures",
    description:
      "Experience extraordinary wildlife, breathtaking landscapes and authentic African adventures with journeys designed around you.",
  },
  {
    image: mara2,
    eyebrow: "MAASAI MARA • SAFARI • WILDLIFE",
    title: "Step Into The",
    highlight: "Heart Of The Wild",
    description:
      "Explore the legendary African wilderness, encounter incredible wildlife and create memories that last a lifetime.",
  },
  {
    image: mage13,
    eyebrow: "TANZANIA • EAST AFRICA",
    title: "Adventure",
    highlight: "Without Limits",
    description:
      "From endless savannahs to spectacular landscapes, discover the magic of East Africa with BigPaw Adventure Safaris.",
  },
  {
    image: diani1,
    eyebrow: "KENYA COAST • BEACH • RELAXATION",
    title: "Escape To",
    highlight: "Paradise",
    description:
      "Enjoy beautiful beaches, turquoise waters and relaxing coastal holidays made for unforgettable moments.",
  },
];

/* ============================================================
   SAFARI PACKAGES
============================================================ */

const safariPackages = [
  {
    title: "Amboseli Safari",
    location: "Amboseli National Park, Kenya",
    days: "3 Days",
    tag: "Wildlife Safari",
    image: mage8,
    href: "/Amboseli",
    description:
      "Experience magnificent elephants, open savannahs and breathtaking views of Mount Kilimanjaro.",
  },
  {
    title: "Maasai Mara Safari",
    location: "Maasai Mara National Reserve, Kenya",
    days: "4 Days",
    tag: "Popular Experience",
    image: mara1,
    href: "/Maasaimara",
    description:
      "Discover the legendary Maasai Mara, home to incredible wildlife and the spectacular Great Wildebeest Migration.",
  },
  {
    title: "Serengeti Safari",
    location: "Serengeti National Park, Tanzania",
    days: "5 Days",
    tag: "Tanzania Adventure",
    image: serengeti,
    href: "/Serengeti",
    description:
      "Explore endless plains and experience some of Africa's most remarkable wildlife encounters.",
  },
  {
    title: "Diani Beach Escape",
    location: "Diani Beach, Kenya",
    days: "4 Days",
    tag: "Beach Holiday",
    image: diani1,
    href: "/Diani",
    description:
      "Relax along the Kenyan coast with white sandy beaches, turquoise waters and tropical experiences.",
  },
  {
    title: "Mount Kilimanjaro",
    location: "Kilimanjaro, Tanzania",
    days: "7 Days",
    tag: "Mountain Adventure",
    image: kili1,
    href: "/Mountkilimanjaro",
    description:
      "Take on Africa's highest mountain and enjoy an unforgettable journey through spectacular alpine landscapes.",
  },
  {
    title: "Zanzibar Escape",
    location: "Zanzibar, Tanzania",
    days: "5 Days",
    tag: "Island Escape",
    image: zanzibar4,
    href: "/Zanzibar",
    description:
      "Discover pristine beaches, turquoise waters, Swahili culture and unforgettable island experiences.",
  },
];

/* ============================================================
   DESTINATIONS
============================================================ */

const destinations = [
  {
    image: amboseli,
    name: "Amboseli",
    country: "Kenya",
    path: "/amboseli",
    description:
      "Magnificent elephants, open plains and spectacular views of Mount Kilimanjaro.",
  },
  {
    image: nakuru,
    name: "Lake Nakuru",
    country: "Kenya",
    path: "/lakenakuru",
    description:
      "Discover rhinos, beautiful Rift Valley landscapes and incredible birdlife.",
  },
  {
    image: mara1,
    name: "Maasai Mara",
    country: "Kenya",
    path: "/maasaimara",
    description:
      "Experience iconic wildlife, endless savannahs and the Great Migration.",
  },
  {
    image: ngorongori1,
    name: "Ngorongoro Crater",
    country: "Tanzania",
    path: "/ngorongoro",
    description:
      "Explore a spectacular natural wonder with remarkable wildlife encounters.",
  },
  {
    image: kili1,
    name: "Mount Kilimanjaro",
    country: "Tanzania",
    path: "/mountkilimanjaro",
    description:
      "Challenge yourself with an unforgettable African mountain adventure.",
  },
  {
    image: zanzibar4,
    name: "Zanzibar",
    country: "Tanzania",
    path: "/Zanzibar",
    description:
      "Enjoy tropical beaches, island culture and relaxing coastal experiences.",
  },
];

/* ============================================================
   TRAVEL EXPERIENCES
============================================================ */

const experiences = [
  {
    number: "01",
    title: "Wildlife Safaris",
    image: Wilderbeast,
    description:
      "Get closer to Africa's incredible wildlife through unforgettable game drives and safari adventures.",
  },
  {
    number: "02",
    title: "Beach Holidays",
    image: diani1,
    description:
      "Unwind on beautiful coastlines, enjoy turquoise waters and experience tropical escapes.",
  },
  {
    number: "03",
    title: "Mountain Adventures",
    image: climbingkenya,
    description:
      "Discover breathtaking mountain scenery and exciting trekking experiences.",
  },
  {
    number: "04",
    title: "Cultural Experiences",
    image: image16,
    description:
      "Connect with local communities, discover traditions and experience the richness of African culture.",
  },
];

/* ============================================================
   REUSABLE SECTION LABEL
============================================================ */

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.25em] ${
        light ? "text-[#FFB04A]" : "text-[#FF5A16]"
      }`}
    >
      <span className="h-[2px] w-8 bg-current" />
      {children}
    </div>
  );
}

/* ============================================================
   REUSABLE SECTION INTRO
============================================================ */

function SectionIntro({ label, title, highlight, text, light = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <SectionLabel light={light}>{label}</SectionLabel>

      <h2
        className={`mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#25000F]"
        }`}
      >
        {title}

        {highlight && (
          <span className="mt-1 block text-[#FF5A16]">{highlight}</span>
        )}
      </h2>

      {text && (
        <p
          className={`mx-auto mt-5 max-w-2xl text-sm leading-8 sm:text-base ${
            light ? "text-white/65" : "text-gray-600"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   HOME PAGE
============================================================ */
function Home() {
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const currentSlide = heroSlides[index];
  const fullHeadline = `${currentSlide.title} ${currentSlide.highlight}`;

  /* AUTOMATIC BACKGROUND SLIDER */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  /* TYPING HEADLINE EFFECT */
  useEffect(() => {
    let charIndex = 0;

    setTypedText("");

    const typingTimer = setInterval(() => {
      charIndex++;

      setTypedText(fullHeadline.slice(0, charIndex));

      if (charIndex >= fullHeadline.length) {
        clearInterval(typingTimer);
      }
    }, 65);

    return () => clearInterval(typingTimer);
  }, [fullHeadline]);

  return (
    <main className="overflow-hidden bg-white text-[#171014]">

      {/* ======================================================
          1. HERO SECTION
      ====================================================== */}


<section
  id="home"
  className="relative isolate flex min-h-[430px] items-center overflow-hidden bg-[#171014] sm:min-h-[490px] lg:min-h-[540px]"
>
  {/* BACKGROUND IMAGE SLIDER */}
  <div className="absolute inset-0 -z-20">
    {heroSlides.map((slide, i) => (
      <div
        key={i}
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${slide.image}")`,
          opacity: index === i ? 1 : 0,
          transform: index === i ? "scale(1.04)" : "scale(1)",
          transition:
            "opacity 1400ms ease-in-out, transform 8000ms ease-out",
        }}
      />
    ))}
  </div>

  {/* LIGHTER IMAGE OVERLAYS */}
  <div className="absolute inset-0 -z-10 bg-black/15" />

  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/40 to-black/5" />

  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

  {/* SUBTLE ORANGE LIGHT */}
  <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-72 w-72 rounded-full bg-[#FF8A36]/10 blur-[100px]" />

  {/* HERO CONTENT */}
  <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
    <div className="max-w-3xl text-white">

      {/* BRAND BADGE */}
      <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-black/20 px-3.5 py-2 shadow-lg backdrop-blur-md sm:gap-3 sm:px-4">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFA51F] opacity-60" />
          <span className="relative h-2 w-2 rounded-full bg-[#FFA51F]" />
        </span>

        <span className="text-[9px] font-bold uppercase tracking-[1.5px] sm:text-[10px] sm:tracking-[2px]">
          BigPaw Adventure Safaris
        </span>

        <span className="hidden h-4 w-px bg-white/40 sm:block" />

        <span className="hidden text-[9px] font-semibold uppercase tracking-wider text-[#FFD08A] sm:block">
          Explore Africa
        </span>
      </div>

      {/* SLIDE EYEBROW */}
      <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.23em] text-[#FFD08A] sm:text-xs">
        {currentSlide.eyebrow}
      </p>

      {/* TYPING HEADLINE */}
      <h1
        className="min-h-[100px] max-w-3xl text-[clamp(2.3rem,6vw,5rem)] font-black leading-[1.08] tracking-[-0.045em] text-white drop-shadow-xl sm:min-h-[115px] lg:min-h-[145px]"
        aria-label={fullHeadline}
      >
        {typedText}
        <span
          className="ml-1 inline-block font-light text-[#FFA51F] animate-pulse"
          aria-hidden="true"
        >
          |
        </span>
      </h1>

      {/* GOLD ACCENT AND SLOGAN */}
      <div className="mb-4 mt-2 flex flex-wrap items-center gap-3">
        <span className="h-[3px] w-11 rounded-full bg-[#FFA51F]" />

        <span className="h-px w-6 bg-white/50" />

        <span className="text-[8px] font-bold uppercase tracking-[1.5px] text-white/90 sm:text-[9px] sm:tracking-[2px]">
          We Don't Count Moments. We Make Moments Count.
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="max-w-xl text-xs leading-6 text-white drop-shadow-md sm:text-sm sm:leading-7 lg:text-base">
        {currentSlide.description}
      </p>

      {/* CALL TO ACTION BUTTONS */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">

        

        
      </div>

      {/* TRUST INDICATORS */}
      <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
        {[
          "Wildlife Safaris",
          "Tailor-Made Holidays",
          "East Africa Adventures",
        ].map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[9px] font-medium text-white backdrop-blur-sm sm:px-3.5 sm:text-[11px]"
          >
            <span className="font-bold text-[#FFA51F]">✓</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* SLIDE INDICATORS */}
  <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 lg:bottom-auto lg:left-auto lg:right-9 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:flex-col">
    {heroSlides.map((_, i) => (
      <button
        key={i}
        type="button"
        onClick={() => setIndex(i)}
        aria-label={`Go to slide ${i + 1}`}
        aria-current={i === index ? "true" : undefined}
        className={`rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA51F] focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
          index === i
            ? "h-2 w-7 bg-[#FFA51F] lg:h-8 lg:w-1.5"
            : "h-2 w-2 bg-white/70 hover:bg-white lg:h-2 lg:w-2"
        }`}
      />
    ))}
  </div>

  {/* BOTTOM GOLD ACCENT */}
  <div className="absolute bottom-0 left-0 right-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-[#FFA51F]/80 to-transparent" />
</section>





      {/* ======================================================
          2. BRAND INTRODUCTION
      ====================================================== */}

      <section className="relative py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

            {/* IMAGE COMPOSITION */}

            <div className="relative pb-10 pr-5 sm:pr-10">
              <div className="relative h-[400px] overflow-hidden rounded-2xl sm:h-[530px]">
                <img
                  src={image17}
                  alt="African travel adventure"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#25000F]/50 to-transparent" />

                <div className="absolute bottom-7 left-7 text-white">
                  <p className="text-xs font-bold uppercase tracking-[3px] text-[#FFB04A]">
                    Discover More
                  </p>

                  <p className="mt-2 text-2xl font-black sm:text-3xl">
                    Africa Awaits You.
                  </p>
                </div>
              </div>

              {/* OVERLAPPING IMAGE */}

              <div className="absolute -bottom-2 -right-1 h-44 w-40 overflow-hidden rounded-xl border-[6px] border-white shadow-2xl sm:-right-3 sm:h-60 sm:w-56">
                <img
                  src={cruiser2}
                  alt="Safari vehicle ready for adventure"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* BRAND STAMP */}

              <div className="absolute -left-2 top-8 rounded-xl bg-[#FF5A16] px-5 py-4 text-white shadow-xl sm:-left-5 sm:px-7">
                <p className="text-2xl font-black">BIGPAW</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[2px]">
                  Adventure Safaris
                </p>
              </div>
            </div>

            {/* INTRO CONTENT */}

            <div>
              <SectionLabel>Welcome To BigPaw</SectionLabel>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#25000F] sm:text-5xl lg:text-6xl">
                More Than A Trip.

                <span className="mt-2 block text-[#FF5A16]">
                  It's An Adventure.
                </span>
              </h2>

              <p className="mt-7 text-sm leading-8 text-gray-600 sm:text-base">
                At BigPaw Adventure Safaris, we believe every journey should
                become a story worth telling. We bring together unforgettable
                wildlife encounters, beautiful destinations, cultural
                experiences and relaxing holidays across Kenya and East Africa.
              </p>

              <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
                Whether you dream of exploring the Maasai Mara, discovering
                Amboseli, climbing Kilimanjaro or relaxing along the coast,
                we help turn your travel dreams into meaningful experiences.
              </p>

              {/* FEATURES */}

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  "Memorable safari experiences",
                  "Personalised travel planning",
                  "Wildlife and nature adventures",
                  "Coastal and cultural holidays",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF5A16]/10 text-sm font-bold text-[#FF5A16]">
                      ✓
                    </span>

                    <span className="text-sm font-semibold text-[#25000F]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="group mt-10 inline-flex items-center gap-4 rounded-lg bg-[#25000F] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#FF5A16]"
              >
                Discover Our Story

                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          3. TRAVEL EXPERIENCES
      ====================================================== */}

      <section className="bg-[#FFF9F5] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionIntro
            label="Discover What We Offer"
            title="Travel Your Way."
            highlight="Experience It All."
            text="From thrilling wildlife encounters to peaceful beach escapes, discover the experiences that make every journey special."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((experience) => (
              <div
                key={experience.number}
                className="group relative min-h-[390px] overflow-hidden rounded-2xl bg-[#25000F] shadow-lg"
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#25000F] via-[#25000F]/30 to-transparent" />

                <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[#25000F]/40 text-xs font-bold text-[#FFB04A] backdrop-blur-md">
                  {experience.number}
                </div>

                <div className="absolute bottom-0 p-6 text-white">
                  <div className="mb-4 h-[3px] w-10 rounded-full bg-[#FF5A16] transition-all duration-300 group-hover:w-16" />

                  <h3 className="text-xl font-black">
                    {experience.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/75">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          4. FEATURED SAFARI PACKAGES
      ====================================================== */}

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionIntro
            label="Find Your Next Adventure"
            title="Featured Safari"
            highlight="Experiences"
            text="Explore some of our featured destinations and start planning an adventure filled with incredible moments."
          />

          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {safariPackages.map((safari) => (
              <article
                key={safari.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_10px_40px_rgba(37,0,15,0.06)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,0,15,0.13)]"
              >
                {/* PACKAGE IMAGE */}

                <div className="relative h-[245px] overflow-hidden bg-[#25000F]">
                  <img
                    src={safari.image}
                    alt={safari.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#25000F]/75 via-transparent to-black/10" />

                  <span className="absolute left-5 top-5 rounded-full bg-[#FF5A16] px-4 py-2 text-[9px] font-bold uppercase tracking-wider text-white shadow-lg">
                    {safari.tag}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold">
                      {safari.location}
                    </span>

                    <span className="rounded-full border border-white/40 bg-black/20 px-3 py-1.5 text-[10px] font-bold backdrop-blur-md">
                      {safari.days}
                    </span>
                  </div>
                </div>

                {/* PACKAGE CONTENT */}

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-black text-[#25000F] transition group-hover:text-[#FF5A16]">
                    {safari.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-500">
                    {safari.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                    <Link
                      to={safari.href}
                      className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#25000F] transition hover:text-[#FF5A16]"
                    >
                      Explore Package
                      <span className="text-lg">→</span>
                    </Link>

                    <a
                      href={whatsappLink(
                        `Hello BigPaw Adventure Safaris, I am interested in the ${safari.title}. Please share more details.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-[#25000F] px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-[#FF5A16]"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/safari-packages"
              className="inline-flex items-center gap-4 rounded-lg border border-[#25000F] px-8 py-4 text-sm font-bold text-[#25000F] transition hover:border-[#FF5A16] hover:bg-[#FF5A16] hover:text-white"
            >
              View All Safari Packages
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          5. DESTINATIONS
      ====================================================== */}

      <section className="bg-[#25000F] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionIntro
            label="Explore Africa With Us"
            title="Destinations Worth"
            highlight="Discovering"
            text="Journey through some of East Africa's most remarkable destinations, each offering its own unforgettable experiences."
            light
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, i) => (
              <Link
                to={destination.path}
                key={destination.name}
                className={`group relative min-h-[320px] overflow-hidden rounded-2xl bg-black ${
                  i === 0 || i === 3 ? "lg:col-span-1" : ""
                }`}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#25000F] via-[#25000F]/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#FFB04A]">
                    {destination.country}
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {destination.name}
                  </h3>

                  <p className="mt-3 max-w-sm text-xs leading-6 text-white/70">
                    {destination.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#FFB04A]">
                    Discover Destination
                    <span className="text-lg transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          6. WHY CHOOSE BIGPAW
      ====================================================== */}

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT CONTENT */}

            <div>
              <SectionLabel>Why Travel With BigPaw?</SectionLabel>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#25000F] sm:text-5xl">
                Your Journey.

                <span className="mt-2 block text-[#FF5A16]">
                  Our Passion.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-8 text-gray-600 sm:text-base">
                Every traveller deserves an experience that feels special.
                Our goal is to make planning your African adventure exciting,
                straightforward and memorable from the first enquiry to the
                final day of your journey.
              </p>

              <div className="mt-9 space-y-7">
                {[
                  {
                    number: "01",
                    title: "Personalised Adventures",
                    text: "Travel experiences shaped around your interests, plans and travel style.",
                  },
                  {
                    number: "02",
                    title: "Amazing Destinations",
                    text: "Discover remarkable wildlife destinations, coastlines and cultural experiences.",
                  },
                  {
                    number: "03",
                    title: "Memorable Experiences",
                    text: "Make the most of every destination and return with stories worth sharing.",
                  },
                ].map((item) => (
                  <div key={item.number} className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF5A16]/10 text-sm font-black text-[#FF5A16]">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#25000F]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-3 rounded-lg bg-[#25000F] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#FF5A16]"
              >
                Learn More About Us
                <span>→</span>
              </Link>
            </div>

            {/* RIGHT IMAGE */}

            <div className="relative">
              <div className="h-[450px] overflow-hidden rounded-2xl shadow-2xl sm:h-[570px]">
                <img
                  src={image16}
                  alt="African safari experience"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-7 -left-4 max-w-[260px] rounded-xl bg-[#FF5A16] p-6 text-white shadow-2xl sm:-left-8">
                <p className="text-2xl font-black leading-tight">
                  Make Every Journey Count.
                </p>

                <p className="mt-2 text-xs leading-6 text-white/80">
                  Explore. Experience. Create Memories.
                </p>
              </div>

              <div className="absolute -right-3 -top-4 h-28 w-28 rounded-full border-[12px] border-[#FFA51F]/20 sm:-right-5 sm:-top-5 sm:h-36 sm:w-36" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          7. HOW IT WORKS
      ====================================================== */}

      <section className="bg-[#FFF9F5] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionIntro
            label="Your Adventure Starts Here"
            title="From Dream"
            highlight="To Destination"
            text="Planning your next holiday should be just as exciting as the journey itself."
          />

          <div className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                number: "01",
                title: "Share Your Dream",
                text: "Tell us where you want to go and what you would love to experience.",
              },
              {
                number: "02",
                title: "Plan Your Trip",
                text: "Work with us to shape an adventure around your travel interests.",
              },
              {
                number: "03",
                title: "Get Ready",
                text: "Prepare for your trip and get ready to discover something amazing.",
              },
              {
                number: "04",
                title: "Make Memories",
                text: "Enjoy your adventure and create moments worth remembering.",
              },
            ].map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#FFF9F5] bg-[#25000F] text-lg font-black text-[#FFA51F] shadow-xl">
                  {step.number}
                </div>

                <h3 className="mt-6 text-lg font-black text-[#25000F]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-gray-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          8. LARGE CALL TO ACTION
      ====================================================== */}

      <section className="relative isolate overflow-hidden py-28 lg:py-36">
        <img
          src={climbingkenya}
          alt="African mountain adventure"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-[#25000F]/90" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#25000F] via-[#25000F]/80 to-transparent" />

        <div className="mx-auto max-w-5xl px-5 text-center text-white sm:px-8">
          <SectionLabel light>Your African Adventure</SectionLabel>

          <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Africa Is Waiting.

            <span className="mt-3 block text-[#FF5A16]">
              Let's Make It Count.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">
            Whether you are dreaming of a wildlife safari, a beach escape or
            an exciting mountain adventure, BigPaw Adventure Safaris is ready
            to help you plan your next unforgettable journey.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-lg bg-[#FF5A16] px-9 py-4 text-sm font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#E94A0B]"
            >
              Plan Your Safari →
            </Link>

            <a
              href={whatsappLink(
                "Hello BigPaw Adventure Safaris, I would like to enquire about planning a trip."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/40 bg-white/10 px-9 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#25000F]"
            >
              Chat With Us
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          9. FOOTER
      ====================================================== */}
<footer className="relative overflow-hidden bg-[#080808] text-white">

  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

    {/* BRAND */}
    <div>
      <Link to="/" className="inline-block">
        <h2 className="font-serif text-3xl font-extrabold tracking-wide">
          BIG<span className="text-[#FF5A16]">PAW</span>
        </h2>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFB04A]">
          Adventure Safaris
        </p>
      </Link>

      <p className="mt-6 text-sm leading-7 text-gray-400">
        Discover Africa with BigPaw Adventure Safaris. From unforgettable
        wildlife encounters to relaxing beach escapes, we create journeys
        worth remembering.
      </p>

      <p className="mt-5 border-l-2 border-[#FF5A16] pl-4 font-serif text-sm italic text-gray-300">
        "WE DON'T COUNT MOMENTS! WE MAKE MOMENTS COUNT"
      </p>

      <div className="mt-6 flex gap-3">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-bold text-gray-400 transition hover:border-[#FF5A16] hover:bg-[#FF5A16] hover:text-white"
  >
    f
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-bold text-gray-400 transition hover:border-[#FF5A16] hover:bg-[#FF5A16] hover:text-white"
  >
    ◎
  </a>

  <a
    href="https://www.tiktok.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="TikTok"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-400 transition hover:border-[#FF5A16] hover:bg-[#FF5A16] hover:text-white"
  >
    <Music2 size={17} />
  </a>
</div>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.18em]">
        Quick Links
      </h3>

      <ul className="space-y-4 text-sm text-gray-400">
        {[
          ["Home", "/"],
          ["About Us", "/about"],
          ["Destinations", "/"],
          ["Gallery", "/gallery"],
          ["Safari Packages", "/packages"],
          ["Contact Us", "/contact"],
        ].map(([name, path]) => (
          <li key={name}>
            <Link
              to={path}
              className="transition hover:translate-x-1 hover:text-[#FF8A32]"
            >
              → {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* EXPERIENCES */}
    <div>
      <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.18em]">
        Our Experiences
      </h3>

      <ul className="space-y-4 text-sm text-gray-400">
        {[
          "Wildlife Safaris",
          "Beach Holidays",
          "Cultural Experiences",
          "Scenic Getaways",
          "Mountain Adventures",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A16]" />
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.18em]">
        Contact Us
      </h3>

      <div className="space-y-6 text-sm text-gray-400">

        <div className="flex items-start gap-4">
          <MapPin size={19} className="shrink-0 text-[#FF5A16]" />
          <p>Nairobi, Kenya</p>
        </div>

        <div className="flex items-start gap-4">
          <Phone size={19} className="shrink-0 text-[#FF5A16]" />
          <div>
            <a href="tel:+254720859681" className="block hover:text-[#FF8A32]">
              +254 720 859681
            </a>
            <a href="tel:+254747859681" className="mt-2 block hover:text-[#FF8A32]">
              +254727096078
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail size={19} className="shrink-0 text-[#FF5A16]" />
          <a
            href="mailto:bigpawadenturesafaris@gmail.com"
            className="break-all hover:text-[#FF8A32]"
          >
            bigpawadenturesafaris@gmail.com
          </a>
        </div>

      </div>
    </div>
  </div>

  {/* BOTTOM BAR */}
  <div className="border-t border-white/10">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:px-10">

      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} BigPaw Adventure Safaris. All rights reserved.
      </p>

      <p className="flex items-center gap-1.5 text-xs text-gray-500">
        Made for adventure lovers
        <Heart size={13} className="fill-[#FF5A16] text-[#FF5A16]" />
      </p>

      <a
        href="#top"
        className="text-xs font-bold uppercase tracking-widest text-[#FF8A32] transition hover:text-white"
      >
        Back to Top ↑
      </a>

    </div>
  </div>

</footer>
    </main>
  );
}

export default Home;