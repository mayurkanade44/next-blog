import Image from "next/image";
import hero from "public/hero.png";

export default function Home() {
  return (
    <div className="flex items-center gap-1">
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-5xl font-bold bg-gradient-to-b from-green-900 to-blue-500 text-transparent bg-clip-text">
          Better design for your digital products.
        </h1>
        <p>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className="p-1 cursor-pointer bg-green-500 rounded w-36 hover:text-black">See Our Works</button>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <Image src={hero} alt="hero" className="h-[500px] w-full " />
      </div>
    </div>
  );
}
