'use client'
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const useAnimationScroll = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return { heroRef, translateY };
};

export default useAnimationScroll;
