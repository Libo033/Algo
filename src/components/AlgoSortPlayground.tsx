"use client";
import { sleep } from "@/libs/helpers";
import React, { useEffect, useState } from "react";

const defArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99,
];

const AlgoSortPlayground = () => {
  const [limit, setLimit] = useState(10);
  const [algo, setAlgo] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const [sortedValues, setSortedValues] = useState<number[]>(defArray);

  useEffect(() => {
    if (window) {
      if (window.innerWidth <= 640) setLimit(10);
      if (window.innerWidth > 640 && window.innerWidth <= 768) setLimit(16);
      if (window.innerWidth > 768 && window.innerWidth <= 1024) setLimit(20);
      if (window.innerWidth > 1024 && window.innerWidth <= 1280) setLimit(24);
      if (window.innerWidth > 1280 && window.innerWidth <= 1536) setLimit(30);
    }
  }, []);

  return (
    <div className="mx-4 mb-12 md:mx-12 lg:mx-28 xl:mx-44">
      <section className="w-full h-fit pt-6 bg-blue-100/20 border rounded-lg flex justify-evenly items-end">
        {sortedValues.length > 0 &&
          sortedValues.slice(0, limit).map((v) => (
            <span
              style={{ height: `${20 + v * 15}px` }}
              className="bg-blue-100/90 pt-2 rounded-t-lg w-6 flex justify-center"
            >
              {v}
            </span>
          ))}
      </section>
      <div className="py-8 flex justify-center">
        <button className="w-3/6 py-2 text-white border border-blue-300 rounded-md hover:bg-blue-50/10">
          INICIAR
        </button>
      </div>
      <p className="text-white text-2xl">Options:</p>
      <div className="flex flex-col gap-3 mt-2 mb-4 md:flex-row lg:gap-6">
        <button
          onClick={() => setAlgo("B")}
          className={
            algo === "B"
              ? "w-full py-2 text-white border border-blue-300 rounded-md bg-blue-50/20"
              : "w-full py-2 text-white border border-blue-300 hover:bg-blue-50/10 rounded-md"
          }
        >
          BUBBLE SORT
        </button>
        <button
          onClick={() => setAlgo("G")}
          className={
            algo === "G"
              ? "w-full py-2 text-white border border-blue-300 rounded-md bg-blue-50/20"
              : "w-full py-2 text-white border border-blue-300 hover:bg-blue-50/10 rounded-md"
          }
        >
          GNOME SORT
        </button>
        <button
          onClick={() => setAlgo("I")}
          className={
            algo === "I"
              ? "w-full py-2 text-white border border-blue-300 rounded-md bg-blue-50/20"
              : "w-full py-2 text-white border border-blue-300 hover:bg-blue-50/10 rounded-md"
          }
        >
          INSERTION SORT
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white text-xl mt-4" htmlFor="delay">
          Delay:
        </label>
        <input
          id="delay"
          className="w-2/6 px-2 py-3 bg-slate-300 border border-blue-800 rounded-md outline-0 outline-blue-300 outline focus:bg-white focus:outline-1 hover:bg-slate-200 lg:w-1/6"
          type="number"
          autoComplete="off"
          defaultValue={10}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white text-xl mt-4" htmlFor="delay">
          Timer
        </label>
        <input
          className="w-2/6 px-2 py-3 bg-slate-300 border border-blue-800 rounded-md outline-0 outline-blue-300 outline focus:bg-white focus:outline-1 hover:bg-slate-200 lg:w-1/6"
          type="number"
          disabled
          value={time}
        />
      </div>
    </div>
  );
};

export default AlgoSortPlayground;
