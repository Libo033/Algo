"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NavigationTitle: React.FC<{ bloq: string }> = ({ bloq }) => {
  const r = useRouter();

  const handleDisappear = () => {
    const main = document.getElementById(bloq) as HTMLDivElement;

    document.body.classList.add("overflow-hidden"); // oculto el despl
    window.scrollTo(0, 0); // lo llevo a arriba
    main.classList.add("animate-disappear"); // hago que baje
    setTimeout(() => {
      main.classList.add("translate-y-full"); // lo mantengo abajo
      r.push("home");
    }, 500);
  };

  return (
    <nav className="flex justify-center">
      <button onClick={() => handleDisappear()}>
        <h2 className="text-4xl text-center text-white font-bold">ALGO APP</h2>
      </button>
    </nav>
  );
};

export default NavigationTitle;
