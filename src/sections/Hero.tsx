"use client";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import HeroContent from "@/components/HeroContent";
import useAnimationScroll from "@/hooks/useAnimationScroll";
import { motion } from "framer-motion";

export const Hero = () => {
  const { sectionRef, translateY } = useAnimationScroll();

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-8 md:pb-10 md:pt-5"
    >
      <HeroContent>
        <motion.img
          src={cogImage.src}
          alt="Cog image"
          className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none lg:left-0"
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
          className="-left-32 -top-4 hidden md:absolute md:block"
          style={{
            translateY: translateY,
          }}
        />
        <motion.img
          src={noodleImage.src}
          width={220}
          alt="Noodle image"
          className="absolute left-[448px] top-[534px] hidden rotate-[30deg] lg:block"
          style={{
            rotate: 30,
            translateY: translateY,
          }}
        />
      </HeroContent>
    </section>
  );
};
