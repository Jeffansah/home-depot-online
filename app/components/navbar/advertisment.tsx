"use client";

import { socialLinks } from "@/app/lib/data/footer-links";
import { Facebook, Instagram, Menu, Twitter, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const iconMap = {
  Instagram,
  Facebook,
  Twitter,
};

const Advertisment = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div className="cursor-pointer">
        <Menu
          className="text-dark-400 size-4"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <div
        ref={drawerRef}
        className={`bg-dark-400 fixed top-0 right-0 z-[150] flex h-screen w-[35vw] transform flex-col justify-between px-4 py-10 transition-all duration-500 ease-[cubic-bezier(.77,0,.175,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <X
          className="absolute top-10 right-10 size-5 cursor-pointer stroke-1 text-white"
          onClick={() => setIsOpen(false)}
        />
        <div className="flex w-full flex-col items-center gap-5 pt-12">
          <h6 className="text-xs text-white uppercase">Welcome</h6>
          <p className="text-dark-200 max-w-[450px] text-center text-2xl leading-[1.5]">
            Advertising is the way great brands get to be great brands.
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-5">
          <h6 className="text-dark-200 text-xs uppercase">
            We Are Awesome Follow Us
          </h6>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.name as keyof typeof iconMap];
                return (
                  <Link key={link.name} href={link.href}>
                    <Icon
                      size={24}
                      className="hover:fill-dark-200 text-dark-400 fill-white transition-all duration-100"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertisment;
