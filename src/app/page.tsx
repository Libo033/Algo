import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-auto max-w-screen-2xl w-full min-h-screen py-6 md:p-10 lg:p-8 flex justify-between flex-wrap">
      <div className="lg:w-1/2 md:w-full">
        <div>
          <h1 className="text-3xl text-center text-white font-bold py-8 md:text-5xl md:text-left">
            Welcome to ALGO APP
          </h1>
          <h2 className="text-2xl text-white text-center py-6 md:text-3xl md:text-left">
            Unlock the Power of Algorithms
          </h2>
          <h3 className="text-l text-white text-pretty text-justify py-4 px-4 md:text-xl md:px-0">
            ALGO APP is your gateway to understanding the fascinating world of
            algorithms. Whether you're a curious beginner or an experienced
            coder, our platform offers a user-friendly environment to explore,
            learn, and master algorithms.
          </h3>
          <h4 className="text-l text-white text-pretty text-justify py-4 px-4 md:text-xl md:px-0">
            Gain insight into complex algorithms with interactive
            visualizations. Watch as algorithms unfold, visualize data
            structures, and understand the inner workings of algorithms like
            never before.
          </h4>
        </div>
        <div className="mt-16 flex justify-center items-center md:h-2/6 lg:h-1/6 lg:mt-4 xl:h-2/6">
          <Link
            className="ease-in-out duration-100 hover:bg-blue-100/25 text-2xl text-white flex gap-4 place-content-center border rounded-lg py-2 px-10 sm:w-96 sm:text-4xl sm:px-12"
            href={"/home"}
          >
            Get Started
            <Image
              src={"/img/arrow_right.svg"}
              alt="arrow"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex w-1/2 justify-center items-center">
        <Image
          className="invert px-8 lg:w-3/5"
          src={"/img/algorithm.png"}
          alt="algorithm"
          width={420}
          height={420}
        />
      </div>
    </div>
  );
}
