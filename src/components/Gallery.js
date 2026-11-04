
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Images,
  X,
  Compass,
  ArrowUpRight,
  Heart,
  Camera,
  Music2,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

// GALLERY IMAGES
import mage1 from "../assets/mage1.jpg";
import mage2 from "../assets/mage2.jpg";
import mage3 from "../assets/mage3.jpg";
import mage4 from "../assets/mage4.jpg";
import mage5 from "../assets/mage5.jpg";
import mage6 from "../assets/mage6.jpg";
import mage7 from "../assets/mage7.jpg";
import mage8 from "../assets/mage8.jpg";
import mage9 from "../assets/mage9.jpg";
import mage10 from "../assets/mage10.jpg";
import mage11 from "../assets/mage11.jpg";
import mage12 from "../assets/mage12.jpg";
import mage13 from "../assets/mage13.jpg";
import mage14 from "../assets/mage14.jpg";
import mage15 from "../assets/mage15.jpg";
import mage16 from "../assets/mage16.jpg";
import mage17 from "../assets/mage17.jpg";

const WHATSAPP_NUMBER = "254747859681";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// GALLERY COLLECTION
const galleryImages = [
  {
    image: mage1,
    title: "Hells Gate",
    location: "Kenya",
    description: "Discover the incredible beauty of the African wilderness.",
  },
  {
    image: mage2,
    title: "The Great Migration",
    location: "Kenya",
    description: "Experience unforgettable moments of wilderbeast migration.",
  },
  {
    image: mage3,
    title: " ",
    location: "kenya",
    description: "Witness one of the most spectacular wildlife experiences.",
  },
  {
    image: mage4,
    title: "African Safari",
    location: "Kenya",
    description: "Every journey brings a new story worth remembering.",
  },
  {
    image: mage5,
    title: "",
    location: "Kenya",
    description: " .",
  },
  {
    image: mage6,
    title: "",
    location: "Africa",
    description: "",
  },
  {
    image: mage7,
    title: " ",
    location: "kenya",
    description: "",
  },
  {
    image: mage8,
    title: "Amboseli",
    location: "kenya",
    description: "Discover the endless beauty of the amboseli.",
  },
  {
    image: mage9,
    title: "Coastal Escapes",
    location: "Kenya",
    description: "Relax and enjoy the beauty of the African coastline.",
  },
  {
    image: mage10,
    title: "Hot Air Baloon",
    location: "Maasai mara",
    description: ".",
  },
  {
    image: mage11,
    title: "",
    location: "Africa",
    description: "",
  },
  {
    image: mage12,
    title: "Travel Memories",
    location: "Africa",
    description: "Beautiful moments from journeys worth taking.",
  },
  {
    image: mage13,
    title: "Tsavo",
    location: "Africa",
    description: "Experience nature in its most beautiful form.",
  },
  {
    image: mage14,
    title: "",
    location: "Africa",
    description: "Explore remarkable destinations with BigPaw.",
  },
  {
    image: mage15,
    title: "Adventure Awaits",
    location: "Kenya",
    description: "Make every journey an opportunity for discovery.",
  },
  {
    image: mage16,
    title: "Beautiful Destinations",
    location: "Africa",
    description: "Explore landscapes that inspire a lifetime of memories.",
  },
  {
    image: mage17,
    title: "Moments That Matter",
    location: "Africa",
    description: "We don't count moments. We make moments count.",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedImage =
    selectedIndex !== null ? galleryImages[selectedIndex] : null;

  const showNext = (e) => {
    e?.stopPropagation();
    setSelectedIndex((current) =>
      current === null ? 0 : (current + 1) % galleryImages.length
    );
  };

  const showPrevious = (e) => {
    e?.stopPropagation();
    setSelectedIndex((current) =>
      current === null
        ? 0
        : (current - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const closeLightbox = () => setSelectedIndex(null);

  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-white text-[#171014]"
    >
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[440px] items-center overflow-hidden bg-[#25000F] px-5 py-20 sm:min-h-[520px] sm:px-10 lg:px-20">
        <img
          src={mage1}
          alt="BigPaw African safari experience"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#25000F]/95 via-[#25000F]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#FF5A16]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFB04A] sm:text-xs">
              BigPaw Adventure Safaris
            </p>
          </div>

          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            Moments That
            <span className="mt-2 block text-[#FF8A32]">
              Tell Our Story.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-8 text-white/80 sm:text-base">
            Explore Africa through unforgettable wildlife encounters,
            breathtaking landscapes, exciting adventures and beautiful
            coastal escapes. Every photograph captures a moment worth
            remembering.
          </p>

          <a
            href="#gallery"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#FF5A16] px-7 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#FFB04A] hover:text-[#25000F]"
          >
            <Camera size={17} />
            Explore Our Gallery
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#FF8A32] to-transparent" />
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="px-5 pb-10 pt-16 sm:px-10 lg:px-20 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#FF5A16]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF5A16]">
                  Discover Africa
                </p>
              </div>

              <h2 className="font-serif text-3xl font-bold leading-tight text-[#25000F] sm:text-4xl lg:text-5xl">
                A Collection of
                <span className="text-[#FF5A16]"> Adventures.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-gray-600">
                From the open plains of the Maasai Mara to the shores of
                the Indian Ocean, discover the destinations and experiences
                that make every BigPaw journey special.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#FAF8F7] px-6 py-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFF0E7] text-[#FF5A16]">
                <Images size={25} />
              </div>

              <div>
                <p className="font-serif text-3xl font-bold text-[#25000F]">
                  {galleryImages.length}
                </p>
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-gray-500">
                  Photo Moments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section
        id="gallery"
        className="scroll-mt-24 px-5 pb-20 pt-8 sm:px-10 lg:px-20 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* GALLERY HEADING */}
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF5A16]">
                Our Photography
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#25000F] sm:text-3xl">
                Explore Our Collection
              </h3>
            </div>

            <p className="flex items-center gap-2 text-xs font-semibold text-gray-500">
              <Compass size={15} className="text-[#FF5A16]" />
              Explore. Experience. Remember.
            </p>
          </div>

          {/* PHOTOGRAPH COUNT */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs font-semibold text-gray-500">
              Showing{" "}
              <span className="font-bold text-[#25000F]">
                {galleryImages.length}
              </span>{" "}
              photographs
            </p>

            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400">
              Click to view
            </p>
          </div>

          {/* PHOTO GRID */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${item.title}`}
                className={`group relative block w-full overflow-hidden rounded-2xl bg-[#25000F] text-left shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  index % 7 === 0 || index % 7 === 3
                    ? "aspect-[4/5]"
                    : "aspect-[4/3]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/5 opacity-90 transition duration-500 group-hover:opacity-100" />

                {/* IMAGE NUMBER */}
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/30 text-[10px] font-bold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* VIEW ICON */}
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>

                {/* IMAGE DETAILS */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-white/75">
                    <MapPin size={13} className="text-[#FF8A32]" />
                    {item.location}
                  </div>

                  <h3 className="font-serif text-xl font-bold leading-tight text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-6 text-white/75">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#FFB04A] opacity-0 transition duration-300 group-hover:opacity-100">
                    View Photograph
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE STRIP ================= */}
      <section className="border-y border-gray-100 bg-[#FAF8F7] px-5 py-12 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-3">
          <div>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFECE1] text-[#FF5A16]">
              <Compass size={21} />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#25000F]">
              Discover
            </h3>
            <p className="mt-2 text-xs leading-6 text-gray-500">
              Explore remarkable African destinations.
            </p>
          </div>

          <div>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFECE1] text-[#FF5A16]">
              <Camera size={21} />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#25000F]">
              Experience
            </h3>
            <p className="mt-2 text-xs leading-6 text-gray-500">
              Make every journey an unforgettable adventure.
            </p>
          </div>

          <div>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFECE1] text-[#FF5A16]">
              <Heart size={21} />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#25000F]">
              Remember
            </h3>
            <p className="mt-2 text-xs leading-6 text-gray-500">
              Create memories that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="relative overflow-hidden bg-[#25000F] px-5 py-16 text-white sm:px-10 lg:px-20 lg:py-24">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full border border-white/10" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-9 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#FF5A16]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FFB04A]">
                Your Story Starts Here
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Ready to Create Your Own
              <span className="block text-[#FF8A32]">
                African Adventure?
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-white/65">
              Let BigPaw Adventure Safaris help you discover incredible
              destinations and create memories that last a lifetime.
            </p>
          </div>

          <a
            href={whatsappLink(
              "Hello BigPaw Adventure Safaris, I have explored your gallery and would like to plan my own African adventure. Please share your safari packages."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#FF5A16] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white transition duration-300 hover:-translate-y-1 hover:bg-[#FFB04A] hover:text-[#25000F]"
          >
            Plan Your Safari
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* ================= IMAGE LIGHTBOX ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
            className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#FF5A16]"
          >
            <X size={22} />
          </button>

          {/* PREVIOUS BUTTON */}
          {galleryImages.length > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous photograph"
              className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#FF5A16] sm:left-8"
            >
              <ChevronLeft size={25} />
            </button>
          )}

          {/* SELECTED IMAGE */}
          <div
            className="flex max-h-[90vh] w-full max-w-6xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[72vh] w-full rounded-lg object-contain"
            />

            <div className="mt-5 text-center">
              <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                {selectedImage.title}
              </h3>

              <p className="mt-2 flex items-center justify-center gap-2 text-xs text-white/60">
                <MapPin size={13} className="text-[#FF8A32]" />
                {selectedImage.location}
              </p>

              <p className="mt-3 text-xs text-white/50">
                Photograph {selectedIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          {/* NEXT BUTTON */}
          {galleryImages.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              aria-label="Next photograph"
              className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#FF5A16] sm:right-8"
            >
              <ChevronRight size={25} />
            </button>
          )}
        </div>
      )}

      {/* ================= FOOTER ================= */}
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
              Discover Africa with BigPaw Adventure Safaris. From
              unforgettable wildlife encounters to relaxing beach escapes,
              we create journeys worth remembering.
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
                  <a
                    href="tel:+254720859681"
                    className="block hover:text-[#FF8A32]"
                  >
                    +254 720 859681
                  </a>
                  <a
                    href="tel:+254747859681"
                    className="mt-2 block hover:text-[#FF8A32]"
                  >
                    +254 747 859681
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
              © {new Date().getFullYear()} BigPaw Adventure Safaris. All
              rights reserved.
            </p>

            <p className="flex items-center gap-1.5 text-xs text-gray-500">
              Made for adventure lovers
              <Heart
                size={13}
                className="fill-[#FF5A16] text-[#FF5A16]"
              />
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
