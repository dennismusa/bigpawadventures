
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import {
  ArrowRight,  Compass, MessageCircle,ArrowUpRight,Send,Globe, Heart,  CheckCircle2,  Music2,  MapPin,  Phone,  Mail,  } from "lucide-react";


const WHATSAPP_NUMBER = "254747859681";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travellers: "2",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello BigPaw Adventure Safaris!

I would like to make an enquiry.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Destination: ${formData.destination}
Travel Date: ${formData.travelDate}
Number of Travellers: ${formData.travellers}

Enquiry:
${formData.message}

Please share more information about your safari packages, prices and availability.

Thank you.
    `;

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+254 747 859 681",
      secondDetail: "+254 720 859 681",
      link: "tel:+254747859681",
      description: "Speak with our safari team.",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "bigpawadventures@gmail.com",
      link: "mailto:bigpawadventures@gmail.com",
      description: "Send us your travel enquiries.",
    },
    {
      icon: MapPin,
      title: "Our Location",
      detail: "Nairobi, Kenya",
      description: "Your gateway to African adventures.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-[#171014]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[400px] items-center overflow-hidden bg-[#171014] px-5 py-20 sm:min-h-[460px] sm:px-10 lg:px-20">

        <img
          src={require("../assets/mara1.jpg")}
          alt="African safari landscape"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#FFA51F]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFD08A] sm:text-xs">
              BigPaw Adventure Safaris
            </p>
          </div>

          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            Let's Plan Your
            <span className="block text-[#FFA51F]">
              Next Adventure.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            Every unforgettable journey begins with a conversation.
            Tell us where you want to go, and let us help you create
            an African adventure worth remembering.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href={whatsappLink(
                "Hello BigPaw Adventure Safaris, I would like to plan a safari. Please share your packages."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#FF7A1A] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-[#FFA51F] hover:text-[#171014]"
            >
              <MessageCircle size={17} />
              Chat With Us
            </a>

            <a
              href="#contact-form"
              className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full border border-white/60 bg-white/10 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white hover:text-[#171014]"
            >
              Send An Enquiry
              <ArrowRight size={17} />
            </a>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#FFA51F] to-transparent" />

      </section>

      {/* CONTACT INTRO */}
      <section className="px-5 py-16 sm:px-10 lg:px-20 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            <div>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#FF7A1A]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF7A1A]">
                  Get In Touch
                </span>
              </div>

              <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Your African Adventure
                <span className="block text-[#FF7A1A]">
                  Starts Here.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-8 text-gray-600">
                Whether you are dreaming of the Great Migration, exploring
                Kenya's beautiful national parks, relaxing on the coast or
                discovering Tanzania, our team is ready to help.
              </p>

              <p className="mt-4 max-w-lg text-sm leading-8 text-gray-600">
                Contact us for customised itineraries, destination
                recommendations, package prices and booking information.
                We look forward to making your journey memorable.
              </p>

              <div className="mt-9 space-y-7">

                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={index} className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF2E8] text-[#FF7A1A]">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="text-sm font-extrabold">
                          {item.title}
                        </h3>

                        {item.link ? (
                          <a
                            href={item.link}
                            className="mt-1 block text-sm font-semibold text-[#FF7A1A] transition hover:text-[#171014]"
                          >
                            {item.detail}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-semibold">
                            {item.detail}
                          </p>
                        )}

                        {item.secondDetail && (
                          <a
                            href="tel:+254720859681"
                            className="mt-1 block text-sm font-semibold text-[#FF7A1A] hover:text-[#171014]"
                          >
                            {item.secondDetail}
                          </a>
                        )}

                        <p className="mt-1 text-xs text-gray-500">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

              {/* WHATSAPP QUICK CONTACT */}
              <a
                href={whatsappLink(
                  "Hello BigPaw Adventure Safaris. I would like to make an enquiry."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-5 py-4 text-sm font-bold text-green-800 transition hover:bg-green-100"
              >
                <MessageCircle size={20} />
                Message us on WhatsApp
                <ArrowUpRight size={16} />
              </a>

            </div>

            {/* CONTACT FORM */}
            <div id="contact-form" className="rounded-2xl border border-gray-100 bg-[#FAFAF8] p-6 shadow-xl shadow-black/5 sm:p-9">

              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF7A1A]">
                  Start Planning
                </span>

                <h2 className="mt-3 font-serif text-3xl font-bold">
                  Send Us An Enquiry
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  Share a few details about your dream trip. Our team
                  will receive your enquiry through WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME */}
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-700">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/10"
                  />
                </div>

                {/* EMAIL AND PHONE */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-700">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-700">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+254..."
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/10"
                    />
                  </div>

                </div>

                {/* DESTINATION */}
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-700">
                    Preferred Destination
                  </label>

                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/10"
                  >
                    <option value="">Select a destination</option>
                    <option value="Maasai Mara">Maasai Mara</option>
                    <option value="Amboseli National Park">Amboseli</option>
                    <option value="Lake Nakuru">Lake Nakuru</option>
                    <option value="Tsavo National Parks">Tsavo</option>
                    <option value="Serengeti">Serengeti</option>
                    <option value="Ngorongoro Crater">Ngorongoro</option>
                    <option value="Zanzibar">Zanzibar</option>
                    <option value="Diani Beach">Diani Beach</option>
                    <option value="Mount Kilimanjaro">Mount Kilimanjaro</option>
                    <option value="Other">Other / Not Sure Yet</option>
                  </select>
                </div>

                {/* DATE AND TRAVELLERS */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-700">
                      Preferred Travel Date
                    </label>

                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-700">
                      Number of Travellers
                    </label>

                    <select
                      name="travellers"
                      value={formData.travellers}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/10"
                    >
                      <option value="1">1 Traveller</option>
                      <option value="2">2 Travellers</option>
                      <option value="3">3 Travellers</option>
                      <option value="4">4 Travellers</option>
                      <option value="5">5 Travellers</option>
                      <option value="6">6 Travellers</option>
                      <option value="7">7 Travellers</option>
                      <option value="8">8 Travellers</option>
                      <option value="9">9 Travellers</option>
                      <option value="10+">10+ Travellers</option>
                    </select>
                  </div>

                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-700">
                    Tell Us About Your Trip *
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about the safari or holiday you have in mind..."
                    className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/10"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#FF7A1A] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#171014]"
                >
                  Send Enquiry via WhatsApp
                  <Send size={17} />
                </button>

                <p className="text-center text-[11px] leading-5 text-gray-400">
                  Your enquiry will open in WhatsApp so you can review
                  and send it directly to our team.
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CONTACT BIGPAW */}
      <section className="bg-[#171014] px-5 py-16 text-white sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFA51F]">
              The BigPaw Experience
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
              Let's Make Your Journey
              <span className="block text-[#FFA51F]">
                Extraordinary.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/65">
              From your first enquiry to your return home, we are
              committed to helping you experience Africa in a
              meaningful and memorable way.
            </p>

          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#FFA51F]">
                <Compass size={25} />
              </div>
              <h3 className="mt-5 text-sm font-extrabold">
                Personalised Adventures
              </h3>
              <p className="mt-3 text-xs leading-6 text-white/55">
                Journeys designed around your interests, travel plans
                and expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#FFA51F]">
                <CheckCircle2 size={25} />
              </div>
              <h3 className="mt-5 text-sm font-extrabold">
                Dedicated Support
              </h3>
              <p className="mt-3 text-xs leading-6 text-white/55">
                We help you with your enquiries, itinerary planning
                and booking arrangements.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#FFA51F]">
                <Globe size={25} />
              </div>
              <h3 className="mt-5 text-sm font-extrabold">
                Memorable Experiences
              </h3>
              <p className="mt-3 text-xs leading-6 text-white/55">
                Discover remarkable destinations and create memories
                that last a lifetime.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-16 sm:px-10 lg:px-20">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 rounded-2xl bg-[#FFF3E9] p-8 sm:p-12 lg:flex-row">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF7A1A]">
              Your Adventure Awaits
            </p>

            <h2 className="mt-3 max-w-xl font-serif text-3xl font-bold sm:text-4xl">
              Ready to make moments count?
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Let's start planning your next unforgettable African journey.
            </p>
          </div>

          <a
            href={whatsappLink(
              "Hello BigPaw Adventure Safaris! I am ready to plan my next African adventure."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#FF7A1A] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-[#171014]"
          >
            Plan Your Safari
            <ArrowUpRight size={17} />
          </a>

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
