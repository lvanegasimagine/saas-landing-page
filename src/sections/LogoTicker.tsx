"use client";
//https://www.youtube.com/watch?v=7hi5zwO75yc
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex flex-none gap-14 pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="QuantumLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="EchoLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="CelestialLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="PulseLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="ApexLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="QuantumLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="EchoLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="CelestialLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="PulseLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="ApexLogo Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
