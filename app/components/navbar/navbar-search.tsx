"use client";

import { ArrowRight, Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const NavbarSearch = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className="cursor-pointer">
      <Search
        className="text-dark-400 hover:text-dark-50 size-4 transition-all duration-100"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="bg-dark-400 animate-fade absolute top-full right-10 flex w-[300px] items-center px-4 py-5 text-sm">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter a product name"
            className="placeholder:text-dark-200 w-full pr-2 text-white focus:ring-0 focus:outline-none"
          />
          <ArrowRight className="text-dark-200 size-5" />
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;
