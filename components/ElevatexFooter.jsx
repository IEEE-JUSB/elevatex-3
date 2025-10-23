import React from "react";
import ieeeLogo from "./ieee.svg";

import {
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapLocationDot,
} from "react-icons/fa6";

function ElevatexFooter() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-700 to-blue-900 text-white w-full p-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around text-lg space-y-10 md:space-y-0">
        
        <div className="w-auto mb-10 md:mb-0">
          <div className="text-center mb-4">
            <img src={ieeeLogo} alt="IEEE JUSB Logo" width={320} className="mx-auto" />
          </div>
          <p className="w-80 text-justify leading-relaxed">
            The Jadavpur University IEEE Student Branch, founded in 2010, belongs to the Kolkata section.
            We are a group of enthusiastic students promoting innovative ideas both within and outside the campus.
          </p>
        </div>

        
        <div className="w-auto hidden md:block">
          <h2 className="font-bold mb-3 text-xl text-white">Useful Links</h2>
          <div className="space-y-2">
            <a href="/" className="block hover:underline transition">&gt; Home</a>
            <a href="/about" className="block hover:underline transition">&gt; About</a>
            <a href="/events" className="block hover:underline transition">&gt; Events</a>
            <a href="/contact" className="block hover:underline transition">&gt; Contact</a>
            <a href="/speakers" className="block hover:underline transition">&gt; Speakers</a>
            <a href="/schedule" className="block hover:underline transition">&gt; Schedule</a>
          </div>
        </div>

        <div className="w-auto px-6">
          <h2 className="font-bold mb-3 text-xl text-white">Contact Us</h2>
          <div className="flex items-start gap-2 mb-2">
            <FaMapLocationDot className="mt-1" />
            <span>
              Jadavpur University, 188 Raja S.C. Mallick Rd, <br />
              Kolkata-700032, India
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope />
            <a href="mailto:jaduniv.ieee@gmail.com" className="hover:underline transition">
              jaduniv.ieee@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <FaPhone />
            <span>+91 72789 72359</span>
          </div>

          <div className="flex gap-5 text-2xl">
            <a href="https://www.instagram.com/_ieeeju/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:underline transition">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/ieeejusb" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:underline transition">
              <FaFacebook />
            </a>
            <a href="https://x.com/IeeeJadavpur" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="hover:underline transition">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/company/ieee-ju/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:underline transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white flex w-full justify-center bg-blue-900">
        <p className="text-white text-lg font-Poppins p-3 text-center">
          Made with &#10084; by IEEE JUSB
        </p>
      </div>
    </>
  );
}

export default ElevatexFooter;
