
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Camera,
  Mountain,
  Binoculars,
  Sun,
  
  ShieldCheck,
  Sparkles,
  MoveUpRight,
} from "lucide-react";

import mara1 from "../assets/mara1.jpg";
import mara2 from "../assets/mara2.jpg";
import mara3 from "../assets/mara3.jpg";
import mara4 from "../assets/mara4.jpg";

const WHATSAPP_NUMBER = "254747859681";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const highlights = [
  {
    number: "01",
    title: "The Big Five",
    text: "Search for lions, elephants, leopards, buffalo and rhinos in one of Africa's most celebrated wildlife destinations.",
  },
  {
    number: "02",
    title: "The Great Migration",
    text: "Witness the extraordinary movement of wildebeest and zebras across the wider Mara-Serengeti ecosystem.",
  },
  {
    number: "03",
    title: "Mara River",
    text: "Explore the iconic river, its dramatic landscapes and the wildlife that gathers along its banks.",
  },
  {
    number: "04",
    title: "Maasai Heritage",
    text: "Discover the traditions, stories and cultural heritage of the Maasai communities.",
  },
];

const wildlife = [
  "Lions",
  "Elephants",
  "Leopards",
  "Buffalo",
  "Cheetahs",
  "Giraffes",
  "Wildebeest",
  "Zebras",
];

const safariOptions = [
  "Private safari experiences",
  "Experienced safari guides",
  "Flexible travel itineraries",
  "Morning and afternoon game drives",
  "Comfortable safari vehicles",
  "Cultural experiences",
];

const gallery = [
  { image: mara1, title: "The Mara Wilderness", number: "01" },
  { image: mara2, title: "Into The Wild", number: "02" },
  { image: mara3, title: "Endless Savannah", number: "03" },
  { image: mara4, title: "Wildlife Encounters", number: "04" },
];

