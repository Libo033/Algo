import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center">
      <div>
        <h2 className="text-4xl text-center text-white font-bold py-16">
          ALGO APP
        </h2>
      </div>
      <div className="my-8">
        <Image src={"/img/404.svg"} alt="not found" width={120} height={120} />
      </div>
      <div>
        <p className="text-white text-3xl pt-4">Not Found</p>
        <p className="text-white py-4 text-xl">Could not find requested resource</p>
        <Link className="text-white" href="/">Return Home</Link>
      </div>
    </div>
  );
}
