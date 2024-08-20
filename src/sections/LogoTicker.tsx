"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion as m } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <m.div
            className="flex flex-none gap-14 pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <Image
              src={acmeLogo}
              className="logo-ticker-image"
              alt="Acme logo"
            />
            <Image
              src={quantumLogo}
              className="logo-ticker-image"
              alt="Quantum logo"
            />
            <Image
              src={echoLogo}
              className="logo-ticker-image"
              alt="Echo logo"
            />
            <Image
              src={celestialLogo}
              className="logo-ticker-image"
              alt="Celestial logo"
            />
            <Image
              src={pulseLogo}
              className="logo-ticker-image"
              alt="Pulse logo"
            />
            <Image
              src={apexLogo}
              className="logo-ticker-image"
              alt="Apex logo"
            />

            {/* Second set of logos for animation */}

            <Image
              src={acmeLogo}
              className="logo-ticker-image"
              alt="Acme logo"
            />
            <Image
              src={quantumLogo}
              className="logo-ticker-image"
              alt="Quantum logo"
            />
            <Image
              src={echoLogo}
              className="logo-ticker-image"
              alt="Echo logo"
            />
            <Image
              src={celestialLogo}
              className="logo-ticker-image"
              alt="Celestial logo"
            />
            <Image
              src={pulseLogo}
              className="logo-ticker-image"
              alt="Pulse logo"
            />
            <Image
              src={apexLogo}
              className="logo-ticker-image"
              alt="Apex logo"
            />
          </m.div>
        </div>
      </div>
    </div>
  );
};
