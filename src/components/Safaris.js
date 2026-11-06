
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock,
  Compass,
  Binoculars,
  Mountain,
  Waves,
  Camera,
  Heart,
  ShieldCheck,
  Users,
  Sparkles,
  Mail,
  Phone,
  Globe,
  Music2,
} from "lucide-react";

// ==========================================
// BIGPAW DESTINATION IMAGES
// ==========================================

import amboseli from "../assets/amboseli.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";
import serengeti from "../assets/serengeti.jpg";
import serengeti3 from "../assets/serengeti3.jpg";
import nakuru from "../assets/nakuru.jpg";
import kili1 from "../assets/kili1.jpg";
import ngorongori1 from "../assets/ngorongoro1.jpg";
import mara1 from "../assets/mara1.jpg";
import diani1 from "../assets/diani1.jpg";
import zanzibar4 from "../assets/zanzibar4.jpg";
import image16 from "../assets/image16.jpg";
import image17 from "../assets/image17.jpg";
import cruiser2 from "../assets/cruiser2.jpg";

// ==========================================
// BUSINESS CONTACT DETAILS
// ==========================================

const phone1 = "+254747859681";
const phone2 = "+254720859681";
const email = "bigpawadventures@gmail.com";

const whatsappMessage =
  "Hello BigPaw Adventure Safaris, I would like to enquire about your safari packages.";

const whatsappLink = `https://wa.me/254747859681?text=${encodeURIComponent(
  whatsappMessage
)}`;

// ==========================================
// DESTINATIONS
// ==========================================

