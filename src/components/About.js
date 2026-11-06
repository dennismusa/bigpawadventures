
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,  Compass,  Heart,  ShieldCheck,  Globe2,  Mountain,  Camera,  Binoculars,  Waves,  Sparkles,  Users,  Leaf,  CheckCircle2,  Music2,  MapPin,  Phone,  Mail,  MoveUpRight,} from "lucide-react";

// ============================================
// IMAGES
// ============================================

import mara1 from "../assets/mara1.jpg";
import amboseli from "../assets/amboseli.jpg";
import serengeti from "../assets/serengeti.jpg";
import diani1 from "../assets/diani1.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import image17 from "../assets/image17.jpg";

// ============================================
// BRAND SETTINGS
// ============================================

const WHATSAPP = "254747859681";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

// eslint-disable-next-line no-unused-vars
const BRAND = {
  burgundy: "#25000F",
  orange: "#FF5A16",
  gold: "#FFA51F",
};

// ============================================
// DATA
// ============================================

const experiences = [
  {
    icon: Binoculars,
    image: mara1,
    number: "01",
    title: "Wildlife Safaris",
    description:
      "Experience Africa's extraordinary wildlife, breathtaking national parks and unforgettable encounters in the wild.",
  },
  {
    icon: Mountain,
    image: amboseli,
    number: "02",
    title: "Scenic Getaways",
    description:
      "Escape to spectacular landscapes, beautiful mountains and peaceful destinations across East Africa.",
  },
  {
    icon: Globe2,
    image: serengeti,
    number: "03",
    title: "Cultural Experiences",
    description:
      "Discover authentic traditions, local communities and the fascinating heritage that makes Africa unique.",
  },
  {
    icon: Waves,
    image: diani1,
    number: "04",
    title: "Beach Holidays",
    description:
      "Unwind along beautiful coastlines with tropical beaches, ocean views and memorable coastal experiences.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Adventure",
    description:
      "Our passion for travel inspires us to create experiences that bring people closer to the beauty of Africa.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Reliability",
    description:
      "We value honest communication, dependable service and thoughtful planning throughout every journey.",
  },
  {
    icon: Users,
    title: "Personalised Experiences",
    description:
      "We recognise that every traveller is different and strive to create journeys that reflect individual interests.",
  },
  {
    icon: Leaf,
    title: "Responsible Exploration",
    description:
      "We encourage respect for nature, wildlife, local communities and the destinations we visit.",
  },
];

const reasons = [
  "Travel experiences designed around your interests.",
  "A variety of destinations and holiday experiences.",
  "Flexible options for different travel preferences.",
  "Friendly assistance throughout your planning journey.",
  "A commitment to memorable travel experiences.",
];

