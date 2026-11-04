import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,  ArrowUpRight,  Waves,  Palmtree,  Ship,  Camera,  MapPin,  CalendarDays,  CheckCircle2,  Compass,  Heart,  Phone,  Mail,  Utensils,  Sparkles,  Landmark,  Shell,  Sun,  Globe,
} from "lucide-react";

import zanzibar1 from "../assets/zanzibar1.jpg";
import zanzibar2 from "../assets/zanzibar2.jpg";
import zanzibar3 from "../assets/zanzibar3.jpg";
import zanzibar4 from "../assets/zanzibar4.jpg";

const WHATSAPP = "254747859681";

const experiences = [
  {
    number: "01",
    title: "Beach Paradise",
    description:
      "Relax along Zanzibar's beautiful coastline, enjoy warm Indian Ocean waters and discover peaceful tropical beaches.",
    icon: Waves,
  },
  {
    number: "02",
    title: "Stone Town Discovery",
    description:
      "Explore historic streets, fascinating architecture, traditional markets and the rich cultural heritage of Zanzibar.",
    icon: Landmark,
  },
  {
    number: "03",
    title: "Ocean Adventures",
    description:
      "Discover coral reefs, enjoy boat excursions, snorkelling and memorable experiences on the Indian Ocean.",
    icon: Ship,
  },
  {
    number: "04",
    title: "Spice Experiences",
    description:
      "Discover the island's famous spice heritage through guided visits to plantations and local cultural experiences.",
    icon: Shell,
  },
];

const highlights = [
  "Nungwi and Kendwa beach experiences",
  "Stone Town historical and cultural tours",
  "Prison Island excursions",
  "Mnemba Island marine experiences",
  "Traditional Zanzibar spice tours",
  "Sunset dhow cruises",
  "Local Swahili food experiences",
  "Jozani Forest nature excursions",
];

const travelTips = [
  {
    title: "Best time to visit",
    description:
      "Zanzibar is a year-round destination. Drier periods are especially popular for beach holidays, outdoor activities and ocean excursions.",
    icon: Sun,
  },
  {
    title: "What to pack",
    description:
      "Pack light clothing, swimwear, sunscreen, sunglasses, comfortable walking shoes and modest clothing for cultural visits.",
    icon: Shell,
  },
  {
    title: "Getting around",
    description:
      "Taxis, private transfers and organised excursions make it easier to explore the island and its different attractions.",
    icon: Compass,
  },
  {
    title: "Island culture",
    description:
      "Respect local customs, dress appropriately when visiting communities and enjoy the island's welcoming Swahili culture.",
    icon: Heart,
  },
];

const galleryImages = [
  {
    image: zanzibar1,
    title: "Tropical Zanzibar",
    category: "Island Paradise",
  },
  {
    image: zanzibar2,
    title: "Ocean Escape",
    category: "Indian Ocean",
  },
  {
    image: zanzibar3,
    title: "Island Experiences",
    category: "Discover Zanzibar",
  },
  {
    image: zanzibar4,
    title: "Coastal Beauty",
    category: "Unforgettable Views",
  },
];

