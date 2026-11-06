
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  MapPin,
  Phone,
  Compass,
  Sparkles,
} from "lucide-react";

import bigpawlogo from "../assets/safarilinklogo.png";

// ============================================
// BRAND SETTINGS
// ============================================

const WHATSAPP = "254747859681";
const PHONE = "+254727096078";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

// ============================================
// NAVIGATION DATA
// ============================================

const destinations = [
  ["Maasai Mara", "/maasaimara"],
  ["Lake Nakuru", "/lakenakuru"],
  ["Amboseli", "/amboseli"],
  ["Serengeti", "/serengeti"],
  ["Mount Kilimanjaro", "/mountkilimanjaro"],
  ["Zanzibar", "/zanzibar"],
  ["Mount Kenya", "/mountkenya"],
  ["Diani Beach", "/diani"],
];

const mainLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Safaris", "/safaris"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

// ============================================
// NAVBAR COMPONENT
// ============================================

export default function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  // ==========================================
  // SCROLL EFFECT
  // ==========================================

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollProgress =
        scrollHeight > 0
          ? (window.scrollY / scrollHeight) * 100
          : 0;

      setProgress(scrollProgress);
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ==========================================
  // MOBILE MENU BODY LOCK
  // ==========================================

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  // ==========================================
  // CLOSE MENU WHEN ROUTE CHANGES
  // ==========================================

  useEffect(() => {
    setMenuOpen(false);
    setDestOpen(false);
  }, [location.pathname]);

  // ==========================================
  // ESCAPE KEY
  // ==========================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setDestOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // ==========================================
  // MENU CONTROLS
  // ==========================================

  const closeMobile = () => {
    setMenuOpen(false);
    setDestOpen(false);
  };

  const desktopLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? "nav-link-active" : ""}`;

  const mobileLinkClass = ({ isActive }) =>
    `mobile-link ${isActive ? "mobile-link-active" : ""}`;

  return (
    <>
      {/* ========================================
          SCROLL PROGRESS
      ========================================= */}

      <div className="fixed left-0 top-0 z-[999] h-[3px] w-full pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#FF5A16] via-[#FFB04A] to-[#FF5A16] transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ========================================
          MAIN NAVBAR
      ========================================= */}

      <header
        className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#25000F]/[98] shadow-[0_12px_40px_rgba(0,0,0,0.28)]"
            : "bg-[#25000F]/95"
        }`}
      >
        <nav className="mx-auto max-w-[1500px] px-4 sm:px-6 xl:px-10">
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-500 ${
              scrolled ? "min-h-[70px]" : "min-h-[82px] lg:min-h-[92px]"
            }`}
          >
            {/* ====================================
                BRAND LOGO
            ==================================== */}

            <Link
              to="/"
              onClick={closeMobile}
              className="group flex shrink-0 items-center gap-3"
              aria-label="BigPaw Adventure Safaris home"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-[#FF5A16]/20 opacity-0 blur-md transition duration-500 group-hover:opacity-100" />

                <img
                  src={bigpawlogo}
                  alt="BigPaw Adventure Safaris"
                  className="relative h-12 w-12 rounded-full border border-[#FF8A36]/70 bg-white object-contain p-1 transition duration-500 group-hover:scale-105 sm:h-14 sm:w-14"
                />
              </div>

              <div className="leading-tight">
                <h2 className="font-serif text-xl font-black tracking-[0.08em] text-white sm:text-2xl">
                  BIG<span className="text-[#FF8A36]">PAW</span>
                </h2>

                <div className="mt-1 flex items-center gap-2">
                  <span className="h-px w-4 bg-[#FF5A16]" />
                  <p className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.2em] text-white/65 sm:text-[9px]">
                    Adventure Safaris
                  </p>
                </div>
              </div>
            </Link>

            {/* ====================================
                DESKTOP NAVIGATION
            ==================================== */}

            <div className="hidden items-center gap-1 lg:flex xl:gap-2">
              {/* HOME */}

              <NavLink to="/" end className={desktopLinkClass}>
                Home
              </NavLink>

              {/* ABOUT */}

              <NavLink to="/about" className={desktopLinkClass}>
                About Us
              </NavLink>

              {/* SAFARIS */}

              <NavLink to="/safaris" className={desktopLinkClass}>
                Safaris
              </NavLink>

              {/* DESTINATIONS DROPDOWN */}

              <div
                className="relative"
                onMouseEnter={() => setDestOpen(true)}
                onMouseLeave={() => setDestOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setDestOpen((previous) => !previous)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown") {
                      setDestOpen(true);
                    }
                  }}
                  className={`nav-link flex items-center gap-2 ${
                    destOpen ? "nav-link-active" : ""
                  }`}
                  aria-expanded={destOpen}
                  aria-haspopup="true"
                >
                  Destinations

                  <ChevronDown
                    size={15}
                    className={`text-[#FF8A36] transition-transform duration-300 ${
                      destOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN PANEL */}

                <div
                  className={`destination-dropdown ${
                    destOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible pointer-events-none translate-y-3 opacity-0"
                  }`}
                >
                  <div className="border-b border-white/10 px-5 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF5A16]/15 text-[#FF8A36]">
                        <Compass size={19} />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF8A36]">
                          Explore Africa
                        </p>
                        <h3 className="mt-1 font-serif text-lg font-bold text-white">
                          Our Destinations
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1 p-3">
                    {destinations.map(([name, path]) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={() => setDestOpen(false)}
                        className="destination-item"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#FF8A36] transition group-hover:bg-[#FF5A16] group-hover:text-white">
                          <MapPin size={13} />
                        </span>

                        <span>{name}</span>
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-white/10 px-5 py-4">
                    <Link
                      to="/"
                      onClick={() => setDestOpen(false)}
                      className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF8A36] transition hover:text-white"
                    >
                      Discover more destinations
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* GALLERY */}

              <NavLink to="/gallery" className={desktopLinkClass}>
                Gallery
              </NavLink>

              {/* CONTACT */}

              <NavLink to="/contact" className={desktopLinkClass}>
                Contact
              </NavLink>

              {/* BOOKING CTA */}

              <a
                href={whatsappLink(
                  "Hello BigPaw Adventure Safaris, I would like to plan a safari. Please share your packages and booking details."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center gap-3 rounded-full bg-[#FF5A16] px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-white shadow-lg shadow-[#FF5A16]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#FFB04A] hover:text-[#25000F] xl:px-6 xl:text-[11px]"
              >
                Book Safari
                <ArrowRight size={15} />
              </a>
            </div>

            {/* ====================================
                MOBILE CONTROLS
            ==================================== */}

            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={whatsappLink(
                  "Hello BigPaw Adventure Safaris, I would like to make a booking."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#FF5A16] px-4 py-2.5 text-[9px] font-extrabold uppercase tracking-wider text-white transition hover:bg-[#FFB04A] hover:text-[#25000F] sm:px-5 sm:text-[10px]"
              >
                Book Now
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:border-[#FF5A16] hover:bg-[#FF5A16] sm:h-11 sm:w-11"
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
              >
                <Menu size={23} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ========================================
          MOBILE BACKDROP
      ========================================= */}

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMobile}
        className={`fixed inset-0 z-[180] bg-black/70 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* ========================================
          MOBILE DRAWER
      ========================================= */}

      <aside
        className={`fixed right-0 top-0 z-[200] flex h-[100dvh] w-[88%] max-w-[430px] flex-col overflow-hidden border-l border-white/10 bg-[#25000F] shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* MOBILE HEADER */}

        <div className="flex min-h-[82px] items-center justify-between border-b border-white/10 bg-[#1A000A] px-5">
          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-3"
          >
            <img
              src={bigpawlogo}
              alt="BigPaw logo"
              className="h-11 w-11 rounded-full border border-[#FF8A36] bg-white object-contain p-1"
            />

            <div>
              <h2 className="font-serif text-xl font-black text-white">
                BIG<span className="text-[#FF8A36]">PAW</span>
              </h2>

              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white/55">
                Adventure Safaris
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={closeMobile}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-[#FF5A16]"
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* MOBILE MENU CONTENT */}

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-7">
          <div className="mb-6 flex items-center gap-3 px-2">
            <Sparkles size={15} className="text-[#FF8A36]" />
            <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#FF8A36]">
              Explore BigPaw
            </p>
          </div>

          <div className="space-y-2">
            {/* MAIN LINKS */}

            {mainLinks.slice(0, 3).map(([name, path]) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                onClick={closeMobile}
                className={mobileLinkClass}
              >
                {name}
                <ArrowRight size={16} />
              </NavLink>
            ))}

            {/* DESTINATIONS ACCORDION */}

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setDestOpen((previous) => !previous)}
                className={`mobile-link w-full ${
                  destOpen ? "mobile-link-active" : ""
                }`}
                aria-expanded={destOpen}
              >
                Destinations

                <ChevronDown
                  size={19}
                  className={`text-[#FF8A36] transition-transform duration-300 ${
                    destOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  destOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mobile-submenu">
                    {destinations.map(([name, path]) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={closeMobile}
                        className="mobile-destination"
                      >
                        <MapPin size={14} className="text-[#FF8A36]" />
                        {name}
                        <ArrowRight size={13} className="ml-auto opacity-40" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* REMAINING LINKS */}

            {mainLinks.slice(3).map(([name, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={closeMobile}
                className={mobileLinkClass}
              >
                {name}
                <ArrowRight size={16} />
              </NavLink>
            ))}
          </div>

          {/* MOBILE BOOKING CARD */}

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF5A16]/15 text-[#FF8A36]">
              <Compass size={21} />
            </div>

            <p className="mt-5 font-serif text-xl font-bold text-white">
              Your next adventure starts here.
            </p>

            <p className="mt-2 text-xs leading-6 text-white/55">
              Discover incredible destinations and create unforgettable
              memories with BigPaw Adventure Safaris.
            </p>

            <a
              href={whatsappLink(
                "Hello BigPaw Adventure Safaris, I would like to plan my next adventure. Please assist me."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-[#FF5A16] py-4 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white transition hover:bg-[#FFB04A] hover:text-[#25000F]"
            >
              Plan Your Safari
              <ArrowRight size={16} />
            </a>

            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="mt-4 flex items-center justify-center gap-2 text-xs text-white/60 transition hover:text-[#FF8A36]"
            >
              <Phone size={14} />
              {PHONE}
            </a>
          </div>

          <p className="mt-8 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
            Explore. Experience. Remember.
          </p>
        </div>
      </aside>

      {/* ========================================
          CUSTOM NAVBAR STYLES
      ========================================= */}

      <style>{`
        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 11px;
          border-radius: 9px;
          color: rgba(255,255,255,0.82);
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          transition: color 0.3s ease, background 0.3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 5px;
          height: 2px;
          border-radius: 10px;
          background: #FF5A16;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s ease;
        }

        .nav-link:hover,
        .nav-link-active {
          color: #FFB04A;
          background: rgba(255,255,255,0.045);
        }

        .nav-link:hover::after,
        .nav-link-active::after {
          transform: scaleX(1);
        }

        .destination-dropdown {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          z-index: 300;
          width: 390px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.11);
          border-radius: 18px;
          background: #25000F;
          box-shadow: 0 25px 70px rgba(0,0,0,0.38);
          transform: translateX(-50%);
          transition: opacity 0.25s ease, transform 0.25s ease,
            visibility 0.25s ease;
        }

        .destination-dropdown.translate-y-0 {
          transform: translate(-50%, 0);
        }

        .destination-dropdown.translate-y-3 {
          transform: translate(-50%, 12px);
        }

        .destination-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 9px;
          border-radius: 10px;
          color: rgba(255,255,255,0.78);
          font-size: 11px;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .destination-item:hover {
          color: #FFB04A;
          background: rgba(255,90,22,0.10);
        }

        .destination-item:hover span {
          background: #FF5A16;
          color: white;
        }

        .mobile-link {
          display: flex;
          width: 100%;
          min-height: 54px;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 13px;
          background: rgba(255,255,255,0.035);
          color: rgba(255,255,255,0.88);
          font-size: 13px;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .mobile-link:hover,
        .mobile-link-active {
          border-color: rgba(255,90,22,0.35);
          background: rgba(255,90,22,0.12);
          color: #FFB04A;
        }

        .mobile-submenu {
          margin-top: 7px;
          padding: 8px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 13px;
          background: rgba(0,0,0,0.18);
        }

        .mobile-destination {
          display: flex;
          min-height: 42px;
          align-items: center;
          gap: 11px;
          padding: 9px 10px;
          border-radius: 8px;
          color: rgba(255,255,255,0.72);
          font-size: 11px;
          transition: all 0.2s ease;
        }

        .mobile-destination:hover {
          background: rgba(255,90,22,0.12);
          color: #FFB04A;
        }

        .destination-dropdown::-webkit-scrollbar,
        aside::-webkit-scrollbar {
          width: 4px;
        }

        .destination-dropdown::-webkit-scrollbar-thumb,
        aside::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background: rgba(255,138,54,0.4);
        }

        @media (min-width: 1280px) {
          .nav-link {
            padding-left: 13px;
            padding-right: 13px;
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-link,
          .destination-dropdown,
          .mobile-link {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
