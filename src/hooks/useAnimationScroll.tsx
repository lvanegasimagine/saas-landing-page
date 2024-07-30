'use client'
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const useAnimationScroll = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return { sectionRef, translateY };
};

export default useAnimationScroll;
