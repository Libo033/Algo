"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useId } from "react";

const AlgoSearch = () => {
  const r = useRouter();
  const bloq = useId();

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

  useEffect(() => {
    if (document.body) {
      setTimeout(() => {
        document.body.classList.remove("overflow-hidden");
      }, 600);
    }
  }, []);

  return (
    <div className="m-auto max-w-screen-2xl w-full min-h-screen h-fit py-6 md:py-8">
      <nav>
        <button onClick={() => handleDisappear()}>
          <h2 className="text-4xl text-center text-white font-bold">
            ALGO APP
          </h2>
        </button>
      </nav>
      <div id={bloq} className="animate-appear">
        <div className="pt-10 md:pt-12">
          <h2 className="text-2xl text-center text-white font-bold">
            SEARCH ALGORITHMS
          </h2>
        </div>
        <div className="pt-6 md:pt-8">
          <div className="px-4 mb-10 md:px-12 lg:px-28 xl:px-44">
            <p className="text-white text-xl underline mb-2 md:text-2xl">
              Linear Search
            </p>
            <p className="text-white text-sm text-justify md:text-base">
              Linear Search is defined as a sequential search algorithm that
              starts at one end and goes through each element of a list until
              the desired element is found, otherwise the search continues till
              the end of the data set.
            </p>
          </div>
          <div className="px-4 mb-10 md:px-12 lg:px-28 xl:px-44">
            <p className="text-white text-xl underline mb-2 md:text-2xl">
              Binary Search
            </p>
            <p className="text-white text-sm text-justify md:text-base">
              Binary Search is defined as a searching algorithm used in a sorted
              array by repeatedly dividing the search interval in half. To apply
              Binary Search algorithm the data structure must be sorted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgoSearch;