const destinations = [
  // KENYA
  {
    name: "Nairobi National Park",
    country: "Kenya",
    region: "Kenya",
    category: "Urban Safari",
    image: cruiser2,
    duration: "Day Trip",
    tag: "Urban Safari",
    description:
      "Enjoy an exciting wildlife adventure just outside Nairobi city. Experience game drives and discover Kenya's incredible wildlife.",
  },
  {
    name: "Maasai Mara National Reserve",
    country: "Kenya",
    region: "Kenya",
    category: "Wildlife Safari",
    image: mara1,
    duration: "3–5 Days",
    tag: "Popular Safari",
    description:
      "Explore the legendary Maasai Mara, home to the Big Five, breathtaking landscapes and the spectacular Great Migration.",
  },
  {
    name: "Amboseli National Park",
    country: "Kenya",
    region: "Kenya",
    category: "Wildlife Safari",
    image: amboseli,
    duration: "2–3 Days",
    tag: "Iconic Destination",
    description:
      "Discover large elephant herds, incredible wildlife and magnificent views of Mount Kilimanjaro.",
  },
  {
    name: "Lake Nakuru National Park",
    country: "Kenya",
    region: "Kenya",
    category: "Wildlife Safari",
    image: nakuru,
    duration: "2 Days",
    tag: "Nature Escape",
    description:
      "Discover beautiful lake scenery, rhinos, birdlife and diverse wildlife in this remarkable national park.",
  },
  {
    name: "Tsavo National Parks",
    country: "Kenya",
    region: "Kenya",
    category: "Wildlife Safari",
    image: image16,
    duration: "2–4 Days",
    tag: "Wilderness Adventure",
    description:
      "Explore the vast landscapes of Tsavo East and Tsavo West, famous for their elephants and beautiful wilderness.",
  },
  {
    name: "Samburu National Reserve",
    country: "Kenya",
    region: "Kenya",
    category: "Wildlife Safari",
    image: image17,
    duration: "2–4 Days",
    tag: "Unique Wildlife",
    description:
      "Experience northern Kenya's beautiful landscapes and discover unique wildlife species found in the Samburu region.",
  },

  // TANZANIA
  {
    name: "Serengeti National Park",
    country: "Tanzania",
    region: "Tanzania",
    category: "Wildlife Safari",
    image: serengeti,
    duration: "3–6 Days",
    tag: "African Classic",
    description:
      "Journey through the endless plains of the Serengeti and experience some of Africa's most extraordinary wildlife.",
  },
  {
    name: "Ngorongoro Crater",
    country: "Tanzania",
    region: "Tanzania",
    category: "Wildlife Safari",
    image: ngorongori1,
    duration: "2–3 Days",
    tag: "Natural Wonder",
    description:
      "Explore one of Africa's most spectacular natural wonders, with remarkable scenery and incredible wildlife.",
  },
  {
    name: "Tarangire National Park",
    country: "Tanzania",
    region: "Tanzania",
    category: "Wildlife Safari",
    image: serengeti3,
    duration: "2–3 Days",
    tag: "Wildlife Escape",
    description:
      "Discover impressive elephant herds, ancient baobab trees and the beautiful landscapes of Tarangire.",
  },
  {
    name: "Lake Manyara National Park",
    country: "Tanzania",
    region: "Tanzania",
    category: "Wildlife Safari",
    image: nakuru,
    duration: "1–2 Days",
    tag: "Scenic Safari",
    description:
      "Explore beautiful lake scenery, diverse birdlife and fascinating wildlife in northern Tanzania.",
  },
  {
    name: "Wildebeest Migration",
    country: "Kenya & Tanzania",
    region: "Tanzania",
    category: "Wildlife Safari",
    image: Wilderbeast,
    duration: "4–7 Days",
    tag: "Bucket List",
    description:
      "Witness the incredible movement of wildebeest and zebras across the legendary East African plains.",
  },
  {
    name: "Mount Kilimanjaro",
    country: "Tanzania",
    region: "Tanzania",
    category: "Mountain Adventure",
    image: kili1,
    duration: "5–9 Days",
    tag: "Mountain Adventure",
    description:
      "Challenge yourself with an unforgettable trekking adventure to the highest mountain in Africa.",
  },

  // BEACH HOLIDAYS
  {
    name: "Voyager Beach Resort",
    country: "Mombasa, Kenya",
    region: "Beach",
    category: "Beach Holiday",
    image: diani1,
    duration: "3–5 Days",
    tag: "Resort Holiday",
    description:
      "Enjoy a relaxing coastal holiday with beach activities, family entertainment and a memorable resort experience.",
  },
  {
    name: "Diani Beach",
    country: "Kenya",
    region: "Beach",
    category: "Beach Holiday",
    image: diani1,
    duration: "3–5 Days",
    tag: "Coastal Escape",
    description:
      "Relax on beautiful white sandy beaches, enjoy turquoise waters and discover Kenya's stunning coastline.",
  },
  {
    name: "Zanzibar Island",
    country: "Tanzania",
    region: "Beach",
    category: "Beach Holiday",
    image: zanzibar4,
    duration: "4–6 Days",
    tag: "Island Escape",
    description:
      "Experience tropical beaches, Stone Town, island excursions and unforgettable Indian Ocean adventures.",
  },
];

// ==========================================
// SAFARI EXPERIENCES
// ==========================================

const experiences = [
  {
    icon: Binoculars,
    title: "Wildlife Safaris",
    description:
      "Discover Africa's famous national parks and encounter incredible wildlife in their natural habitats.",
  },
  {
    icon: Mountain,
    title: "Mountain Adventures",
    description:
      "Experience exciting trekking journeys and explore Africa's spectacular mountain landscapes.",
  },
  {
    icon: Waves,
    title: "Beach Holidays",
    description:
      "Escape to beautiful coastal destinations, tropical beaches and relaxing island resorts.",
  },
  {
    icon: Camera,
    title: "Photography Safaris",
    description:
      "Capture extraordinary wildlife encounters, beautiful scenery and unforgettable African moments.",
  },
  {
    icon: Heart,
    title: "Honeymoon Holidays",
    description:
      "Celebrate special occasions with romantic safari experiences and beautiful destinations.",
  },
  {
    icon: Compass,
    title: "Tailor-Made Safaris",
    description:
      "Enjoy personalised journeys designed around your interests, travel dates and budget.",
  },
];

