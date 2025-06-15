'use client';

import Link from "next/link";
import { Home, Palette, Camera, Info, Phone } from "lucide-react";

const DockNavigation = () => {
  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Services", href: "#services", icon: Palette },
    { name: "Gallery", href: "#gallery", icon: Camera },
    { name: "About", href: "#about", icon: Info },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-8 flex justify-center">
      <div className="bg-black/80 backdrop-blur-md rounded-full px-6 py-3 border border-gray-700 shadow-lg flex items-center space-x-6">
        {navItems.map((item) => (
          <Link href={item.href} key={item.name} className="group relative flex flex-col items-center p-2 text-yellow-400 hover:text-yellow-200 transition-colors duration-300">
            <div className="transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2">
              <item.icon className="h-6 w-6" />
            </div>
            <span className="absolute bottom-full mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DockNavigation; 