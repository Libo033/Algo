"use client";
import React, { useEffect, useState } from "react";

const defArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
  145, 146, 147, 148, 149, 150,
];

const AlgoSearchPlayground = () => {
  const [limit, setLimit] = useState<number>(40);
  const [algo, setAlgo] = useState<string>("");

  useEffect(() => {
    if (window) {
      if (window.innerWidth <= 640) setLimit(40);
      if (window.innerWidth > 640 && window.innerWidth <= 768) setLimit(64);
      if (window.innerWidth > 768 && window.innerWidth <= 1024) setLimit(72);
      if (window.innerWidth > 1024 && window.innerWidth <= 1536) setLimit(99);
    }
  }, []);

  return (
    <div className="mx-4 mb-12 md:mx-12 lg:mx-28 xl:mx-44">
      <section className="grid gap-3 place-items-center grid-cols-5 sm:grid-cols-8 md:grid-cols-9 lg:grid-cols-11">
        {defArray &&
          defArray.slice(0, limit).map((v) => (
            <span
              key={v}
              className="w-14 text-white border border-blue-200/50 rounded-full p-4 text-center text-sm"
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
      <div className="flex gap-2 mt-2 mb-4 lg:gap-6">
        <button
          onClick={() => setAlgo("B")}
          className={
            algo === "B"
              ? "w-3/6 py-2 text-white border border-blue-300 rounded-md bg-blue-50/20"
              : "w-3/6 py-2 text-white border border-blue-300 hover:bg-blue-50/10 rounded-md"
          }
        >
          BINARY SEARCH
        </button>
        <button
          onClick={() => setAlgo("L")}
          className={
            algo === "L"
              ? "w-3/6 py-2 text-white border border-blue-300 rounded-md bg-blue-50/20"
              : "w-3/6 py-2 text-white border border-blue-300 hover:bg-blue-50/10 rounded-md"
          }
        >
          LINEAR SEARCH
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white text-xl mt-4" htmlFor="toSearch">
          Number to search:
        </label>
        <input
          id="toSearch"
          className="w-2/6 px-2 py-3 bg-slate-300 border border-blue-800 rounded-md outline-0 outline-blue-300 outline focus:bg-white focus:outline-1 hover:bg-slate-200 lg:w-1/6"
          type="number"
          autoComplete="off"
        />
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
    </div>
  );
};

export default AlgoSearchPlayground;
