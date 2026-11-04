import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Mountain,
  Compass,
  Camera,
  MapPin,
  CalendarDays,
  CheckCircle2,
  Clock,
  
  Footprints,
 
  ShieldCheck,
  Heart,
  Phone,
  Mail,
  Backpack,
  Route,
  Trees,
  Sparkles,
} from "lucide-react";

import kili1 from "../assets/kili1.jpg";
import kili2 from "../assets/kili2.jpg";
import kili3 from "../assets/kili3.jpg";
import kili4 from "../assets/kili4.jpg";

const WHATSAPP = "254747859681";

const routes = [
  {
    name: "Machame Route",
    subtitle: "The Scenic Route",
    duration: "6–7 Days",
    description:
      "A popular climbing route known for its beautiful scenery, varied landscapes and excellent acclimatisation opportunities when planned over sufficient days.",
    features: ["Spectacular scenery", "Camping experience", "Good acclimatisation profile"],
  },
  {
    name: "Marangu Route",
    subtitle: "The Classic Route",
    duration: "5–6 Days",
    description:
      "One of Kilimanjaro's established routes, featuring mountain hut accommodation and a gradual trail through changing vegetation zones.",
    features: ["Mountain hut accommodation", "Established trail", "Classic climbing experience"],
  },
  {
    name: "Lemosho Route",
    subtitle: "The Wilderness Route",
    duration: "7–8 Days",
    description:
      "A beautiful approach to the mountain with quieter early stages, expansive views and a longer itinerary that allows more time for acclimatisation.",
    features: ["Remote starting point", "Beautiful landscapes", "Longer acclimatisation itinerary"],
  },
  {
    name: "Rongai Route",
    subtitle: "The Northern Approach",
    duration: "6–7 Days",
    description:
      "Approaching Kilimanjaro from the north, this route offers a different perspective of the mountain and a quieter trekking experience.",
    features: ["Northern approach", "Remote scenery", "Camping experience"],
  },
];

const highlights = [
  {
    title: "Uhuru Peak",
    description:
      "Stand at the highest point in Africa, approximately 5,895 metres above sea level.",
    icon: Mountain,
  },
  {
    title: "Changing Landscapes",
    description:
      "Experience rainforest, moorland, alpine desert and the mountain's dramatic summit zone.",
    icon: Trees,
  },
  {
    title: "Personal Achievement",
    description:
      "Challenge yourself on an extraordinary journey that rewards preparation, determination and teamwork.",
    icon: Heart,
  },
  {
    title: "Unforgettable Views",
    description:
      "Discover remarkable mountain scenery, wide horizons and breathtaking sunrise moments.",
    icon: Camera,
  },
];

const preparation = [
  {
    title: "Physical Fitness",
    description:
      "Prepare with regular walking, hiking, cardio and endurance training before your climb.",
    icon: Footprints,
  },
  {
    title: "Proper Equipment",
    description:
      "Pack suitable hiking boots, warm layers, waterproof clothing, gloves and a comfortable daypack.",
    icon: Backpack,
  },
  {
    title: "Acclimatisation",
    description:
      "Choose an itinerary with adequate time to adjust to altitude and follow your mountain team's guidance.",
    icon: Clock,
  },
  {
    title: "Mountain Safety",
    description:
      "Climb with qualified guides, follow safety instructions and communicate any symptoms of altitude illness.",
    icon: ShieldCheck,
  },
];

const gallery = [
  {
    image: kili1,
    title: "The Mountain",
    subtitle: "Africa's Iconic Summit",
  },
  {
    image: kili2,
    title: "Mountain Trails",
    subtitle: "The Journey Upward",
  },
  {
    image: kili3,
    title: "Alpine Landscapes",
    subtitle: "A World Above the Clouds",
  },
  {
    image: kili4,
    title: "Summit Adventure",
    subtitle: "A Journey to Remember",
  },
];