function Maasaimara() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);

      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="overflow-hidden bg-[#FFF9F5] text-[#171014]">

      {/* =====================================================
          CINEMATIC HERO
      ====================================================== */}

      <section className="relative isolate flex min-h-[620px] items-end overflow-hidden bg-[#171014] sm:min-h-[680px] lg:min-h-[760px]">

        <img
          src={mara1}
          alt="Maasai Mara African safari landscape"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-black/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/40 to-black/5" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="absolute right-0 top-0 hidden h-full w-[30%] border-l border-white/10 lg:block" />

        <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-16 pt-36 sm:px-10 lg:px-16 lg:pb-24">

          <div className="max-w-4xl">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/25 px-5 py-3 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#FF7A1A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white">
                BigPaw Adventure Safaris
              </span>
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#FFA51F] sm:text-sm">
              Kenya / The Wild Frontier
            </p>

            <h1 className="font-serif text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-[100px]">
              The
              <span className="block text-[#FFA51F]">
                Maasai Mara.
              </span>
            </h1>

            <div className="mt-7 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">

              <p className="max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                A land of endless horizons, extraordinary wildlife and
                unforgettable encounters. Discover the spirit of the
                African wilderness with BigPaw.
              </p>

              <div className="flex flex-shrink-0 flex-col gap-3 sm:min-w-[220px]">

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-between gap-5 rounded-full bg-[#FF7A1A] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#FFA51F]"
                >
                  Plan Your Safari
                  <ArrowUpRight size={19} />
                </Link>

                <a
                  href={whatsappLink("Hello BigPaw Adventure Safaris, I would like to plan a Maasai Mara safari.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-5 rounded-full border border-white/35 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:border-[#FFA51F] hover:text-[#FFA51F]"
                >
                  Enquire On WhatsApp
                  <ArrowUpRight size={18} />
                </a>

              </div>

            </div>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-3 border-t border-white/20 pt-6">

            <div>
              <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                Wildlife
              </p>
              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 sm:text-[10px]">
                Encounters
              </p>
            </div>

            <div className="border-l border-white/20 pl-5">
              <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                Safari
              </p>
              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 sm:text-[10px]">
                Adventures
              </p>
            </div>

            <div className="border-l border-white/20 pl-5">
              <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                Africa
              </p>
              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 sm:text-[10px]">
                Unforgettable
              </p>
            </div>

          </div>

        </div>

        <div className="absolute bottom-10 right-8 hidden items-center gap-3 lg:flex">
          <span className="h-px w-12 bg-[#FFA51F]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60">
            Explore The Extraordinary
          </span>
        </div>

      </section>


      {/* =====================================================
          INTRODUCTION / EDITORIAL
      ====================================================== */}

      <section
        id="masai-mara-national-reserve"
        className="scroll-mt-24 relative bg-[#FFF9F5] py-24 sm:py-28 lg:py-36"
      >

        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16">

          <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">

            <div className="relative">

              <div className="absolute -left-4 -top-6 hidden h-28 w-28 border-l border-t border-[#FF7A1A]/40 lg:block" />

              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={mara2}
                  alt="Maasai Mara national reserve"
                  className="h-[480px] w-full object-cover sm:h-[600px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FFA51F]">
                    Kenya's Natural Treasure
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-bold text-white">
                    Into The Heart Of Africa
                  </h3>
                </div>
              </div>

              <div className="absolute -bottom-7 -right-4 hidden max-w-[210px] rounded-2xl bg-[#FF7A1A] p-6 text-white shadow-2xl sm:block">
                <Compass size={27} />
                <p className="mt-4 font-serif text-2xl font-bold">
                  Discover More.
                </p>
                <p className="mt-2 text-xs leading-5 text-white/80">
                  Explore the wilderness with BigPaw.
                </p>
              </div>

            </div>

            <div className="lg:pl-8">

              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#FF7A1A]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF7A1A]">
                  The Destination
                </p>
              </div>

              <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-[#171014] sm:text-5xl lg:text-6xl">
                More Than A
                <span className="block text-[#FF7A1A]">
                  Safari Destination.
                </span>
              </h2>

              <p className="mt-8 text-base leading-8 text-gray-600 sm:text-lg">
                The Maasai Mara is one of Africa's most celebrated wildlife
                destinations. Its sweeping grasslands, scattered acacia
                trees and remarkable wildlife create a setting unlike any
                other.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                The reserve is internationally renowned for the Great
                Migration, when enormous herds of wildebeest and zebras
                travel through the wider Mara-Serengeti ecosystem in search
                of fresh grazing. The river crossings and dramatic wildlife
                encounters make this one of nature's most extraordinary
                spectacles.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                Beyond migration season, the Mara offers excellent wildlife
                viewing throughout the year. From big cats resting beneath
                acacia trees to elephants moving across the plains, every
                game drive offers the possibility of a remarkable encounter.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 border-b-2 border-[#FF7A1A] pb-3 text-sm font-bold text-[#171014] transition hover:gap-6 hover:text-[#FF7A1A]"
                >
                  Discover Your Safari
                  <ArrowUpRight size={19} />
                </Link>

                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                  BigPaw Adventure Safaris
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SIGNATURE EXPERIENCE
      ====================================================== */}

      <section className="bg-[#171014] py-24 sm:py-28 lg:py-32">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16">

          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFA51F]">
                The BigPaw Experience
              </p>

              <h2 className="mt-5 max-w-2xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                The Wild Has
                <span className="block text-[#FF7A1A]">
                  A Way Of Calling.
                </span>
              </h2>
            </div>

            <p className="max-w-md leading-8 text-white/50">
              Every journey through the Mara brings new landscapes,
              unexpected encounters and moments worth remembering.
            </p>

          </div>

          <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">

            <div className="group relative min-h-[460px] overflow-hidden rounded-[2rem] lg:min-h-[620px]">

              <img
                src={mara3}
                alt="Wide Maasai Mara savannah"
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-9 left-8 right-8 sm:bottom-12 sm:left-12">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFA51F]">
                  01 / The Landscape
                </p>

                <h3 className="mt-4 max-w-xl font-serif text-3xl font-bold text-white sm:text-5xl">
                  Endless Plains.
                  <span className="block">Infinite Possibilities.</span>
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/70">
                  Experience golden grasslands, open horizons and the
                  breathtaking beauty of the African wilderness.
                </p>
              </div>

              <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 text-white transition group-hover:border-[#FF7A1A] group-hover:bg-[#FF7A1A]">
                <ArrowUpRight size={20} />
              </div>

            </div>

            <div className="flex flex-col gap-5">

              <div className="relative flex-1 overflow-hidden rounded-[2rem] bg-[#FF7A1A] p-8 sm:p-10">

                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/20" />
                <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-white/20" />

                <Binoculars size={34} className="relative text-white" />

                <p className="relative mt-10 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                  02 / Wildlife
                </p>

                <h3 className="relative mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Every Game Drive Is A New Story.
                </h3>

                <p className="relative mt-5 text-sm leading-7 text-white/80">
                  Follow the tracks, watch the plains and discover the
                  animals that make the Mara legendary.
                </p>

                <Link
                  to="/contact"
                  className="relative mt-8 inline-flex items-center gap-3 text-sm font-bold text-white"
                >
                  Plan Your Experience <ArrowRight size={17} />
                </Link>

              </div>

              <div className="relative flex-1 overflow-hidden rounded-[2rem]">

                <img
                  src={mara4}
                  alt="Wildlife safari in Maasai Mara"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FFA51F]">
                    03 / The Memories
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-bold text-white">
                    Moments That Last Forever.
                  </h3>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          WHY VISIT
      ====================================================== */}

      <section className="bg-[#FFF9F5] py-24 sm:py-28 lg:py-32">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16">

          <div className="mb-14 max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF7A1A]">
              Why The Maasai Mara?
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#171014] sm:text-5xl lg:text-6xl">
              An Experience Like
              <span className="text-[#FF7A1A]"> No Other.</span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-gray-600">
              The Mara is a destination where wildlife, nature and culture
              come together to create extraordinary travel experiences.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item) => (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-black/5 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-[#FF7A1A]/40 hover:shadow-2xl"
              >

                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl font-bold text-[#FF7A1A]/25">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF7A1A]"
                  />
                </div>

                <h3 className="mt-10 font-serif text-2xl font-bold text-[#171014]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {item.text}
                </p>

                <div className="mt-8 h-[2px] w-10 bg-[#FF7A1A] transition-all duration-500 group-hover:w-full" />

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WILDLIFE FEATURE
      ====================================================== */}

      <section className="bg-[#F0EBE3] py-24 sm:py-28">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#FF7A1A]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF7A1A]">
                  Wildlife Encounters
                </p>
              </div>

              <h2 className="font-serif text-4xl font-bold leading-tight text-[#171014] sm:text-5xl lg:text-6xl">
                Meet The
                <span className="block text-[#FF7A1A]">
                  Icons Of Africa.
                </span>
              </h2>

              <p className="mt-7 max-w-xl leading-8 text-gray-600">
                From powerful predators to gentle giants, the Maasai Mara
                is home to a remarkable variety of wildlife. Every game
                drive brings the possibility of a special encounter.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-3">

                {wildlife.map((animal) => (
                  <div
                    key={animal}
                    className="flex items-center gap-3 border-b border-black/10 py-3 text-sm font-semibold text-[#171014]"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF7A1A]/10 text-[#FF7A1A]">
                      <Check size={13} />
                    </span>
                    {animal}
                  </div>
                ))}

              </div>

              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-4 rounded-full bg-[#171014] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#FF7A1A]"
              >
                Experience The Wild
                <ArrowUpRight size={18} />
              </Link>

            </div>

            <div className="relative">

              <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-[#FF7A1A]/30" />

              <img
                src={mara4}
                alt="African wildlife in the Maasai Mara"
                className="relative h-[480px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[600px]"
              />

              <div className="absolute bottom-7 left-7 rounded-xl border border-white/20 bg-black/35 px-6 py-5 backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FFA51F]">
                  The Wild
                </p>
                <p className="mt-2 font-serif text-2xl font-bold text-white">
                  Unfiltered. Unforgettable.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          BIGPAW SAFARI PLANNING
      ====================================================== */}

      <section className="bg-white py-24 sm:py-28 lg:py-32">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16">

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF7A1A]">
                Made Around You
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#171014] sm:text-5xl lg:text-6xl">
                Your Journey.
                <span className="block text-[#FF7A1A]">
                  Your Adventure.
                </span>
              </h2>

              <p className="mt-7 max-w-xl leading-8 text-gray-600">
                Whether you are planning a short escape or a longer
                East African journey, BigPaw Adventure Safaris can help
                you explore the Mara with an itinerary that reflects
                your interests and travel plans.
              </p>

              <div className="mt-9 space-y-4">

                {safariOptions.map((option) => (
                  <div key={option} className="flex items-center gap-4">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF7A1A]/10 text-[#FF7A1A]">
                      <Check size={15} />
                    </span>

                    <span className="text-sm font-medium text-gray-600">
                      {option}
                    </span>
                  </div>
                ))}

              </div>

              <a
                href={whatsappLink("Hello BigPaw Adventure Safaris, I would like to discuss a tailor-made Maasai Mara safari.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-4 rounded-full bg-[#FF7A1A] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#171014]"
              >
                Talk To Our Safari Team
                <ArrowUpRight size={18} />
              </a>

            </div>

            <div className="relative">

              <img
                src={mara2}
                alt="Maasai Mara safari landscape"
                className="h-[450px] w-full rounded-[2rem] object-cover sm:h-[570px]"
              />

              <div className="absolute -bottom-6 -left-4 max-w-[260px] rounded-2xl bg-[#171014] p-6 shadow-2xl sm:-left-8">
                <Sparkles className="text-[#FFA51F]" size={26} />
                <p className="mt-4 font-serif text-2xl font-bold text-white">
                  We Make Moments Count.
                </p>
                <p className="mt-3 text-xs leading-6 text-white/55">
                  Make your next African adventure one to remember.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PREMIUM GALLERY
      ====================================================== */}

      <section className="bg-[#171014] py-24 sm:py-28">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16">

          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFA51F]">
                Through Our Lens
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">
                The Mara In
                <span className="text-[#FF7A1A]"> Pictures.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/50">
              A glimpse into the landscapes, wildlife and unforgettable
              moments waiting for you in the Maasai Mara.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">

            {gallery.map((item, index) => (
              <div
                key={item.number}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0 || index === 3
                    ? "h-[260px] sm:h-[400px]"
                    : "h-[260px] sm:h-[400px]"
                }`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />

                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/20 text-xs font-bold text-white backdrop-blur-sm">
                  {item.number}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#FFA51F]">
                    Maasai Mara
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-bold text-white sm:text-xl">
                    {item.title}
                  </h3>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SAFARI TIPS
      ====================================================== */}

      <section className="bg-[#FFF9F5] py-24 sm:py-28">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16">

          <div className="mb-14 text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF7A1A]">
              Before You Travel
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold text-[#171014] sm:text-5xl">
              Make The Most Of
              <span className="text-[#FF7A1A]"> Your Safari.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
              A few thoughtful preparations can make your time in the
              wilderness more comfortable and rewarding.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Sun,
                title: "Early Starts",
                text: "Morning game drives offer beautiful light and excellent opportunities to observe wildlife.",
              },
              {
                icon: Camera,
                title: "Bring Your Camera",
                text: "Keep your camera ready to capture the remarkable moments of your safari.",
              },
              {
                icon: Mountain,
                title: "Dress Comfortably",
                text: "Choose comfortable clothing and suitable footwear for your safari adventure.",
              },
              {
                icon: ShieldCheck,
                title: "Travel Responsibly",
                text: "Respect wildlife, local communities and the natural environment.",
              },
            ].map((tip) => {
              const Icon = tip.icon;

              return (
                <div
                  key={tip.title}
                  className="group rounded-2xl border border-black/5 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF7A1A]/10 text-[#FF7A1A] transition group-hover:bg-[#FF7A1A] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 font-serif text-xl font-bold text-[#171014]">
                    {tip.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {tip.text}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL BOOKING CTA
      ====================================================== */}

      <section className="relative isolate overflow-hidden bg-[#171014] py-24 sm:py-32">

        <img
          src={mara3}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-black/65" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-10">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#FFA51F]/50 bg-[#FF7A1A]/15 text-[#FFA51F]">
            <Compass size={25} />
          </div>

          <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.35em] text-[#FFA51F]">
            Your African Story Starts Here
          </p>

          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Ready To Answer
            <span className="block text-[#FFA51F]">
              The Call Of The Wild?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/70">
            Let BigPaw Adventure Safaris take you closer to the magic
            of the Maasai Mara. Your next unforgettable adventure begins here.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-4 rounded-full bg-[#FF7A1A] px-9 py-4 text-sm font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#FFA51F]"
            >
              Start Your Journey
              <ArrowUpRight size={19} />
            </Link>

            <a
              href={whatsappLink("Hello BigPaw Adventure Safaris, I am interested in a Maasai Mara safari. Please share your packages and prices.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 rounded-full border border-white/40 bg-white/5 px-9 py-4 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:border-[#FFA51F] hover:text-[#FFA51F]"
            >
              Speak To Our Team
              <ArrowUpRight size={19} />
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          BIGPAW PREMIUM FOOTER
      ====================================================== */}

      <footer className="bg-[#100C10] text-white">

        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-10 lg:px-16">

          <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">

            {/* BRAND */}
            <div>

              <Link to="/" className="inline-block">
                <h2 className="font-serif text-4xl font-bold tracking-tight text-white">
                  BigPaw<span className="text-[#FF7A1A]">.</span>
                </h2>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#FFA51F]">
                  Adventure Safaris
                </p>
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-8 text-white/45">
                We don't count moments. We make moments count.
                Discover Africa through unforgettable adventures,
                remarkable wildlife and meaningful experiences.
              </p>

              <div className="mt-7 inline-flex items-center gap-3 border-l-2 border-[#FF7A1A] pl-4">
                <p className="max-w-[220px] text-xs italic leading-6 text-white/55">
                  Discover the extraordinary. Experience the wild.
                </p>
              </div>

            </div>


            {/* EXPLORE */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FFA51F]">
                Explore
              </h3>

              <div className="mt-7 space-y-4">
                {[
                  ["Home", "/"],
                  ["About Us", "/about"],
                  ["Safari Packages", "/safaris"],
                  ["Destinations", "/destinations"],
                  ["Contact Us", "/contact"],
                ].map(([label, to]) => (
                  <Link
                    key={label}
                    to={to}
                    className="group flex items-center gap-2 text-sm text-white/50 transition hover:text-[#FFA51F]"
                  >
                    <span>{label}</span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>


            {/* DESTINATIONS */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FFA51F]">
                Destinations
              </h3>

              <div className="mt-7 space-y-4">
                {[
                  "Maasai Mara",
                  "Amboseli",
                  "Lake Nakuru",
                  "Serengeti",
                  "Mount Kilimanjaro",
                  "Zanzibar",
                ].map((item) => (
                  <p key={item} className="text-sm text-white/50">
                    {item}
                  </p>
                ))}
              </div>
            </div>


            {/* CONTACT */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FFA51F]">
                Get In Touch
              </h3>

              <div className="mt-7 space-y-6">

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Location
                  </p>
                  <p className="mt-2 text-sm text-white/65">
                    Nairobi, Kenya
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Email
                  </p>
                  <a
                    href="mailto:bigpawadventures@gmail.com"
                    className="mt-2 block break-all text-sm text-white/65 transition hover:text-[#FFA51F]"
                  >
                    bigpawadventures@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Call Us
                  </p>

                  <a
                    href="tel:+254747859681"
                    className="mt-2 block text-sm text-white/65 transition hover:text-[#FFA51F]"
                  >
                    +254 747 859 681
                  </a>

                  <a
                    href="tel:+254720859681"
                    className="mt-2 block text-sm text-white/65 transition hover:text-[#FFA51F]"
                  >
                    +254 720 859 681
                  </a>
                </div>

                <a
                  href={whatsappLink("Hello BigPaw Adventure Safaris, I would like to make an enquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#FF7A1A] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#FFA51F]"
                >
                  WhatsApp BigPaw
                  <ArrowUpRight size={15} />
                </a>

              </div>
            </div>

          </div>


          {/* FOOTER BOTTOM */}
          <div className="flex flex-col justify-between gap-5 pt-8 md:flex-row md:items-center">

            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} BigPaw Adventure Safaris. All rights reserved.
            </p>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
              We Don't Count Moments. We Make Moments Count.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#FFA51F] transition hover:text-white"
            >
              Plan Your Safari <MoveUpRight size={14} />
            </Link>

          </div>

        </div>
      </footer>

    </main>
  );
}

export default Maasaimara;
