import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="m-auto max-w-screen-2xl w-screen min-h-screen h-fit py-6">
      <nav>
        <Link href={"/"}>
          <h2 className="text-4xl text-center text-white font-bold">
            ALGO APP
          </h2>
        </Link>
      </nav>
      <div className="pt-10">
        <div className="px-4 mb-10">
          <p className="text-white text-xl underline mb-2">
            Definition of Algorithm
          </p>
          <p className="text-white text-sm text-justify">
            The word Algorithm means ”A set of finite rules or instructions to
            be followed in calculations or other problem-solving operations” Or
            ”A procedure for solving a mathematical problem in a finite number
            of steps that frequently involves recursive operations”.
          </p>
        </div>
        <div className="px-4 mb-10">
          <p className="text-white text-xl underline mb-2">
            What is the need for algorithms?
          </p>
          <p className="text-white text-sm text-justify mb-4">
            · Algorithms are necessary for solving complex problems efficiently
            and effectively.
          </p>
          <p className="text-white text-sm text-justify mb-4">
            · They help to automate processes and make them more reliable,
            faster, and easier to perform.
          </p>
          <p className="text-white text-sm text-justify mb-4">
            · Algorithms also enable computers to perform tasks that would be
            difficult or impossible for humans to do manually.
          </p>
          <p className="text-white text-sm text-justify mb-4">
            · They are used in various fields such as mathematics, computer
            science, engineering, finance, and many others to optimize
            processes, analyze data, make predictions, and provide solutions to
            problems.
          </p>
        </div>
        <div className="px-4 mb-10">
          <p className="text-white text-xl underline mb-2">
            Types of Algorithms:
          </p>
          <div>
            <p className="text-white text-sm text-justify mb-4">
              There are several types of algorithms available. Some important
              algorithms are:
            </p>
            <p className="text-white text-sm text-justify mb-4">
              1 · Searching algorithms are the ones that are used for searching
              elements or groups of elements from a particular data structure.
              They can be of different types based on their approach or the data
              structure in which the element should be found.
            </p>
            <div className="mb-8">
              <Link
                className="text-white text-sm flex gap-2 place-content-center border rounded-lg py-4"
                href={"/algo-search"}
              >
                ALGO SEARCH PLAYGROUND
                <Image
                  src={"/img/arrow_right.svg"}
                  alt="arrow"
                  width={18}
                  height={18}
                />
              </Link>
            </div>
            <p className="text-white text-sm text-justify mb-4">
              2 · Sorting is arranging a group of data in a particular manner
              according to the requirement. The algorithms which help in
              performing this function are called sorting algorithms. Generally
              sorting algorithms are used to sort groups of data in an
              increasing or decreasing manner.
            </p>
            <div className="mb-8">
              <Link
                className="text-white text-sm flex gap-2 place-content-center border rounded-lg py-4"
                href={"/algo-sort"}
              >
                ALGO SORT PLAYGROUND
                <Image
                  src={"/img/arrow_right.svg"}
                  alt="arrow"
                  width={18}
                  height={18}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