const MountKilimanjaro = () => {
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
          src={kili1}
          alt="Mount Kilimanjaro rising above the African landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171014]/90 via-[#171014]/60 to-[#171014]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171014]/75 via-transparent to-[#171014]/20" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#FF7A1A]" />
              BigPaw Mountain Adventures
            </div>

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#FFA51F] sm:text-sm">
              Tanzania • East Africa
            </p>

            <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]">
              Mount
              <span className="block text-[#FFA51F]">
                Kilimanjaro.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Challenge yourself to reach the roof of Africa. Discover
              extraordinary landscapes, experience the magic of the mountain
              and take on an adventure that will stay with you forever.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink(
                  "Hello BigPaw Adventure Safaris, I am interested in climbing Mount Kilimanjaro. Please share available routes, durations and prices."
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FF7A1A] px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#e8660b]"
              >
                Plan Your Climb
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#routes"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/50 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#171014]"
              >
                Explore Routes
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/20 pt-7 text-white/80">
            <div className="flex items-center gap-3">
              <Mountain className="text-[#FFA51F]" size={19} />
              <span className="text-xs font-semibold uppercase tracking-wider">
                5,895 Metres
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-[#FFA51F]" size={19} />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Tanzania
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Compass className="text-[#FFA51F]" size={19} />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Africa's Highest Peak
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
                The Roof of Africa
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight text-[#171014] sm:text-5xl lg:text-6xl">
              One mountain.
              <span className="block text-[#FF7A1A]">
                A lifetime achievement.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600">
              Rising above the plains of northern Tanzania, Mount Kilimanjaro
              is Africa's highest mountain and one of the world's most
              remarkable trekking destinations.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Unlike many high mountains, Kilimanjaro can be climbed without
              technical mountaineering skills on its established trekking
              routes. However, reaching the summit requires preparation,
              proper acclimatisation and experienced mountain support.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-6 border-t border-gray-200 pt-8">
              <div>
                <p className="font-serif text-3xl font-bold text-[#FF7A1A]">
                  5,895m
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                  Summit Elevation
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl font-bold text-[#FF7A1A]">
                  7
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                  Main Climbing Routes
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border border-[#FF7A1A]/30" />

            <img
              src={kili2}
              alt="Mount Kilimanjaro trekking landscape"
              className="relative z-10 h-[420px] w-full object-cover shadow-2xl sm:h-[540px]"
            />

            <div className="absolute -bottom-7 -left-4 z-20 max-w-[270px] bg-[#171014] p-7 text-white shadow-xl sm:-left-8">
              <Mountain className="mb-4 text-[#FFA51F]" size={28} />

              <p className="font-serif text-2xl font-semibold">
                Your summit story begins here.
              </p>

              <p className="mt-3 text-xs leading-6 text-white/60">
                Prepare for an extraordinary journey through Africa's
                highest mountain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOUNTAIN HIGHLIGHTS */}
      <section className="bg-[#171014] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#FF7A1A]" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#FFA51F]">
                The Kilimanjaro Experience
              </span>
              <span className="h-[2px] w-10 bg-[#FF7A1A]" />
            </div>

            <h2 className="font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
              More than a climb.
              <span className="text-[#FFA51F]"> An achievement.</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/55">
              Every stage of the journey reveals something new, from lush
              forest trails to the spectacular landscapes of the high-altitude
              mountain.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-[#171014] p-8 transition duration-500 hover:bg-[#241a1b] sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-[#FF7A1A]">
                      0{index + 1}
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

      {/* CLIMBING ROUTES */}
      <section
        id="routes"
        className="bg-[#FFF9F5] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#FF7A1A]" />
                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#FF7A1A]">
                  Choose Your Adventure
                </span>
              </div>

              <h2 className="font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
                Find your route.
                <span className="block text-[#FF7A1A]">
                  Reach your summit.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-600">
              Kilimanjaro has several established climbing routes. The right
              itinerary depends on your fitness, available time, budget and
              acclimatisation needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {routes.map((route, index) => (
              <article
                key={route.name}
                className="group border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FF7A1A] hover:shadow-xl sm:p-9"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF7A1A]">
                      Route 0{index + 1}
                    </span>

                    <h3 className="mt-3 font-serif text-3xl font-semibold">
                      {route.name}
                    </h3>

                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                      {route.subtitle}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0E5] text-[#FF7A1A] transition group-hover:bg-[#FF7A1A] group-hover:text-white">
                    <Route size={22} />
                  </div>
                </div>

                <div className="mt-7 flex items-center gap-3 border-y border-gray-100 py-4">
                  <Clock size={17} className="text-[#FF7A1A]" />

                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Typical duration:
                  </span>

                  <span className="text-sm font-bold text-[#171014]">
                    {route.duration}
                  </span>
                </div>

                <p className="mt-6 text-sm leading-7 text-gray-600">
                  {route.description}
                </p>

                <div className="mt-6 space-y-3">
                  {route.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[#FF7A1A]"
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink(
                    `Hello BigPaw Adventure Safaris, I am interested in the ${route.name} for Mount Kilimanjaro. Please share the itinerary, prices and available dates.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.15em] text-[#FF7A1A] transition hover:text-[#171014]"
                >
                  Enquire About This Route
                  <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-xs leading-6 text-gray-500">
            Route durations are indicative examples, not fixed itineraries.
            Longer itineraries generally provide more time for acclimatisation.
            The best route and duration should be selected with your
            professional mountain operator.
          </p>
        </div>
      </section>

      {/* MOUNTAIN ZONES */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img
              src={kili3}
              alt="Mount Kilimanjaro mountain environment"
              className="h-[460px] w-full object-cover sm:h-[590px]"
            />

            <div className="absolute bottom-6 left-6 max-w-[260px] bg-[#FF7A1A] p-7 text-white sm:bottom-10 sm:left-10">
              <Trees size={28} />

              <p className="mt-4 font-serif text-2xl font-semibold">
                A journey through different worlds.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-[#FF7A1A]">
              Discover the Mountain
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              From green forests
              <span className="block text-[#FF7A1A]">
                to the summit.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-gray-600">
              One of Kilimanjaro's most remarkable features is its changing
              environment. As you ascend, the scenery transforms dramatically,
              creating a trekking experience unlike any other.
            </p>

            <div className="mt-9 space-y-7">
              {[
                {
                  title: "Cultivated Foothills",
                  text: "The lower mountain slopes are surrounded by agricultural communities and green landscapes.",
                },
                {
                  title: "Montane Forest",
                  text: "Walk through rich vegetation, tall trees and the natural habitats of mountain wildlife.",
                },
                {
                  title: "Moorland & Alpine Desert",
                  text: "Discover open landscapes, unusual high-altitude plants and increasingly dramatic mountain scenery.",
                },
                {
                  title: "Arctic Summit Zone",
                  text: "Reach the high-altitude summit environment, where cold conditions and thin air demand careful preparation.",
                },
              ].map((zone, index) => (
                <div key={zone.title} className="flex gap-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF0E5] text-xs font-black text-[#FF7A1A]">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-semibold">
                      {zone.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-500">
                      {zone.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREPARATION */}
      <section className="bg-[#FFF9F5] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-[#FF7A1A]">
              Prepare for Success
            </p>

            <h2 className="font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
              The mountain rewards
              <span className="block text-[#FF7A1A]">
                good preparation.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-600">
              A successful Kilimanjaro climb starts long before you arrive
              in Tanzania. Preparation, appropriate equipment and responsible
              altitude management are essential.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {preparation.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#FF7A1A]">
                      0{index + 1}
                    </span>

                    <Icon size={26} className="text-[#FF7A1A]" />
                  </div>

                  <h3 className="mt-9 font-serif text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-start gap-4 border-l-4 border-[#FF7A1A] bg-white p-6 sm:p-8">
            <ShieldCheck
              size={24}
              className="mt-1 shrink-0 text-[#FF7A1A]"
            />

            <div>
              <h3 className="font-semibold text-[#171014]">
                Important altitude safety reminder
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Altitude sickness can affect anyone, regardless of fitness.
                Follow your guides' instructions, allow adequate
                acclimatisation time and descend promptly if serious symptoms
                develop. A climb should never be rushed.
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
              The Beauty of Kilimanjaro
            </p>

            <h2 className="font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Witness the extraordinary.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
              Every step reveals another side of Africa's highest mountain.
              Explore the landscapes that make this adventure so special.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {gallery.map((item, index) => (
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
                    {item.subtitle}
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

      {/* PLANNING STRIP */}
      <section className="border-y border-gray-200 bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0E5] text-[#FF7A1A]">
              <CalendarDays size={22} />
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold">
                Choose Your Dates
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Discuss suitable climbing dates and itinerary options.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0E5] text-[#FF7A1A]">
              <Backpack size={22} />
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold">
                Prepare Your Gear
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Get guidance on essential clothing and trekking equipment.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0E5] text-[#FF7A1A]">
              <Sparkles size={22} />
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold">
                Chase the Summit
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Take on one of Africa's most remarkable trekking adventures.
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
              Your Summit Adventure Starts Here
            </p>

            <h2 className="font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Dare to dream.
              <span className="block text-[#171014]">
                Dare to climb.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/85">
              Ready to take on Mount Kilimanjaro? Let BigPaw Adventure
              Safaris help you explore the routes, plan your itinerary and
              prepare for an unforgettable mountain experience.
            </p>
          </div>

          <a
            href={whatsappLink(
              "Hello BigPaw Adventure Safaris! I am ready to plan my Mount Kilimanjaro climb. Please assist me with routes, itineraries, prices and available dates."
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
                unforgettable African adventures and extraordinary journeys
                with BigPaw Adventure Safaris.
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
          "Hello BigPaw Adventure Safaris, I would like to enquire about climbing Mount Kilimanjaro."
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

export default MountKilimanjaro;