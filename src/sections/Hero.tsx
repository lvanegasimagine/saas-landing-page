"use client";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import HeroContent from "@/components/HeroContent";
import useAnimationScroll from "@/hooks/useAnimationScroll";
import { motion } from "framer-motion";

export const Hero = () => {
  const { heroRef, translateY } = useAnimationScroll();

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <HeroContent>
        <motion.img
          src={cogImage.src}
          alt="Cog image"
          className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
          animate={{
            translateY: [-30, 30],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={cylinderImage.src}
          width={220}
          height={220}
          alt="Cylinder image"
          className="hidden md:block -top-4 -left-32 md:absolute"
          style={{
            translateY: translateY,
          }}
        />
        <motion.img
          src={noodleImage.src}
          width={220}
          alt="Noodle image"
          className="hidden lg:block absolute top-[534px] left-[448px] rotate-[30deg]"
          style={{
            rotate: 30,
            translateY: translateY,
          }}
        />
      </HeroContent>
    </section>
  );
};
