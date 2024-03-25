"use client";
import { sleep } from "@/libs/helpers";
import React, { useEffect, useState } from "react";

const defArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const AlgoSortPlayground = () => {
  const [algo, setAlgo] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const [sortedValues, setSortedValues] = useState<number[]>(defArray);
  const [reset, setReset] = useState<boolean>(false);
  const [isSorting, setIsSorting] = useState<boolean>(false);

  const handleStartSort = async () => {
    try {
      const delay = parseInt(
        (document.getElementById("delay") as HTMLInputElement).value
      );

      if (algo === "B") {
        // BUBBLE SORT
        await bubbleSort(delay);
      }
      if (algo === "G") {
        // GNOME SORT
        await gnomeSort(delay);
      }
      if (algo === "I") {
        // INSERTION SORT
        await insertionSort(delay);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const bubbleSort = async (delay: number) => {
    let begin = Date.now();

    setIsSorting(true);
    for (let i = 0; i < sortedValues.length; i++) {
      for (let j = 0; j < sortedValues.length - i - 1; j++) {
        if (sortedValues[j] > sortedValues[j + 1]) {
          const temp = sortedValues[j];
          sortedValues[j] = sortedValues[j + 1];
          sortedValues[j + 1] = temp;
          await sleep(delay);
          setSortedValues([...sortedValues]);
        }
      }
    }
    setIsSorting(false);
    setReset(false);

    let end = Date.now();
    setTime((-begin + end) / 1000);
  };

  const gnomeSort = async (delay: number) => {
    let begin = Date.now();

    setIsSorting(true);
    let pos = 1;

    while (pos < sortedValues.length) {
      if (pos == 0) pos++;

      if (sortedValues[pos] >= sortedValues[pos - 1]) {
        pos++;
      } else {
        let temp = 0;
        temp = sortedValues[pos];
        sortedValues[pos] = sortedValues[pos - 1];
        sortedValues[pos - 1] = temp;
        pos--;
      }

      await sleep(delay);
      setSortedValues([...sortedValues]);
    }

    setReset(false);
    setIsSorting(false);

    let end = Date.now();
    setTime((-begin + end) / 1000);
  };

  const insertionSort = async (delay: number) => {
    let begin = Date.now();

    setIsSorting(true);
    let n = sortedValues.length;

    for (let i = 1; i < n; i++) {
      let current = sortedValues[i];
      let j = i - 1;
      while (j > -1 && current < sortedValues[j]) {
        sortedValues[j + 1] = sortedValues[j];
        j--;
      }
      sortedValues[j + 1] = current;

      await sleep(delay);
      setSortedValues([...sortedValues]);
    }
    setReset(false);
    setIsSorting(false);

    let end = Date.now();
    setTime((-begin + end) / 1000);
  };

  const handleReset = (array: number[]) => {
    setReset(true);
    setSortedValues(array.sort(() => Math.random() - 0.5));
    setTime(0);
  };

  useEffect(() => {
    if (window) {
      if (window.innerWidth <= 640) setSortedValues(defArray.slice(0, 10));
      if (window.innerWidth > 640 && window.innerWidth <= 768)
        setSortedValues(defArray.slice(0, 16));
      if (window.innerWidth > 768 && window.innerWidth <= 1024)
        setSortedValues(defArray.slice(0, 20));
      if (window.innerWidth > 1024 && window.innerWidth <= 1280)
        setSortedValues(defArray.slice(0, 24));
      if (window.innerWidth > 1280 && window.innerWidth <= 1536)
        setSortedValues(defArray.slice(0, 30));
    }
  }, []);

  return (
    <div className="mx-4 mb-12 md:mx-12 lg:mx-28 xl:mx-44">
      <section className="w-full h-fit pt-6 bg-blue-100/20 border rounded-lg flex justify-evenly items-end">
        {sortedValues.length > 0 &&
          sortedValues.map((v) => (
            <span
              key={v}
              style={{ height: `${20 + v * 15}px` }}
              className="bg-blue-100/90 pt-2 rounded-t-lg w-6 flex justify-center"
            >
              {v}
            </span>
          ))}
      </section>
      <div className="py-8 flex justify-center">
        <button
          onClick={() => {
            reset ? handleStartSort() : handleReset(sortedValues);
          }}
          className="w-3/6 py-2 text-white border border-blue-300 rounded-md hover:bg-blue-50/10"
          disabled={isSorting}
        >
          {reset ? "START" : "RESET"}
        </button>
      </div>
      <p className="text-white text-2xl">Options:</p>
      <div className="flex flex-col gap-3 mt-2 mb-4 md:flex-row lg:gap-6">
        <button
          onClick={() => setAlgo("B")}
          disabled={isSorting}
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
          disabled={isSorting}
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
          disabled={isSorting}
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
          disabled={isSorting}
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
