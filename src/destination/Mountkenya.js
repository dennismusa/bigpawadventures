import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,  ArrowUpRight,  Mountain,  Compass, MapPin, Camera,  Trees,  Footprints,  Sunrise,  CheckCircle2,  Phone,  Mail, MessageCircle,
  
} from "lucide-react";

import kenya1 from "../assets/kenya1.jpg";
import kenya2 from "../assets/kenya2.jpg";
import kenya3 from "../assets/kenya3.jpg";
import kenya4 from "../assets/kenya4.jpg";

const WHATSAPP_NUMBER = "254747859681";

const whatsappLink =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello BigPaw Adventure Safaris! I would like to enquire about a Mount Kenya climbing experience."
  )}`;

export default function MountKenya() {
  const experiences = [
    {
      number: "01",
      title: "Mountain Trekking",
      description:
        "Explore spectacular mountain trails, rugged landscapes and beautiful alpine scenery as you make your way up Mount Kenya.",
      icon: Footprints,
    },
    {
      number: "02",
      title: "Scenic Landscapes",
      description:
        "Discover dramatic valleys, glacial lakes, rocky peaks and breathtaking views across Kenya's highlands.",
      icon: Mountain,
    },
    {
      number: "03",
      title: "Nature & Wildlife",
      description:
        "Experience unique mountain ecosystems, indigenous forests and fascinating wildlife along the trekking routes.",
      icon: Trees,
    },
    {
      number: "04",
      title: "Mountain Photography",
      description:
        "Capture unforgettable moments, beautiful mountain sunsets and the incredible scenery of this UNESCO World Heritage Site.",
      icon: Camera,
    },
  ];

  const highlights = [
    "Explore the magnificent Mount Kenya National Park",
    "Experience spectacular mountain scenery",
    "Discover unique alpine vegetation and landscapes",
    "Enjoy beautiful mountain lakes and valleys",
    "Experience guided mountain trekking",
    "Witness unforgettable mountain sunrises",
  ];

  const routes = [
    {
      name: "Naro Moru Route",
      description:
        "A popular climbing route known for its direct approach and varied mountain scenery.",
      detail: "A classic trekking experience",
    },
    {
      name: "Sirimon Route",
      description:
        "A scenic route offering gradual ascent, beautiful valleys and excellent acclimatisation opportunities.",
      detail: "Known for beautiful landscapes",
    },
    {
      name: "Chogoria Route",
      description:
        "A spectacular approach featuring dramatic valleys, waterfalls, lakes and incredible mountain views.",
      detail: "Ideal for scenic exploration",
    },
  ];

  const travelTips = [
    "Carry warm clothing for changing mountain temperatures.",
    "Wear comfortable, waterproof hiking boots.",
    "Allow sufficient time for acclimatisation.",
    "Carry drinking water and personal essentials.",
    "Follow your professional mountain guide's instructions.",
    "Prepare for changing weather conditions.",
  ];

  return (
    <main className="overflow-hidden bg-white text-[#171014]">
      {/* HERO */}
      <section className="relative flex min-h-[680px] items-center overflow-hidden sm:min-h-[740px]">
        <img
          src={kenya1}
          alt="Mount Kenya mountain landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#100b09]/90 via-[#100b09]/60 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <Mountain size={15} className="text-[#FF7A1A]" />
              BigPaw Adventure Safaris
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#FFA51F]">
              Discover Kenya's Mountain Paradise
            </p>

            <h1 className="font-serif text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-8xl">
              MOUNT
              <span className="block text-[#FFA51F]">KENYA</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Rise above the ordinary and discover the breathtaking beauty
              of Mount Kenya. Explore dramatic mountain landscapes, scenic
              valleys, alpine wilderness and unforgettable trekking
              experiences.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#FF7A1A] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white transition hover:bg-[#e9680b]"
              >
                Plan Your Adventure
                <ArrowUpRight size={19} />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/60 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#171014]"
              >
                Explore Mount Kenya
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-9 gap-y-5 border-t border-white/25 pt-7 text-white">
              <div className="flex items-center gap-3">
                <Mountain className="text-[#FFA51F]" size={21} />
                <span className="text-sm font-semibold">
                  Mountain Adventures
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Compass className="text-[#FFA51F]" size={21} />
                <span className="text-sm font-semibold">
                  Guided Experiences
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Camera className="text-[#FFA51F]" size={21} />
                <span className="text-sm font-semibold">
                  Scenic Exploration
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80 lg:flex">
          <span className="h-px w-12 bg-[#FFA51F]" />
          Kenya's Mountain Wilderness
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={kenya2}
                alt="Mount Kenya scenic wilderness"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[550px]"
              />
            </div>

            <div className="absolute -bottom-7 -right-3 max-w-[230px] rounded-2xl bg-[#171014] p-6 text-white shadow-2xl sm:-right-7">
              <Mountain className="mb-3 text-[#FFA51F]" size={30} />
              <p className="font-serif text-2xl font-bold">5,199 m</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/60">
                Batian Peak Elevation
              </p>
            </div>
          </div>

          <div className="lg:py-8">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em] text-[#FF7A1A]">
              The Heart of Kenya's Highlands
            </p>

            <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Discover the
              <span className="block text-[#FF7A1A]">
                Majesty of Mount Kenya
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-8 text-gray-600">
              <p>
                Mount Kenya is one of Africa's most spectacular natural
                landmarks. Its dramatic peaks, beautiful forests, alpine
                moorlands and glacial valleys create an extraordinary
                destination for outdoor enthusiasts and nature lovers.
              </p>

              <p>
                Whether you are an experienced climber seeking a challenging
                summit adventure or a traveller looking to explore the
                mountain's beautiful lower slopes, Mount Kenya offers
                experiences worth remembering.
              </p>

              <p>
                With BigPaw Adventure Safaris, discover the mountain at your
                own pace through carefully planned experiences designed
                around your interests and adventure goals.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border-b-2 border-[#FF7A1A] pb-2 text-sm font-extrabold uppercase tracking-wider transition hover:gap-5"
            >
              Start Planning
              <ArrowRight size={18} className="text-[#FF7A1A]" />
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="bg-[#FFF9F5] px-6 py-20 sm:px-10 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em] text-[#FF7A1A]">
              Explore More
            </p>

            <h2 className="font-serif text-4xl font-bold sm:text-5xl">
              Experiences That
              <span className="text-[#FF7A1A]"> Inspire</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              Discover the many ways to experience Mount Kenya, from
              mountain trekking to extraordinary natural scenery.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group rounded-3xl border border-gray-100 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF0E4] text-[#FF7A1A] transition group-hover:bg-[#FF7A1A] group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <span className="text-sm font-bold text-gray-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>

                  <div className="mt-7 h-1 w-10 rounded-full bg-[#FF7A1A] transition-all group-hover:w-20" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MOUNTAIN LANDSCAPE */}
      <section className="relative min-h-[540px] overflow-hidden">
        <img
          src={kenya3}
          alt="Beautiful Mount Kenya mountain scenery"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[540px] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.3em] text-[#FFA51F]">
              Beyond the Ordinary
            </p>

            <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-6xl">
              Every Trail
              <span className="block text-[#FFA51F]">
                Tells a Story.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80">
              From the lush mountain forests to the open alpine landscapes,
              every step reveals another side of this extraordinary
              wilderness. Experience nature, adventure and the freedom of
              exploring one of Africa's most iconic mountains.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#FF7A1A] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white transition hover:bg-[#e9680b]"
            >
              Explore With Us
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em] text-[#FF7A1A]">
              Choose Your Adventure
            </p>

            <h2 className="font-serif text-4xl font-bold sm:text-5xl">
              Popular Mount Kenya
              <span className="block text-[#FF7A1A]">Trekking Routes</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              Mount Kenya has several trekking approaches, each offering
              different scenery and experiences. Your ideal route depends
              on your fitness, available time and adventure goals.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {routes.map((route, index) => (
              <div
                key={route.name}
                className="rounded-3xl border border-gray-200 p-8 transition duration-300 hover:border-[#FF7A1A] hover:shadow-xl"
              >
                <span className="text-sm font-extrabold text-[#FF7A1A]">
                  ROUTE 0{index + 1}
                </span>

                <h3 className="mt-5 font-serif text-2xl font-bold">
                  {route.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {route.description}
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-6 text-sm font-bold text-[#171014]">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[#FF7A1A]"
                  />
                  {route.detail}
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#FF7A1A]"
                >
                  Enquire About This Route
                  <ArrowUpRight size={16} />
                </a>
              </div>
            ))}
          </div>

          <p className="mt-7 text-xs leading-6 text-gray-500">
            Route choice, summit objectives, access and accommodation
            arrangements should be confirmed during trip planning.
            Summit success and access to specific peaks are subject to
            conditions, fitness, acclimatisation and applicable park rules.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-[#171014] px-6 py-20 text-white sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em] text-[#FFA51F]">
              The Mountain Experience
            </p>

            <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
              What Makes
              <span className="block text-[#FFA51F]">
                Mount Kenya Special?
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/60">
              Mount Kenya is a destination of remarkable contrasts.
              Its ecosystems, dramatic peaks and incredible landscapes
              create an unforgettable adventure for visitors from
              around the world.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-[#FFA51F]"
                  />
                  <p className="text-sm leading-6 text-white/80">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={kenya4}
              alt="Mount Kenya wilderness and mountain views"
              className="h-[450px] w-full rounded-[2rem] object-cover"
            />

            <div className="absolute -bottom-5 -left-4 rounded-2xl bg-[#FF7A1A] p-6 text-white shadow-xl sm:-left-7">
              <Sunrise size={27} />
              <p className="mt-3 font-serif text-xl font-bold">
                Adventure Awaits
              </p>
              <p className="mt-1 text-xs text-white/80">
                Discover the mountain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em] text-[#FF7A1A]">
                Moments Worth Remembering
              </p>

              <h2 className="font-serif text-4xl font-bold sm:text-5xl">
                Explore the
                <span className="text-[#FF7A1A]"> Beauty</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              A glimpse into the landscapes and natural beauty waiting
              to be discovered on Mount Kenya.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[kenya1, kenya2, kenya3, kenya4].map((image, index) => (
              <div
                key={index}
                className={`group overflow-hidden rounded-2xl ${
                  index === 1 || index === 2
                    ? "h-[230px] sm:h-[330px]"
                    : "h-[230px] sm:h-[330px]"
                }`}
              >
                <img
                  src={image}
                  alt={`Mount Kenya gallery ${index + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS */}
      <section className="bg-[#FFF9F5] px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em] text-[#FF7A1A]">
              Prepare for Your Journey
            </p>

            <h2 className="font-serif text-4xl font-bold sm:text-5xl">
              Plan Your
              <span className="block text-[#FF7A1A]">
                Mountain Adventure
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-600">
              Good preparation makes a mountain adventure more enjoyable.
              Before travelling, consider your fitness, equipment,
              acclimatisation needs and the weather conditions.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#171014] px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#FF7A1A]"
            >
              Get Travel Advice
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {travelTips.map((tip, index) => (
              <div
                key={tip}
                className="flex items-start gap-4 rounded-2xl border border-orange-100 bg-white p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF0E4] text-sm font-extrabold text-[#FF7A1A]">
                  {index + 1}
                </div>

                <p className="text-sm leading-6 text-gray-600">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="relative overflow-hidden bg-[#FF7A1A] px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[50px] border-white/10" />
        <div className="absolute -bottom-48 -left-20 h-96 w-96 rounded-full border-[50px] border-white/10" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em] text-white/75">
              Your Next Adventure Starts Here
            </p>

            <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-6xl">
              Ready to Explore
              <span className="block text-[#171014]">
                Mount Kenya?
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/85 sm:text-base">
              Let BigPaw Adventure Safaris help you plan an unforgettable
              mountain experience. Contact our team to discuss routes,
              dates, accommodation and your adventure preferences.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#171014] px-9 py-5 text-sm font-extrabold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#171014]"
          >
            <MessageCircle size={20} />
            Book Your Adventure
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#171014] px-6 pb-8 pt-16 text-white sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block">
              <h3 className="font-serif text-2xl font-bold">
                BIGPAW
                <span className="text-[#FF7A1A]"> ADVENTURE</span>
              </h3>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                Safaris
              </p>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
              WE DON'T COUNT MOMENTS! WE MAKE MOMENTS COUNT.
              Discover Africa with BigPaw Adventure Safaris.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-extrabold uppercase tracking-wider text-[#FFA51F]">
              Quick Links
            </h4>

            <div className="space-y-4 text-sm text-white/60">
              <Link to="/" className="block transition hover:text-[#FF7A1A]">
                Home
              </Link>
              <Link to="/about" className="block transition hover:text-[#FF7A1A]">
                About Us
              </Link>
              <Link to="/safaris" className="block transition hover:text-[#FF7A1A]">
                Safaris
              </Link>
              <Link to="/activities" className="block transition hover:text-[#FF7A1A]">
                Activities
              </Link>
              <Link to="/contact" className="block transition hover:text-[#FF7A1A]">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-extrabold uppercase tracking-wider text-[#FFA51F]">
              Explore
            </h4>

            <div className="space-y-4 text-sm text-white/60">
              <Link to="/maasaimara" className="block transition hover:text-[#FF7A1A]">
                Maasai Mara
              </Link>
              <Link to="/lakenakuru" className="block transition hover:text-[#FF7A1A]">
                Lake Nakuru
              </Link>
              <Link to="/amboseli" className="block transition hover:text-[#FF7A1A]">
                Amboseli
              </Link>
              <Link to="/mountkenya" className="block transition hover:text-[#FF7A1A]">
                Mount Kenya
              </Link>
              <Link to="/serengeti" className="block transition hover:text-[#FF7A1A]">
                Serengeti
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-extrabold uppercase tracking-wider text-[#FFA51F]">
              Get In Touch
            </h4>

            <div className="space-y-5 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-[#FF7A1A]" />
                <span>Nairobi, Kenya</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="shrink-0 text-[#FF7A1A]" />
                <div>
                  <p>+254727096078</p>
                  <p className="mt-1">+254 720 859681</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="shrink-0 text-[#FF7A1A]" />
                <span className="break-all">
                  bigpawadventures@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 pt-7 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} BigPaw Adventure Safaris.
            All rights reserved.
          </p>

          <p>WE DON'T COUNT MOMENTS! WE MAKE MOMENTS COUNT.</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BigPaw Adventure Safaris on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
      >
        <MessageCircle size={27} />
      </a>
    </main>
  );
}