// ============================================
// REUSABLE COMPONENTS
// ============================================

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.24em] ${
        light ? "text-[#FFB04A]" : "text-[#FF5A16]"
      }`}
    >
      <span className="h-[2px] w-8 bg-current" />
      {children}
    </div>
  );
}

function PrimaryButton({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg bg-[#FF5A16] px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#E94A0B] hover:shadow-xl"
    >
      {children}
      <ArrowRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}

// ============================================
// ABOUT PAGE
// ============================================

function About() {
  return (
    <main className="overflow-hidden bg-white text-[#25000F]">

      {/* ========================================
          HERO SECTION
      ========================================= */}
<section className="relative isolate flex min-h-[430px] items-center overflow-hidden bg-[#171014] sm:min-h-[490px] lg:min-h-[540px]">

  {/* BACKGROUND IMAGE */}
  <img
    src={mara1}
    alt="African wilderness and safari landscape"
    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
  />

  {/* LIGHTER OVERLAYS */}
  <div className="absolute inset-0 -z-10 bg-black/20" />

  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

  {/* CONTENT */}
  <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">

    <div className="max-w-3xl">

      {/* BRAND LABEL */}
      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/25 px-4 py-2.5 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#FFA51F]" />

        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white">
          BigPaw Adventure Safaris
        </span>
      </div>

      <SectionLabel light>
        Discover Our Story
      </SectionLabel>

      {/* HEADING */}
      <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
        Beyond The
        <span className="mt-1 block text-[#FFA51F]">
          Ordinary.
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-6 max-w-xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
        Africa is more than a destination. It is a world of remarkable
        wildlife, extraordinary landscapes and unforgettable stories.
        At BigPaw Adventure Safaris, we bring these experiences closer
        to you through journeys worth remembering.
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">

        <PrimaryButton to="/safari-packages">
          Discover Our Safaris
        </PrimaryButton>

        <Link
          to="/contact"
          className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/10 px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-md transition duration-300 hover:border-white hover:bg-white hover:text-[#171014]"
        >
          Get To Know Us
          <MoveUpRight size={16} />
        </Link>

      </div>

    </div>
  </div>

  {/* BOTTOM ACCENT */}
  <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#FFA51F] to-transparent" />

  {/* BOTTOM RIGHT LABEL */}
  <div className="absolute bottom-6 right-8 hidden items-center gap-3 text-white/80 lg:flex">
    <span className="h-px w-10 bg-white/60" />
    <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
      Explore. Experience. Remember.
    </span>
  </div>

</section>

      {/* ========================================
          INTRODUCTION
      ========================================= */}

      <section className="relative py-24 sm:py-28 lg:py-32">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">

          {/* IMAGE COMPOSITION */}

          <div className="relative pb-10 pr-5 sm:pr-10">

            <div className="relative h-[400px] overflow-hidden rounded-2xl sm:h-[530px]">

              <img
                src={image17}
                alt="Discovering Africa through travel"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#25000F]/35 to-transparent" />

            </div>

            <div className="absolute -bottom-1 right-0 h-48 w-40 overflow-hidden rounded-xl border-[7px] border-white shadow-2xl sm:h-64 sm:w-56">

              <img
                src={cruiser2}
                alt="Safari tour vehicle"
                className="h-full w-full object-cover"
              />

            </div>

            <div className="absolute left-0 top-8 rounded-xl bg-[#25000F] p-5 text-white shadow-2xl sm:-left-5 sm:p-6">

              <Compass size={29} className="text-[#FFA51F]" />

              <p className="mt-3 text-sm font-black">
                Explore Africa
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/55">
                Discover More
              </p>

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <SectionLabel>
              Who We Are
            </SectionLabel>

            <h2 className="mt-6 text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-[54px]">
              Your Journey.
              <span className="mt-2 block text-[#FF5A16]">
                Our Passion.
              </span>
            </h2>

            <p className="mt-8 text-sm leading-8 text-gray-600 sm:text-base">
              BigPaw Adventure Safaris is a Nairobi-based travel and safari
              brand dedicated to helping travellers discover the remarkable
              beauty and diversity of Africa.
            </p>

            <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
              From exciting wildlife adventures and breathtaking natural
              landscapes to cultural discoveries and relaxing beach
              holidays, we bring together a range of travel experiences
              designed to inspire exploration.
            </p>

            <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
              Whether you are planning your first African safari, a family
              holiday, a romantic escape or an adventure with friends, we
              want to help make your journey meaningful from the moment
              you start planning.
            </p>

            <div className="mt-9 border-l-[3px] border-[#FF5A16] bg-[#FFF7F2] px-6 py-6">

              <Sparkles size={25} className="text-[#FF5A16]" />

              <p className="mt-3 font-serif text-xl font-bold italic leading-8 text-[#25000F]">
                "We don't count moments. We make moments count."
              </p>

              <p className="mt-3 text-[9px] font-extrabold uppercase tracking-[0.18em] text-gray-500">
                The BigPaw Philosophy
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================
          MISSION & VISION
      ========================================= */}

      <section className="bg-[#FFF8F4] py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-2xl text-center">

            <SectionLabel>
              Our Purpose
            </SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Driven By A Love For Discovery
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-600">
              Our purpose goes beyond organising trips. We aim to create
              meaningful connections between travellers and the places
              they explore.
            </p>

          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2">

            {/* MISSION */}

            <article className="group relative overflow-hidden rounded-2xl bg-[#25000F] p-8 text-white shadow-xl sm:p-12">

              <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-[#FF5A16]/15 blur-3xl transition group-hover:bg-[#FF5A16]/25" />

              <div className="relative">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF5A16]">
                  <Compass size={30} />
                </div>

                <p className="mt-9 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#FFB04A]">
                  Our Mission
                </p>

                <h3 className="mt-4 max-w-sm text-3xl font-black leading-tight sm:text-4xl">
                  Creating Journeys That Matter.
                </h3>

                <p className="mt-6 max-w-lg text-sm leading-8 text-white/70">
                  To deliver memorable travel experiences through
                  personalised planning, quality service and opportunities
                  to discover Africa's wildlife, landscapes and cultural
                  heritage.
                </p>

              </div>
            </article>

            {/* VISION */}

            <article className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-xl sm:p-12">

              <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-[#FFA51F]/10 blur-3xl" />

              <div className="relative">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25000F] text-[#FFA51F]">
                  <Globe2 size={30} />
                </div>

                <p className="mt-9 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#FF5A16]">
                  Our Vision
                </p>

                <h3 className="mt-4 max-w-sm text-3xl font-black leading-tight text-[#25000F] sm:text-4xl">
                  Inspiring A World Of Exploration.
                </h3>

                <p className="mt-6 max-w-lg text-sm leading-8 text-gray-600">
                  To grow as a trusted name in African travel, inspiring
                  people from around the world to explore, appreciate and
                  experience the extraordinary destinations of our
                  continent.
                </p>

              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ========================================
          EXPERIENCES
      ========================================= */}

      <section className="py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div className="max-w-2xl">

              <SectionLabel>
                Explore With Us
              </SectionLabel>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Experiences Beyond
                <span className="block text-[#FF5A16]">
                  Expectations.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-sm leading-8 text-gray-600">
              From the African wilderness to the coast, discover experiences
              that bring together adventure, relaxation and discovery.
            </p>

          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {experiences.map((experience) => {

              const Icon = experience.icon;

              return (
                <article
                  key={experience.title}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={experience.image}
                      alt={experience.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#25000F]/90 via-[#25000F]/10 to-transparent" />

                    <span className="absolute left-5 top-5 text-sm font-black text-white/75">
                      {experience.number}
                    </span>

                    <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF5A16] text-white shadow-xl">
                      <Icon size={23} />
                    </div>

                  </div>

                  <div className="p-6">

                    <h3 className="text-lg font-black text-[#25000F]">
                      {experience.title}
                    </h3>

                    <p className="mt-3 min-h-[84px] text-sm leading-7 text-gray-600">
                      {experience.description}
                    </p>

                    <Link
                      to="/safari-packages"
                      className="mt-5 inline-flex items-center gap-2 border-b border-[#FF5A16]/30 pb-2 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#FF5A16] transition group-hover:gap-4"
                    >
                      Explore More
                      <ArrowRight size={15} />
                    </Link>

                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ========================================
          VALUES
      ========================================= */}

      <section className="relative overflow-hidden bg-[#25000F] py-24 lg:py-28">

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#FF5A16]/10 blur-[100px]" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#FFA51F]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-2xl text-center">

            <SectionLabel light>
              What We Stand For
            </SectionLabel>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
              Our Values Define
              <span className="block text-[#FF8A36]">
                Every Journey.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/60">
              The principles that guide our decisions, shape our service
              and influence every experience we create.
            </p>

          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {

              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#FF5A16]/60 hover:bg-white/[0.08]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FF5A16] text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-7 text-lg font-black text-white">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {value.description}
                  </p>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ========================================
          WHY CHOOSE BIGPAW
      ========================================= */}

      <section className="py-24 lg:py-32">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">

          <div>

            <SectionLabel>
              The BigPaw Difference
            </SectionLabel>

            <h2 className="mt-6 text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl">
              More Than A Trip.
              <span className="mt-2 block text-[#FF5A16]">
                An Experience.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-gray-600 sm:text-base">
              Every traveller deserves an experience worth remembering.
              We focus on understanding what makes your journey special
              and helping you turn your travel ideas into meaningful
              adventures.
            </p>

            <div className="mt-9 space-y-6">

              {reasons.map((reason, index) => (

                <div
                  key={reason}
                  className="flex items-start gap-4"
                >

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF0E9] text-[#FF5A16]">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold leading-7 text-[#25000F]">
                      {reason}
                    </p>
                  </div>

                </div>
              ))}

            </div>

            <div className="mt-10">
              <PrimaryButton to="/contact">
                Plan Your Adventure
              </PrimaryButton>
            </div>

          </div>

          {/* IMAGE */}

          <div className="relative pb-10 pl-5 sm:pl-10">

            <div className="h-[420px] overflow-hidden rounded-2xl sm:h-[550px]">

              <img
                src={serengeti}
                alt="Spectacular African safari landscape"
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            <div className="absolute -bottom-1 left-0 max-w-[270px] rounded-xl bg-[#FF5A16] p-7 text-white shadow-2xl sm:p-8">

              <Camera size={28} />

              <h3 className="mt-5 text-2xl font-black leading-tight">
                Every Journey Has A Story.
              </h3>

              <p className="mt-3 text-xs leading-6 text-white/85">
                Make your next African adventure a story worth sharing.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================
          FINAL CALL TO ACTION
      ========================================= */}

      <section className="relative isolate overflow-hidden bg-[#25000F] py-24 sm:py-28 lg:py-32">

        <img
          src={mara1}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-[#25000F]/90" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#25000F] via-[#25000F]/90 to-transparent" />

        <div className="mx-auto max-w-4xl px-5 text-center text-white sm:px-8">

          <SectionLabel light>
            Your Adventure Awaits
          </SectionLabel>

          <h2 className="mt-7 text-4xl font-black leading-[1.12] sm:text-5xl lg:text-7xl">
            The World Is Waiting.
            <span className="mt-3 block text-[#FF8A36]">
              Let's Explore It.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
            Whether you dream of an exciting wildlife safari, a scenic
            getaway, a cultural discovery or a relaxing beach holiday,
            BigPaw Adventure Safaris is ready to help you begin.
          </p>

          <div className="mt-11 flex flex-col justify-center gap-4 sm:flex-row">

            <PrimaryButton to="/safari-packages">
              Explore Safari Packages
            </PrimaryButton>

            <a
              href={whatsappLink(
                "Hello BigPaw Adventure Safaris, I would like to plan my next African adventure. Please share your available packages and details."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg border border-white/40 bg-white/10 px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-md transition hover:bg-white hover:text-[#25000F]"
            >
              Talk To Our Team
              <ArrowRight size={17} />
            </a>

          </div>

          <div className="mt-12 flex items-center justify-center gap-3 text-white/50">
            <span className="h-px w-10 bg-white/30" />
            <span className="text-[9px] font-bold uppercase tracking-[0.22em]">
              BigPaw Adventure Safaris
            </span>
            <span className="h-px w-10 bg-white/30" />
          </div>

        </div>
      </section>
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

export default About;
