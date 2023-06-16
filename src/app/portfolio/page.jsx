import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-2xl my-5">Choose a gallery</h1>
      <div className="flex gap-5">
        <Link
          href="/portfolio/illustrations"
          className="relative border-2 rounded-md bg-cover w-[300px] h-[400px] hover:text-green-500"
        >
          <Image src="/illustration.png" fill={true} alt="img" />
          <span className="absolute right-5 bottom-5 text-3xl font-bold">
            Illustrations
          </span>
        </Link>
        <Link
          href="/portfolio/websites"
          className="relative border-2 bg-cover w-[300px] h-[400px] hover:text-green-500"
        >
          <Image src="/websites.jpg" fill={true} alt="img" />
          <span className="absolute right-5 bottom-5 text-3xl font-bold ">
            Websites
          </span>
        </Link>
        <Link
          href="/portfolio/application"
          className="relative border-2 bg-cover w-[300px] h-[400px] hover:text-green-500"
        >
          <Image src="/apps.jpg" fill={true} alt="img" />
          <span className="absolute right-5 bottom-5 text-3xl font-bold">
            Application
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Portfolio;
