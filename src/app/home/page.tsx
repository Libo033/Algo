"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useId } from "react";
import info from "../../libs/Home.json";

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
            {info.definition.title}
          </p>
          <p className="text-white text-sm text-justify md:text-base">
            {info.definition.text}
          </p>
        </div>
        <div className="px-4 mb-10 md:px-12 lg:px-28 xl:px-44">
          <p className="text-white text-xl underline mb-2 md:text-2xl">
            {info.whatis.title}
          </p>
          {info.whatis.text.map((t) => (
            <p className="text-white text-sm text-justify mb-4 md:text-base">
              {t}
            </p>
          ))}
        </div>
        <div className="px-4 mb-10 md:px-12 lg:px-28 xl:px-44">
          <p className="text-white text-xl underline mb-2 md:text-2xl">
            {info.types.title}
          </p>
          <div>
            <p className="text-white text-sm text-justify mb-4 md:text-base">
              {info.types.subtitle}
            </p>
            <p className="text-white text-sm text-justify mb-4 md:text-base">
              {info.types.type[0]}
            </p>
            <div className="mb-8 flex justify-center">
              <button
                onClick={() => handleDisappear("algo-search")}
                className="ease-in-out duration-100 hover:bg-blue-100/25 text-white text-sm flex gap-2 place-content-center border rounded-lg py-4 w-3/6 lg:w-2/6"
              >
                {info.types.button[0]}
                <Image
                  src={"/img/arrow_right.svg"}
                  alt="arrow"
                  width={18}
                  height={18}
                />
              </button>
            </div>
            <p className="text-white text-sm text-justify mb-4 md:text-base">
              {info.types.type[1]}
            </p>
            <div className="mb-8 flex justify-center">
              <button
                className="ease-in-out duration-100 hover:bg-blue-100/25 text-white text-sm flex gap-2 place-content-center border rounded-lg py-4 w-3/6 lg:w-2/6"
                onClick={() => handleDisappear("algo-sort")}
              >
                {info.types.button[1]}
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
