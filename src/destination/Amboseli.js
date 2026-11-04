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
  Footprints,
} from "lucide-react";

import amboseli from "../assets/amboseli.jpg";

export default function Amboseli() {
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
      icon: <Mountain size={23} />,
      title: "Mount Kilimanjaro Views",
      description:
        "Enjoy spectacular views of Africa's highest mountain, especially when the skies are clear.",
    },
    {
      icon: <Binoculars size={23} />,
      title: "Elephant Encounters",
      description:
        "Amboseli is famous for its large elephant herds moving across the open plains.",
    },
    {
      icon: <Bird size={23} />,
      title: "Beautiful Birdlife",
      description:
        "Explore wetlands and open habitats that attract a variety of bird species.",
    },
    {
      icon: <Camera size={23} />,
      title: "Iconic Photography",
      description:
        "Capture memorable wildlife moments against the magnificent Kilimanjaro backdrop.",
    },
  ];

  const wildlife = [
    "African Elephants",
    "Lions",
    "Cheetahs",
    "Buffaloes",
    "Giraffes",
    "Zebras",
    "Wildebeest",
    "Hyenas",
    "Warthogs",
    "Hippos",
    "Ostriches",
    "Various Bird Species",
  ];

  const experiences = [
    {
      number: "01",
      title: "Elephant Watching",
      description:
        "Observe Amboseli's famous elephant herds as they move through the plains and wetland areas.",
      icon: <Binoculars size={22} />,
    },
    {
      number: "02",
      title: "Game Drives",
      description:
        "Explore different habitats with a professional safari guide while looking for the park's wildlife.",
      icon: <CarFront size={22} />,
    },
    {
      number: "03",
      title: "Kilimanjaro Photography",
      description:
        "Capture the beautiful combination of wildlife, open savannah and Mount Kilimanjaro.",
      icon: <Camera size={22} />,
    },
    {
      number: "04",
      title: "Bird Watching",
      description:
        "Discover the park's rich birdlife around seasonal wetlands and other natural habitats.",
      icon: <Bird size={22} />,
    },
  ];

  const travelTips = [
    {
      icon: <Sun size={21} />,
      title: "Choose the Right Time",
      description:
        "Early mornings often provide beautiful light and opportunities to observe active wildlife.",
    },
    {
      icon: <Camera size={21} />,
      title: "Carry Your Camera",
      description:
        "Bring a camera with a zoom lens to capture wildlife and the spectacular mountain scenery.",
    },
    {
      icon: <Footprints size={21} />,
      title: "Pack Comfortably",
      description:
        "Wear comfortable clothing, sunglasses and suitable footwear for your safari.",
    },
    {
      icon: <Leaf size={21} />,
      title: "Respect Wildlife",
      description:
        "Follow your guide's instructions and maintain a safe distance from all wildlife.",
    },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hello BigPaw Adventure Safaris, I would like to enquire about an Amboseli safari. Please share your packages, prices and availability."
  );

  return (
    <main className="overflow-hidden bg-[#FFF9F5] text-[#171014]">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#171014] lg:min-h-[760px]">
        <img
          src={amboseli}
          alt="Amboseli National Park with Mount Kilimanjaro"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#101412]/95 via-[#101412]/65 to-[#101412]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101412]/75 via-transparent to-[#101412]/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#FF7A1A]" />
              Kenya · Southern Kenya
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#FFD08A]">
              The land of giants
            </p>

            <h1 className="font-serif text-6xl font-semibold leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Amboseli
              <span className="block text-[#FFA51F]">National Park.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Experience the magic of Amboseli, where magnificent elephant
              herds roam across open plains beneath the towering presence of
              Mount Kilimanjaro. Discover one of Kenya's most iconic safari
              destinations.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FF7A1A] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#FFA51F]"
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

        {/* HERO DETAILS */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/20 bg-[#171014]/35 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-6 py-6 sm:grid-cols-4 sm:px-10 lg:px-12">
            {[
              ["Destination", "Amboseli"],
              ["Location", "Southern Kenya"],
              ["Experience", "Elephant Safari"],
              ["Highlight", "Mount Kilimanjaro"],
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
      <section
        id="discover"
        className="px-6 py-24 sm:px-10 lg:px-12 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[#E76B16]">
              <span className="h-[2px] w-10 bg-[#FF7A1A]" />
              Discover Amboseli
            </p>

            <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight tracking-tight text-[#171014] sm:text-5xl lg:text-6xl">
              Where giants roam beneath the{" "}
              <span className="text-[#E76B16]">African sky.</span>
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#625B57]">
              <p>
                <strong className="text-[#171014]">
                  Amboseli National Park
                </strong>{" "}
                is one of Kenya's most celebrated wildlife destinations,
                located in the southern part of the country near the
                Kenya–Tanzania border.
              </p>

              <p>
                The park is particularly famous for its impressive elephant
                population and breathtaking views of Mount Kilimanjaro. Its
                landscapes feature open grasslands, seasonal wetlands,
                swamps and dry plains that support a wide variety of wildlife.
              </p>

              <p>
                Whether you are interested in elephant photography, exciting
                game drives or simply enjoying the beauty of the African
                wilderness, Amboseli offers an unforgettable safari
                experience.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {["Elephant Encounters", "Kilimanjaro Views", "Game Drives"].map(
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
                src={amboseli}
                alt="Elephants in Amboseli National Park"
                className="h-[440px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[540px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#171014]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FFD08A]">
                  The African wilderness
                </span>
                <h3 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
                  A landscape like no other.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/75">
                  Discover the natural beauty and wildlife of southern Kenya.
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

      {/* DESTINATION HIGHLIGHTS */}
      <section className="bg-[#171014] px-6 py-24 text-white sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.3em] text-[#FFA51F]">
              The Amboseli experience
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              What makes Amboseli{" "}
              <span className="text-[#FFA51F]">extraordinary.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
              A destination where remarkable wildlife, beautiful scenery and
              unforgettable safari moments come together.
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

      {/* WILDLIFE SECTION */}
      <section className="px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[#E76B16]">
              <span className="h-[2px] w-10 bg-[#FF7A1A]" />
              Meet the wildlife
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Home to Africa's{" "}
              <span className="text-[#E76B16]">gentle giants.</span>
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-[#625B57]">
              Amboseli is especially known for its elephants, but the park
              also supports a fascinating range of wildlife. Explore its
              diverse habitats and discover the animals that make this
              destination special.
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
                src={amboseli}
                alt="Amboseli wildlife and open savannah"
                className="h-[430px] w-full object-cover sm:h-[550px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#171014]/65 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#FF7A1A] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white">
                  <Heart size={13} />
                  The wild awaits
                </div>

                <p className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl">
                  Experience the magic of Amboseli.
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
                Explore and experience
              </p>

              <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Adventures worth{" "}
                <span className="text-[#E76B16]">remembering.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6D625C]">
              Discover Amboseli through exciting safari activities and
              experiences designed to bring you closer to nature.
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
              Travel with BigPaw
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Let's create your{" "}
              <span className="text-[#E76B16]">Amboseli adventure.</span>
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-[#625B57]">
              At BigPaw Adventure Safaris, we help you plan a safari that
              matches your travel interests, schedule and budget. Whether
              you're travelling as a couple, family or group, we can help
              organise your Amboseli experience.
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
                src={amboseli}
                alt="Amboseli safari destination"
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
              Prepare for your trip
            </p>

            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
              Make your Amboseli safari{" "}
              <span className="text-[#FFA51F]">count.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60">
              A few simple preparations can make your safari more comfortable
              and enjoyable.
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
            Discover the magic of Kenya
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Ready for an Amboseli adventure?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/90 sm:text-base">
            Let BigPaw Adventure Safaris take you closer to the beauty of
            Amboseli. Your next unforgettable safari experience begins here.
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
                  +254 747 859681
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