"use client"
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";

export default function NavbarItem() {

  const [currentIndex,setCurrentIndex] = useState(1);
  return (
    <ul className="hidden h-full gap-4 lg:flex">
      {NAV_LINKS.map((link, index) => (
        <li key={link.key} className="relative">
          <Link
            href={link.href}
            className="regular-16 text-gray-50 flex items-center justify-center cursor-pointer pb-1 transition-all duration-150 ease-linear hover:font-bold hover:text-green-50"
            onMouseEnter={() => setCurrentIndex(index)}
          >
            {link.label}
          </Link>
          {currentIndex === index && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-50 transition-transform duration-300 ease-in-out transform translate-x-0" />
          )}
        </li>
      ))}
    </ul>
  );
}
