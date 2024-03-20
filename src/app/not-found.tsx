import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="m-auto max-w-screen-2xl h-screen flex flex-col items-center md:flex-wrap md:flex-row md:justify-center md:items-start">
      <div className="md:w-screen">
        <h2 className="text-4xl text-center text-white font-bold py-20 md:py-10 md:text-5xl">
          ALGO APP
        </h2>
      </div>
      <div className="my-8 md:my-0 md:h-3/6 md:flex md:flex-col md:justify-center">
        <Image
          className="md:w-52 lg:w-60"
          src={"/img/404.svg"}
          alt="not found"
          width={120}
          height={120}
        />
      </div>
      <div className="md:h-3/6 md:ml-8 md:flex md:flex-col md:justify-center">
        <p className="text-white text-3xl pt-4 md:text-4xl md:pt-0">
          Not Found
        </p>
        <p className="text-white py-4 text-xl md:text-2xl">
          Could not find requested resource
        </p>
        <Link className="underline decoration-1 text-white text-l" href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
