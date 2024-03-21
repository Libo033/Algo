"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useId } from "react";

// https://www.geeksforgeeks.org/introduction-to-algorithms/

const Home = () => {
  const r = useRouter();
  const bloq = useId();

  const handleDisappear = (redirect: string) => {
    const main = document.getElementById(bloq) as HTMLDivElement;

    document.body.classList.add("overflow-hidden"); // oculto el despl
    window.scrollTo(0, 0); // lo llevo a arriba
    main.classList.add("animate-disappear"); // hago que baje
    setTimeout(() => {
      main.classList.add("translate-y-full"); // lo mantengo abajo
      r.push(redirect);
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
        <Link href={"/"}>
          <h2 className="text-4xl text-center text-white font-bold">
            ALGO APP
          </h2>
        </Link>
      </nav>
      <div id={bloq} className="pt-10 animate-appear md:pt-12">
        <div className="px-4 mb-10 md:px-12 lg:px-28 xl:px-44">
          <p className="text-white text-xl underline mb-2 md:text-2xl">
            Definition of Algorithm
          </p>
          <p className="text-white text-sm text-justify md:text-base">
            The word Algorithm means ”A set of finite rules or instructions to
            be followed in calculations or other problem-solving operations” Or
            ”A procedure for solving a mathematical problem in a finite number
            of steps that frequently involves recursive operations”.
          </p>
        </div>
        <div className="px-4 mb-10 md:px-12 lg:px-28 xl:px-44">
          <p className="text-white text-xl underline mb-2 md:text-2xl">
            What is the need for algorithms?
          </p>
          <p className="text-white text-sm text-justify mb-4 md:text-base">
            · Algorithms are necessary for solving complex problems efficiently
            and effectively.
          </p>
          <p className="text-white text-sm text-justify mb-4 md:text-base">
            · They help to automate processes and make them more reliable,
            faster, and easier to perform.
          </p>
          <p className="text-white text-sm text-justify mb-4 md:text-base">
            · Algorithms also enable computers to perform tasks that would be
            difficult or impossible for humans to do manually.
          </p>
          <p className="text-white text-sm text-justify mb-4 md:text-base">
            · They are used in various fields such as mathematics, computer
            science, engineering, finance, and many others to optimize
            processes, analyze data, make predictions, and provide solutions to
            problems.
          </p>
        </div>
        <div className="px-4 mb-10 md:px-12 lg:px-28 xl:px-44">
          <p className="text-white text-xl underline mb-2 md:text-2xl">
            Types of Algorithms:
          </p>
          <div>
            <p className="text-white text-sm text-justify mb-4 md:text-base">
              There are several types of algorithms available. Some important
              algorithms are:
            </p>
            <p className="text-white text-sm text-justify mb-4 md:text-base">
              1 · Searching algorithms are the ones that are used for searching
              elements or groups of elements from a particular data structure.
              They can be of different types based on their approach or the data
              structure in which the element should be found.
            </p>
            <div className="mb-8 flex justify-center">
              <button
                onClick={() => handleDisappear("algo-search")}
                className="ease-in-out duration-100 hover:bg-blue-100/25 text-white text-sm flex gap-2 place-content-center border rounded-lg py-4 w-3/6 lg:w-2/6"
              >
                ALGO SEARCH
                <Image
                  src={"/img/arrow_right.svg"}
                  alt="arrow"
                  width={18}
                  height={18}
                />
              </button>
            </div>
            <p className="text-white text-sm text-justify mb-4 md:text-base">
              2 · Sorting is arranging a group of data in a particular manner
              according to the requirement. The algorithms which help in
              performing this function are called sorting algorithms. Generally
              sorting algorithms are used to sort groups of data in an
              increasing or decreasing manner.
            </p>
            <div className="mb-8 flex justify-center">
              <button
                className="ease-in-out duration-100 hover:bg-blue-100/25 text-white text-sm flex gap-2 place-content-center border rounded-lg py-4 w-3/6 lg:w-2/6"
                onClick={() => handleDisappear("algo-sort")}
              >
                ALGO SORT
                <Image
                  src={"/img/arrow_right.svg"}
                  alt="arrow"
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