const Zanzibar = () => {
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
      <section className="relative flex min-h-[690px] items-center overflow-hidden bg-[#171014] sm:min-h-[760px]">
        <img
          src={zanzibar1}
          alt="Beautiful tropical Zanzibar coastline"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171014]/90 via-[#171014]/60 to-[#171014]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171014]/75 via-transparent to-[#171014]/20" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#FF7A1A]" />
              BigPaw Island Collection
            </div>

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#FFA51F] sm:text-sm">
              Tanzania • Indian Ocean
            </p>

            <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]">
              Zanzibar.
              <span className="mt-2 block text-[#FFA51F]">
                Island Dreams.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Escape to an island of turquoise waters, white-sand beaches,
              historic streets, vibrant Swahili culture and unforgettable
              Indian Ocean adventures.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink(
                  "Hello BigPaw Adventure Safaris, I would like to plan a Zanzibar holiday. Please share available packages, accommodation options and prices."
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FF7A1A] px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#e8660b]"
              >
                Plan Your Island Escape
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#experiences"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/50 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#171014]"
              >
                Explore Experiences
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
                Tropical Paradise
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Sparkles className="text-[#FFA51F]" size={19} />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Island Adventures
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#FF7A1A]" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#FF7A1A]">
                Welcome to Zanzibar
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight text-[#171014] sm:text-5xl lg:text-6xl">
              An island where
              <span className="block text-[#FF7A1A]">
                every moment feels magical.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600">
              Located in the Indian Ocean off the coast of Tanzania, Zanzibar
              is a destination filled with natural beauty, history and culture.
              From beautiful beaches to the winding streets of Stone Town,
              the island offers a remarkable variety of experiences.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Whether you are planning a romantic escape, family holiday,
              honeymoon or adventure with friends, BigPaw Adventure Safaris
              can help you create a journey that combines relaxation,
              exploration and authentic island experiences.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-6 border-t border-gray-200 pt-8">
              <div>
                <p className="font-serif text-3xl font-bold text-[#FF7A1A]">
                  Beaches
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                  Tropical Escapes
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl font-bold text-[#FF7A1A]">
                  Culture
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                  Swahili Heritage
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border border-[#FF7A1A]/30" />

            <img
              src={zanzibar2}
              alt="Zanzibar Indian Ocean holiday experience"
              className="relative z-10 h-[420px] w-full object-cover shadow-2xl sm:h-[540px]"
            />

            <div className="absolute -bottom-7 -left-4 z-20 max-w-[270px] bg-[#171014] p-7 text-white shadow-xl sm:-left-8">
              <Palmtree className="mb-4 text-[#FFA51F]" size={28} />

              <p className="font-serif text-2xl font-semibold">
                Your island story starts here.
              </p>

              <p className="mt-3 text-xs leading-6 text-white/60">
                Discover a destination where tropical beauty meets rich
                cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section
        id="experiences"
        className="bg-[#171014] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#FF7A1A]" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#FFA51F]">
                Discover the Island
              </span>
              <span className="h-[2px] w-10 bg-[#FF7A1A]" />
            </div>

            <h2 className="font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
              More than a beach.
              <span className="text-[#FFA51F]"> A whole experience.</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/55">
              From peaceful beach days to fascinating cultural discoveries,
              Zanzibar offers something special for every kind of traveller.
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

      {/* BEACH EXPERIENCES */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img
              src={zanzibar3}
              alt="Zanzibar beach and tropical scenery"
              className="h-[460px] w-full object-cover sm:h-[590px]"
            />

            <div className="absolute bottom-6 left-6 max-w-[260px] bg-[#FF7A1A] p-7 text-white sm:bottom-10 sm:left-10">
              <Waves size={28} />

              <p className="mt-4 font-serif text-2xl font-semibold">
                Discover the beauty of island life.
              </p>
            </div>

            <div className="absolute -right-4 -top-4 -z-10 h-32 w-32 border-r-2 border-t-2 border-[#FF7A1A]" />
          </div>

          <div>
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-[#FF7A1A]">
              Coastal Paradise
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Find your own
              <span className="block text-[#FF7A1A]">
                piece of paradise.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-gray-600">
              Zanzibar's coastline is known for its white-sand beaches,
              tropical scenery and warm Indian Ocean waters. Each coastal
              area has its own atmosphere, from lively beach destinations
              to quieter places for relaxation.
            </p>

            <div className="mt-9 space-y-4">
              {[
                "Nungwi and Kendwa beach escapes",
                "Swimming and ocean relaxation where conditions permit",
                "Snorkelling and diving excursions",
                "Sunset dhow cruises",
                "Romantic beachfront experiences",
                "Fresh seafood and Swahili cuisine",
              ].map((item) => (
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
                "Hello BigPaw Adventure Safaris, I would like to plan a Zanzibar beach holiday. Please share available packages and prices."
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#171014] px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-[#FF7A1A]"
            >
              Explore Beach Holidays
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CULTURE AND HISTORY */}
      <section className="bg-[#FFF9F5] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-[#FF7A1A]">
              History & Heritage
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Discover the soul
              <span className="block text-[#FF7A1A]">
                of Zanzibar.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-gray-600">
              Zanzibar is more than its beautiful coastline. Its history
              reflects centuries of trade and cultural exchange, creating
              a distinctive Swahili heritage that can be experienced through
              architecture, food, markets and everyday island life.
            </p>

            <div className="mt-9 space-y-6">
              {[
                {
                  title: "Stone Town",
                  text: "Explore historic streets, carved wooden doors, traditional markets and remarkable architecture.",
                  icon: Landmark,
                },
                {
                  title: "Spice Tours",
                  text: "Discover the island's spice-growing heritage and learn about cloves, cinnamon and other local spices.",
                  icon: Shell,
                },
                {
                  title: "Swahili Cuisine",
                  text: "Experience local flavours, fresh seafood, traditional dishes and Zanzibar's vibrant food culture.",
                  icon: Utensils,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF0E5] text-[#FF7A1A]">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={whatsappLink(
                "Hello BigPaw Adventure Safaris, I am interested in Zanzibar cultural tours, Stone Town and spice experiences. Please share more information."
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#171014] px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-[#FF7A1A]"
            >
              Discover Island Culture
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="relative order-1 lg:order-2">
            <img
              src={zanzibar4}
              alt="Zanzibar island scenery and cultural experiences"
              className="h-[460px] w-full object-cover sm:h-[590px]"
            />

            <div className="absolute -bottom-5 -right-4 h-32 w-32 border-b-2 border-r-2 border-[#FF7A1A]" />

            <div className="absolute right-6 top-6 bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:right-10 sm:top-10">
              <Globe className="text-[#FF7A1A]" size={27} />

              <p className="mt-3 font-serif text-xl font-semibold text-[#171014]">
                Rich Heritage
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">
                Swahili Island Culture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ISLAND HIGHLIGHTS */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-[#FF7A1A]">
              Things to Discover
            </p>

            <h2 className="font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Make every day
              <span className="block text-[#FF7A1A]">
                an island adventure.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-600">
              Add variety to your holiday with experiences that reveal
              different sides of Zanzibar, from its marine environment
              to its cultural landmarks.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 border border-gray-200 bg-white p-6 transition hover:border-[#FF7A1A] hover:shadow-lg"
              >
                <span className="text-xs font-black text-[#FF7A1A]">
                  0{index + 1}
                </span>

                <p className="text-sm font-semibold leading-6 text-[#171014]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-[#FFF9F5] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-[#FF7A1A]">
              Moments Worth Remembering
            </p>

            <h2 className="font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Zanzibar in pictures.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
              A glimpse of the tropical beauty, coastal scenery and
              unforgettable atmosphere waiting to be discovered.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {galleryImages.map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden bg-gray-100 ${
                  index === 0 || index === 3
                    ? "h-[330px] sm:h-[420px]"
                    : "mt-8 h-[330px] sm:mt-12 sm:h-[420px]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#171014]/85 via-transparent to-transparent opacity-90" />

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
              A few helpful tips to make your island holiday comfortable,
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
                Plan a short island break or a longer Zanzibar adventure.
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
                Get help choosing experiences and accommodation for your trip.
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
                Enjoy meaningful experiences across this beautiful island.
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
              Your Island Adventure Awaits
            </p>

            <h2 className="font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Escape the ordinary.
              <span className="block text-[#171014]">
                Discover Zanzibar.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/85">
              Ready for white-sand beaches, ocean adventures and beautiful
              island experiences? Let BigPaw Adventure Safaris help you plan
              your Zanzibar getaway.
            </p>
          </div>

          <a
            href={whatsappLink(
              "Hello BigPaw Adventure Safaris! I am ready to plan my Zanzibar holiday. Please assist me with packages, accommodation, excursions and prices."
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
                unforgettable African adventures and extraordinary island
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
                  <Link
                    to="/about"
                    className="transition hover:text-[#FF7A1A]"
                  >
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
          "Hello BigPaw Adventure Safaris, I would like to enquire about Zanzibar holiday packages."
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

export default Zanzibar;