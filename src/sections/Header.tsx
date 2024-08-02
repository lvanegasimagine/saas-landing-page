"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";
import { useState } from "react";
import MenuNav from "@/components/MenuNav";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 backdrop-blur-sm z-20 ${isMenuOpen && "h-screen"}`}
    >
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/80 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center cursor-pointer">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            </Link>
            <MenuIcon
              className="h-5 w-5 cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
            <MenuNav className="hidden md:flex gap-6 text-black/60 items-center" />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="bg-white w-full h-full flex flex-col items-center justify-center space-y-4 p-6">
            <button
              className="absolute top-4 right-4 text-3xl"
              onClick={toggleMenu}
            >
              &times;
            </button>
            <MenuNav className="flex flex-col items-center justify-center space-y-10" />
          </div>
        </div>
      )}
    </header>
  );
};
