"use client";
import NavigationTitle from "@/components/NavigationTitle";
import React, { useEffect, useId } from "react";
import info from "../../libs/Algo.json";
import AlgoSortPlayground from "@/components/AlgoSortPlayground";

const AlgoSort = () => {
  const bloq = useId();

  useEffect(() => {
    if (document.body) {
      setTimeout(() => {
        document.body.classList.remove("overflow-hidden");
      }, 600);
    }
  }, []);

  return (
    <div className="m-auto max-w-screen-2xl w-full min-h-screen h-fit py-6 md:py-8">
      <NavigationTitle bloq={bloq} />
      <div id={bloq} className="animate-appear">
        <div className="pt-10 md:pt-12">
          <h2 className="text-2xl text-center text-white font-bold">
            SORT ALGORITHMS
          </h2>
        </div>
        <div className="pt-6 md:pt-8">
          {info.sort.map((al) => (
            <div
              key={al.title}
              className="px-4 mb-10 md:px-12 lg:px-28 xl:px-44"
            >
              <p className="text-white text-xl underline mb-2 md:text-2xl">
                {al.title}
              </p>
              <p className="text-white text-sm text-justify md:text-base">
                {al.info}
              </p>
            </div>
          ))}
        </div>
        <div className="border border-blue-50/25 mx-4 md:mx-12 lg:mx-28 xl:mx-44"></div>
        <h3 className="text-2xl text-center text-white py-6">
          ALGO PLAYGROUND
        </h3>
        <AlgoSortPlayground />
      </div>
    </div>
  );
};

export default AlgoSort;