// ==========================================
// FILTER OPTIONS
// ==========================================

const filters = [
  "All Destinations",
  "Kenya",
  "Tanzania",
  "Beach",
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function Safaris() {
  const [activeFilter, setActiveFilter] = useState("All Destinations");

  const filteredDestinations =
    activeFilter === "All Destinations"
      ? destinations
      : destinations.filter(
          (destination) => destination.region === activeFilter
        );

  const enquireDestination = (destination) => {
    const message = `Hello BigPaw Adventure Safaris, I am interested in visiting ${destination.name}. Please share the available packages, itinerary and prices.`;

    return `https://wa.me/254747859681?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <main className="overflow-hidden bg-white text-[#25000F]">

      {/* ==================================
          HERO SECTION
      ================================== */}
<section className="relative flex min-h-[440px] items-center overflow-hidden bg-[#171014] px-5 py-16 sm:min-h-[490px] sm:px-10 sm:py-20 lg:min-h-[540px] lg:px-20">

  {/* BACKGROUND IMAGE */}
  <img
    src={mara1}
    alt="African safari landscape"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* CLEAR, LIGHT OVERLAYS */}
  <div className="absolute inset-0 bg-black/25" />

  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

  {/* HERO CONTENT */}
  <div className="relative z-10 mx-auto w-full max-w-7xl">

    <div className="mb-5 flex items-center gap-3">
      <span className="h-[2px] w-10 bg-[#FFA51F]" />

      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFD08A] sm:text-xs">
        BigPaw Adventure Safaris
      </p>
    </div>

    <h1 className="max-w-4xl font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-7xl">
      Discover Africa.
      <span className="mt-1 block text-[#FFA51F]">
        Experience the Wild.
      </span>
    </h1>

    <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 sm:mt-6 sm:text-base sm:leading-8">
      We don't count moments, we make moments count. Discover
      extraordinary destinations, encounter incredible wildlife
      and create unforgettable memories with BigPaw Adventure
      Safaris.
    </p>

    {/* ACTION BUTTONS */}
    <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">

      <a
        href="#destinations"
        className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#FF7A1A] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white transition duration-300 hover:-translate-y-1 hover:bg-[#FFA51F] hover:text-[#171014]"
      >
        Explore Destinations
        <ArrowRight size={17} />
      </a>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full border border-white/60 bg-black/15 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white/15"
      >
        Plan Your Safari
        <ArrowUpRight size={17} />
      </a>

    </div>

    {/* QUICK STATS */}
    <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/30 pt-5 sm:mt-12 sm:pt-6">

      <div>
        <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
          14+
        </p>
        <p className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-white/75 sm:text-[10px]">
          Destinations
        </p>
      </div>

      <div>
        <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
          02
        </p>
        <p className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-white/75 sm:text-[10px]">
          Countries
        </p>
      </div>

      <div>
        <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
          ∞
        </p>
        <p className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-white/75 sm:text-[10px]">
          Memories
        </p>
      </div>

    </div>

  </div>

  {/* BOTTOM ACCENT */}
  <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#FFA51F] to-transparent" />

</section>

      {/* ==================================
          INTRODUCTION
      ================================== */}

      <section className="px-5 py-24 sm:px-10 lg:px-20">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#FF5A16]">
              Welcome to BigPaw
            </p>

            <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Africa Is Calling.
              <span className="block text-[#FF5A16]">
                Let's Explore Together.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-gray-600">
              From the open plains of the Maasai Mara to the magnificent
              Serengeti, from Nairobi's exciting urban safaris to the
              beautiful beaches of Zanzibar, Africa offers experiences
              that stay with you forever.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              BigPaw Adventure Safaris brings these experiences closer
              to you through wildlife adventures, scenic getaways,
              cultural experiences, mountain trekking and relaxing
              beach holidays.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Whether you are travelling alone, with family, as a
              couple or in a group, we are ready to help you plan your
              next adventure.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 border-b-2 border-[#FF5A16] pb-2 text-sm font-bold uppercase tracking-wider transition hover:gap-5"
            >
              Discover Our Story
              <ArrowRight size={18} className="text-[#FF5A16]" />
            </Link>

          </div>

          <div className="relative">

            <div className="grid grid-cols-2 gap-4">

              <img
                src={serengeti3}
                alt="African safari experience"
                className="h-[230px] w-full rounded-2xl object-cover sm:h-[290px]"
              />

              <img
                src={amboseli}
                alt="Amboseli safari"
                className="mt-10 h-[230px] w-full rounded-2xl object-cover sm:h-[290px]"
              />

              <img
                src={diani1}
                alt="Kenya coastal holiday"
                className="-mt-5 h-[190px] w-full rounded-2xl object-cover sm:h-[230px]"
              />

              <img
                src={Wilderbeast}
                alt="Wildlife migration"
                className="h-[190px] w-full rounded-2xl object-cover sm:h-[230px]"
              />

            </div>

            <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-[#25000F] p-5 text-center text-white shadow-xl sm:p-6">
              <p className="font-serif text-xl font-bold sm:text-2xl">
                We Make Moments Count.
              </p>
              <p className="mt-2 text-xs text-white/60">
                Your African adventure starts with BigPaw.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================
          SAFARI EXPERIENCES
      ================================== */}

      <section className="bg-[#F8F5F2] px-5 py-24 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#FF5A16]">
              Travel Your Way
            </p>

            <h2 className="font-serif text-4xl font-bold sm:text-5xl">
              Experiences Worth
              <span className="text-[#FF5A16]"> Remembering</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Discover different ways to experience Africa. Choose
              your adventure and let us help you make it unforgettable.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF0E8] text-[#FF5A16] transition duration-300 group-hover:bg-[#FF5A16] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 font-serif text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5A16] transition group-hover:gap-4"
                  >
                    Enquire Now
                    <ArrowRight size={16} />
                  </a>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ==================================
          DESTINATIONS
      ================================== */}

      <section
        id="destinations"
        className="scroll-mt-24 px-5 py-24 sm:px-10 lg:px-20"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-3xl">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#FF5A16]">
              Explore East Africa
            </p>

            <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Discover Our
              <span className="text-[#FF5A16]"> Destinations</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              From unforgettable Kenyan safaris to Tanzania's
              spectacular wilderness and tropical coastal escapes,
              discover your next destination with BigPaw.
            </p>

          </div>

          {/* FILTER BUTTONS */}

          <div className="mb-10 flex flex-wrap gap-3">

            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider transition duration-300 ${
                  activeFilter === filter
                    ? "bg-[#25000F] text-white shadow-lg"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#FF5A16] hover:text-[#FF5A16]"
                }`}
              >
                {filter === "Beach" ? "Beach Holidays" : filter}
              </button>
            ))}

          </div>

          {/* DESTINATION CARDS */}

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {filteredDestinations.map((destination) => (
              <article
                key={destination.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* IMAGE */}

                <div className="relative h-[280px] overflow-hidden">

                  <img
                    src={destination.image}
                    alt={destination.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#25000F]/80 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-[#FF5A16] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                    {destination.tag}
                  </span>

                  <div className="absolute bottom-5 left-5 flex items-center gap-2 text-sm font-semibold text-white">
                    <MapPin size={16} className="text-[#FFA51F]" />
                    {destination.country}
                  </div>

                </div>

                {/* CONTENT */}

                <div className="flex flex-1 flex-col p-6">

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF5A16]">
                    {destination.category}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl font-bold leading-snug">
                    {destination.name}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                    {destination.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                      <Clock size={16} className="text-[#FF5A16]" />
                      {destination.duration}
                    </div>

                    <a
                      href={enquireDestination(destination)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5A16] transition hover:gap-3"
                    >
                      Enquire
                      <ArrowUpRight size={17} />
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>

          {filteredDestinations.length === 0 && (
            <p className="py-16 text-center text-gray-500">
              No destinations available in this category.
            </p>
          )}

        </div>
      </section>

      {/* ==================================
          WHY CHOOSE BIGPAW
      ================================== */}

      <section className="bg-[#25000F] px-5 py-24 text-white sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#FFA51F]">
                The BigPaw Difference
              </p>

              <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
                More Than a Safari.
                <span className="block text-[#FF8A36]">
                  A Lasting Experience.
                </span>
              </h2>

              <p className="mt-7 leading-8 text-white/65">
                We believe travelling is about more than visiting
                places. It is about discovering new cultures, meeting
                people, exploring nature and creating stories that
                last a lifetime.
              </p>

              <p className="mt-4 leading-8 text-white/65">
                Our goal is to make every journey special through
                thoughtful planning, personalised experiences and
                memorable African adventures.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#FF5A16] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#FFA51F] hover:text-[#25000F]"
              >
                Start Planning
                <ArrowRight size={18} />
              </a>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {[
                {
                  icon: ShieldCheck,
                  title: "Reliable Service",
                  text: "Thoughtful planning and dependable travel support.",
                },
                {
                  icon: Users,
                  title: "Personalised Journeys",
                  text: "Travel experiences designed around your interests.",
                },
                {
                  icon: Compass,
                  title: "Local Experiences",
                  text: "Discover destinations and experiences beyond the ordinary.",
                },
                {
                  icon: Sparkles,
                  title: "Memorable Adventures",
                  text: "Special moments that stay with you long after your trip.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:border-[#FF5A16]/60 hover:bg-white/10"
                  >

                    <Icon size={30} className="text-[#FFA51F]" />

                    <h3 className="mt-6 font-serif text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {item.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </section>

      {/* ==================================
          CONTACT & BOOKING
      ================================== */}

      <section className="relative overflow-hidden px-5 py-24 sm:px-10 lg:px-20">

        <img
          src={amboseli}
          alt="African safari landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#25000F]/90" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#FFA51F]">
            Your African Adventure Awaits
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-6xl">
            Let's Make Your
            <span className="block text-[#FF8A36]">
              Dream Safari Happen.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/70">
            Tell us where you want to go and what you would love to
            experience. Get in touch with our team and start planning
            your next African adventure.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#FF5A16] px-9 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#FFA51F] hover:text-[#25000F]"
            >
              Plan Your Safari
              <ArrowUpRight size={19} />
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-9 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:border-[#FF5A16] hover:bg-white/10"
            >
              Email Us
              <Mail size={18} />
            </a>

          </div>

          {/* CONTACT DETAILS */}

          <div className="mt-16 grid gap-6 border-t border-white/20 pt-10 sm:grid-cols-3">

            <div className="flex flex-col items-center gap-3">
              <Phone size={23} className="text-[#FFA51F]" />
              <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                Call Us
              </p>
              <a
                href={`tel:${phone1}`}
                className="text-sm font-semibold text-white hover:text-[#FFA51F]"
              >
                +254727096078
              </a>
              <a
                href={`tel:${phone2}`}
                className="text-sm font-semibold text-white hover:text-[#FFA51F]"
              >
                +254 720 859681
              </a>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Mail size={23} className="text-[#FFA51F]" />
              <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                Email Us
              </p>
              <a
                href={`mailto:${email}`}
                className="text-sm font-semibold text-white hover:text-[#FFA51F]"
              >
                {email}
              </a>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Globe size={23} className="text-[#FFA51F]" />
              <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                Our Location
              </p>
              <p className="text-sm font-semibold text-white">
                Nairobi, Kenya
              </p>
            </div>

          </div>

          <p className="mt-12 font-serif text-xl font-bold italic text-[#FFA51F] sm:text-2xl">
            "We Don't Count Moments. We Make Moments Count."
          </p>

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
