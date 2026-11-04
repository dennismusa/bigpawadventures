
import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "254708711459";

  const message = encodeURIComponent(
    "Hello Bigpaw Tours, I would like to book a tour. Please share your available packages and prices."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bigpaw Tours on WhatsApp"
      title="Chat with Bigpaw Tours"
      className="
        fixed bottom-5 right-5 sm:bottom-7 sm:right-7
        z-[9999] group
        flex items-center justify-center
        focus:outline-none focus-visible:ring-4
        focus-visible:ring-green-400/50
      "
    >
      {/* Animated outer pulse */}
      <span
        className="
          absolute inset-0 rounded-full
          bg-green-500/60
          animate-ping
          opacity-30
          pointer-events-none
        "
      />

      {/* Soft glow */}
      <span
        className="
          absolute -inset-3 rounded-full
          bg-green-500/20 blur-xl
          opacity-70
          transition-all duration-500
          group-hover:bg-green-400/40
          group-hover:opacity-100
          pointer-events-none
        "
      />

      {/* Tooltip */}
      <span
        className="
          absolute right-[calc(100%+16px)]
          top-1/2 -translate-y-1/2
          whitespace-nowrap
          rounded-xl bg-[#171717]
          px-4 py-3
          text-sm font-semibold text-white
          shadow-2xl
          opacity-0 translate-x-3
          invisible
          transition-all duration-300
          group-hover:opacity-100
          group-hover:translate-x-0
          group-hover:visible
          group-focus-visible:opacity-100
          group-focus-visible:visible
          max-sm:hidden
        "
      >
        Chat with Bigpaw Tours
        <span className="ml-2 text-green-400">●</span>
      </span>

      {/* Main WhatsApp button */}
      <span
        className="
          relative flex h-14 w-14 sm:h-[68px] sm:w-[68px]
          items-center justify-center
          overflow-hidden rounded-full
          border border-white/30
          bg-gradient-to-br
          from-[#25D366] via-[#16A34A] to-[#087A38]
          text-white
          shadow-[0_12px_35px_rgba(22,163,74,0.40)]
          transition-all duration-300
          group-hover:scale-110
          group-hover:shadow-[0_16px_45px_rgba(22,163,74,0.55)]
          active:scale-95
        "
      >
        {/* Inner decorative ring */}
        <span
          className="
            absolute inset-[5px]
            rounded-full border border-white/25
            pointer-events-none
          "
        />

        {/* WhatsApp icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="
            relative z-10
            h-8 w-8 sm:h-9 sm:w-9
            drop-shadow-md
            transition-transform duration-300
            group-hover:rotate-[-8deg]
          "
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.76 11.76 0 0012.05 0C5.53 0 .24 5.29.24 11.8c0 2.08.54 4.1 1.56 5.88L0 24l6.48-1.7a11.78 11.78 0 005.57 1.42h.01c6.51 0 11.8-5.29 11.8-11.8 0-3.15-1.23-6.11-3.34-8.44ZM12.06 21.7c-1.74 0-3.45-.47-4.94-1.36l-.35-.21-3.84 1 1.02-3.74-.23-.38a9.72 9.72 0 01-1.49-5.2c0-5.38 4.38-9.76 9.77-9.76 2.61 0 5.06 1.02 6.9 2.86a9.7 9.7 0 012.86 6.9c0 5.38-4.38 9.79-9.7 9.79Zm5.35-7.3c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.73.94-.9 1.13-.16.19-.33.21-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.33.44-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.49-.64-.5h-.54c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.03 2.83 1.17 3.03c.15.19 2.03 3.1 4.92 4.34.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.33Z" />
        </svg>
      </span>
    </a>
  );
}
