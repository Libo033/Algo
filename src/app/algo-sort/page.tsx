"use client";
import NavigationTitle from "@/components/NavigationTitle";
import React, { useEffect, useId } from "react";

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
          <div className="px-4 mb-10 md:px-12 lg:px-28 xl:px-44">
            <p className="text-white text-xl underline mb-2 md:text-2xl">
              Bubble Sort
            </p>
            <p className="text-white text-sm text-justify md:text-base">
              Bubble Sort is the simplest sorting algorithm that works by
              repeatedly swapping the adjacent elements if they are in the wrong
              order. This algorithm is not suitable for large data sets as its
              average and worst-case time complexity is quite high.
            </p>
          </div>
          <div className="px-4 mb-10 md:px-12 lg:px-28 xl:px-44">
            <p className="text-white text-xl underline mb-2 md:text-2xl">
              Gnome Sort
            </p>
            <p className="text-white text-sm text-justify md:text-base">
              Gnome Sort also called Stupid sort is based on the concept of a
              Garden Gnome sorting his flower pots. A garden gnome sorts the
              flower pots by the following method- He looks at the flower pot
              next to him and the previous one; if they are in the right order
              he steps one pot forward, otherwise he swaps them and steps one
              pot backwards. If there is no previous pot (he is at the starting
              of the pot line), he steps forwards; if there is no pot next to
              him (he is at the end of the pot line), he is done.
            </p>
          </div>
          <div className="px-4 mb-10 md:px-12 lg:px-28 xl:px-44">
            <p className="text-white text-xl underline mb-2 md:text-2xl">
              Insertion Sort
            </p>
            <p className="text-white text-sm text-justify md:text-base">
              Insertion sort is a simple sorting algorithm that works similarly
              to the way you sort playing cards in your hands. The array is
              virtually split into a sorted and an unsorted part. Values from
              the unsorted part are picked and placed in the correct position in
              the sorted part.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgoSort;
