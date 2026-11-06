import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Camera,
  Leaf,
  MapPin,
  Mountain,
  Binoculars,
  Bird,
  
  Phone,
  Mail,
  MessageCircle,
  CarFront,
  Heart,
  Sun,
} from "lucide-react";

import nakuru from "../assets/nakuru.jpg";

export default function LakeNakuru() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const timer = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);

      return () => clearTimeout(timer);
    }
  }, []);

  const highlights = [
    {
      icon: <Binoculars size={23} />,
      title: "Rhino Sanctuary",
      description:
        "Explore one of Kenya's important conservation areas for both black and white rhinos.",
    },
    {
      icon: <Bird size={23} />,
      title: "Spectacular Birdlife",
      description:
        "Discover an impressive variety of bird species around the lake and surrounding habitats.",
    },
    {
      icon: <Mountain size={23} />,
      title: "Rift Valley Scenery",
      description:
        "Enjoy beautiful landscapes, wooded hills, open grasslands and striking viewpoints.",
    },
    {
      icon: <Camera size={23} />,
      title: "Wildlife Photography",
      description:
        "Capture memorable moments with wildlife and the park's beautiful natural scenery.",
    },
  ];

  const wildlife = [
    "White Rhinos",
    "Black Rhinos",
    "Rothschild's Giraffes",
    "Buffaloes",
    "Lions",
    "Leopards",
    "Zebras",
    "Waterbucks",
    "Flamingos",
    "Pelicans",
    "Warthogs",
    "Baboons",
  ];

  const experiences = [
    {
      number: "01",
      title: "Game Drives",
      description:
        "Explore the park with a professional safari guide as you search for its remarkable wildlife.",
      icon: <CarFront size={22} />,
    },
    {
      number: "02",
      title: "Bird Watching",
      description:
        "Discover the park's diverse birdlife, from water birds to beautiful species found in the surrounding woodland.",
      icon: <Bird size={22} />,
    },
    {
      number: "03",
      title: "Scenic Viewpoints",
      description:
        "Take in sweeping views of Lake Nakuru and the surrounding Great Rift Valley landscape.",
      icon: <Mountain size={22} />,
    },
    {
      number: "04",
      title: "Nature Photography",
      description:
        "Enjoy opportunities to photograph wildlife, changing landscapes and unforgettable safari moments.",
      icon: <Camera size={22} />,
    },
  ];

  const travelTips = [
    {
      icon: <Sun size={21} />,
      title: "Start Early",
      description:
        "Morning game drives offer a wonderful opportunity to explore while wildlife is active.",
    },
    {
      icon: <Camera size={21} />,
      title: "Bring Your Camera",
      description:
        "Carry your camera or phone to capture wildlife encounters and scenic views.",
    },
    {
      icon: <Compass size={21} />,
      title: "Follow Your Guide",
      description:
        "Listen to your safari guide and follow park rules throughout your visit.",
    },
    {
      icon: <Leaf size={21} />,
      title: "Travel Responsibly",
      description:
        "Respect wildlife, keep a safe distance and help protect the natural environment.",
    },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hello BigPaw Adventure Safaris, I would like to enquire about a Lake Nakuru safari. Please share your packages, prices and availability."
  );

  return (
    <main className="overflow-hidden bg-[#FFF9F5] text-[#171014]">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#171014] lg:min-h-[760px]">
        <img
          src={nakuru}
          alt="Beautiful scenery at Lake Nakuru National Park"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#101412]/95 via-[#101412]/70 to-[#101412]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101412]/70 via-transparent to-[#101412]/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#FF7A1A]" />
              Kenya · Great Rift Valley
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#FFD08A]">
              Discover the beauty of Kenya
            </p>

            <h1 className="font-serif text-6xl font-semibold leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Lake
              <span className="block text-[#FFA51F]">Nakuru.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Discover a remarkable wildlife sanctuary in Kenya's Great Rift
              Valley. From rhinos and beautiful birdlife to breathtaking
              landscapes, Lake Nakuru promises a safari filled with memorable
              experiences.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FF7A1A] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl shadow-orange-950/20 transition duration-300 hover:-translate-y-1 hover:bg-[#FFA51F]"
              >
                Plan Your Safari
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="#discover"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/50 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white hover:text-[#171014]"
              >
                Explore Destination
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/20 bg-[#171014]/35 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-6 py-6 sm:grid-cols-4 sm:px-10 lg:px-12">
            {[
              ["Destination", "Lake Nakuru"],
              ["Location", "Rift Valley, Kenya"],
              ["Experience", "Wildlife Safari"],
              ["Best for", "Nature & Photography"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD08A]">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="discover" className="px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[#E76B16]">
              <span className="h-[2px] w-10 bg-[#FF7A1A]" />
              A remarkable Kenyan destination
            </p>

            <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight tracking-tight text-[#171014] sm:text-5xl lg:text-6xl">
              Where wildlife meets the beauty of the{" "}
              <span className="text-[#E76B16]">Rift Valley.</span>
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#625B57]">
              <p>
                <strong className="text-[#171014]">
                  Lake Nakuru National Park
                </strong>{" "}
                is one of Kenya's treasured wildlife destinations, set within
                the spectacular Great Rift Valley. Its varied landscapes
                include the lake, woodland, grasslands and rocky hills.
              </p>

              <p>
                The park is particularly recognised for its rhino conservation
                efforts and rich birdlife. Visitors can also look out for
                giraffes, buffaloes, lions, zebras and many other wildlife
                species during guided game drives.
              </p>

              <p>
                Whether you are planning a short escape, a photography trip or
                a longer Kenyan safari, Lake Nakuru offers a wonderful
                opportunity to experience the country's natural beauty.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {["Wildlife", "Bird Watching", "Scenic Landscapes"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#E9DED5] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#4C423D]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-tr-[50px] border-r-2 border-t-2 border-[#FF7A1A]" />

            <div className="relative overflow-hidden rounded-[28px] bg-[#171014] shadow-2xl">
              <img
                src={nakuru}
                alt="Lake Nakuru landscape and natural surroundings"
                className="h-[440px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[540px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#171014]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FFD08A]">
                  Experience Kenya
                </span>
                <h3 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
                  Nature at its finest.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/75">
                  Every journey brings a new opportunity to discover the
                  extraordinary.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 hidden rounded-2xl bg-[#FF7A1A] px-7 py-5 text-white shadow-xl sm:block">
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Your next adventure
              </p>
              <p className="mt-1 font-serif text-2xl font-semibold">
                Starts here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-[#171014] px-6 py-24 text-white sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.3em] text-[#FFA51F]">
              What makes it special
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Discover the highlights of{" "}
              <span className="text-[#FFA51F]">Lake Nakuru.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
              From important wildlife conservation areas to beautiful natural
              scenery, discover what makes this destination worth exploring.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#FF7A1A]/60 hover:bg-white/[0.08]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF7A1A]/15 text-[#FFA51F] transition group-hover:bg-[#FF7A1A] group-hover:text-white">
                  {item.icon}
                </div>

                <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#FFA51F]">
                  0{index + 1}
                </p>

                <h3 className="font-serif text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.description}
                </p>

                <div className="mt-7 h-[2px] w-10 bg-[#FF7A1A] transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WILDLIFE */}
      <section className="px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[#E76B16]">
              <span className="h-[2px] w-10 bg-[#FF7A1A]" />
              Wildlife encounters
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              A sanctuary for{" "}
              <span className="text-[#E76B16]">remarkable wildlife.</span>
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-[#625B57]">
              Lake Nakuru National Park is home to a variety of wildlife.
              Explore its different habitats with an experienced guide and
              look out for some of Kenya's fascinating animal species.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3">
              {wildlife.map((animal) => (
                <div
                  key={animal}
                  className="flex items-center gap-2.5 border-b border-[#E9DED5] pb-3"
                >
                  <Check
                    size={16}
                    className="shrink-0 text-[#E76B16]"
                    strokeWidth={3}
                  />
                  <span className="text-sm font-semibold text-[#403833]">
                    {animal}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-7 text-xs leading-6 text-[#8A817A]">
              Wildlife sightings vary depending on season, weather and natural
              conditions. No sightings are guaranteed.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#171014] px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[#FF7A1A]"
            >
              Enquire About a Safari
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -bottom-5 -right-5 h-36 w-36 rounded-br-[45px] border-b-2 border-r-2 border-[#FF7A1A]" />

            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src={nakuru}
                alt="Natural landscape of Lake Nakuru National Park"
                className="h-[430px] w-full object-cover sm:h-[550px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171014]/65 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#FF7A1A] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white">
                  <Heart size={13} />
                  A wildlife experience
                </div>
                <p className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl">
                  Discover the wild side of Kenya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-[#F1EAE3] px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.3em] text-[#E76B16]">
                Make the most of your visit
              </p>

              <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Experiences worth{" "}
                <span className="text-[#E76B16]">remembering.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6D625C]">
              Explore Lake Nakuru through guided activities designed to bring
              you closer to the landscapes and wildlife of Kenya.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {experiences.map((item) => (
              <div
                key={item.number}
                className="group flex gap-6 rounded-3xl border border-[#E4D8CE] bg-[#FFF9F5] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FF7A1A]/60 hover:shadow-xl sm:p-9"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#171014] text-[#FFA51F] transition group-hover:bg-[#FF7A1A] group-hover:text-white">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-[0.2em] text-[#E76B16]">
                      {item.number}
                    </span>
                    <ArrowUpRight
                      size={19}
                      className="text-[#A79A91] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#E76B16]"
                    />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#171014]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#706660]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFARI PLANNING */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[#E76B16]">
              <span className="h-[2px] w-10 bg-[#FF7A1A]" />
              Your safari, your way
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Let's plan your{" "}
              <span className="text-[#E76B16]">Lake Nakuru adventure.</span>
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-[#625B57]">
              At BigPaw Adventure Safaris, we help you plan a safari that suits
              your travel style. Whether you are looking for a short getaway or
              a wider Kenya safari, our team can help organise your experience.
            </p>

            <div className="mt-9 space-y-5">
              {[
                "Private and personalised safari experiences",
                "Professional safari guides",
                "Flexible travel itineraries",
                "Morning and afternoon game drive options",
                "Comfortable safari transport arrangements",
                "Customised trips for couples, families and groups",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF7A1A]/10 text-[#E76B16]">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <p className="text-sm font-medium leading-6 text-[#514943]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#FF7A1A] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[#171014]"
              >
                Start Planning
                <ArrowRight size={17} />
              </Link>

              <a
                href={`https://wa.me/254747859681?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-[#E4D8CE] px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-[#171014] transition hover:border-[#FF7A1A] hover:text-[#E76B16]"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src={nakuru}
                alt="Lake Nakuru safari destination"
                className="h-[440px] w-full object-cover sm:h-[550px]"
              />
            </div>

            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-[#E9DED5] bg-white p-6 shadow-2xl sm:left-8 sm:right-8 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF7A1A] text-white">
                  <Compass size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E76B16]">
                    BigPaw Adventure Safaris
                  </p>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-[#171014]">
                    Your journey starts with us.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS */}
      <section className="bg-[#171014] px-6 py-24 text-white sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.3em] text-[#FFA51F]">
              Before you travel
            </p>

            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
              A few tips for a better{" "}
              <span className="text-[#FFA51F]">safari.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60">
              A little preparation can make your Lake Nakuru visit even more
              enjoyable.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {travelTips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF7A1A]/15 text-[#FFA51F]">
                  {tip.icon}
                </div>

                <h3 className="font-serif text-xl font-semibold text-white">
                  {tip.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#FF7A1A] px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[50px] border-white/10" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[50px] border-[#171014]/10" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs font-extrabold uppercase tracking-[0.3em] text-[#171014]/70">
            Your Kenyan adventure awaits
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Ready to discover Lake Nakuru?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/90 sm:text-base">
            Let BigPaw Adventure Safaris help you create an unforgettable
            journey through one of Kenya's beautiful wildlife destinations.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#171014] px-9 py-4 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#171014]"
            >
              Plan Your Safari
              <ArrowUpRight size={18} />
            </Link>

            <a
              href={`https://wa.me/254747859681?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/70 px-9 py-4 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#171014]"
            >
              <MessageCircle size={17} />
              Chat With Us
            </a>
          </div>

          <p className="mt-10 font-serif text-lg font-semibold italic text-white/90">
            WE DON'T COUNT MOMENTS! WE MAKE MOMENTS COUNT.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#101010] px-6 pb-8 pt-16 text-white sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
            {/* BRAND */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block">
                <span className="font-serif text-3xl font-bold tracking-tight text-white">
                  BIGPAW
                  <span className="text-[#FF7A1A]">.</span>
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFA51F]">
                  Adventure Safaris
                </span>
              </Link>

              <p className="mt-6 max-w-md text-sm leading-8 text-white/55">
                Discover the beauty of Africa with BigPaw Adventure Safaris.
                We create memorable journeys through wildlife destinations,
                scenic landscapes and authentic travel experiences.
              </p>

              <p className="mt-5 max-w-md font-serif text-base italic text-[#FFA51F]">
                "We don't count moments. We make moments count."
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#FFA51F]">
                Explore
              </h3>

              <div className="mt-6 flex flex-col gap-4 text-sm text-white/65">
                {[
                  ["Home", "/"],
                  ["About Us", "/about"],
                  ["Safaris", "/safaris"],
                  ["Activities", "/activities"],
                  ["Contact", "/contact"],
                ].map(([label, path]) => (
                  <Link
                    key={label}
                    to={path}
                    className="w-fit transition hover:translate-x-1 hover:text-[#FFA51F]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#FFA51F]">
                Get in Touch
              </h3>

              <div className="mt-6 space-y-5 text-sm text-white/65">
                <a
                  href="tel:+254747859681"
                  className="flex items-center gap-3 transition hover:text-[#FFA51F]"
                >
                  <Phone size={17} className="shrink-0 text-[#FF7A1A]" />
                  +254727096078
                </a>

                <a
                  href="tel:+254720859681"
                  className="flex items-center gap-3 transition hover:text-[#FFA51F]"
                >
                  <Phone size={17} className="shrink-0 text-[#FF7A1A]" />
                  +254 720 859681
                </a>

                <a
                  href="mailto:bigpawadventures@gmail.com"
                  className="flex items-start gap-3 transition hover:text-[#FFA51F]"
                >
                  <Mail
                    size={17}
                    className="mt-0.5 shrink-0 text-[#FF7A1A]"
                  />
                  <span className="break-all">
                    bigpawadventures@gmail.com
                  </span>
                </a>

                <div className="flex items-center gap-3">
                  <MapPin size={17} className="shrink-0 text-[#FF7A1A]" />
                  Nairobi, Kenya
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/40 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} BigPaw Adventure Safaris. All
              rights reserved.
            </p>

            <a
              href="https://wa.me/254747859681"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-[#FFA51F] transition hover:text-white"
            >
              <MessageCircle size={15} />
              Connect with BigPaw
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}