import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex items-center justify-between h-10 mt-2">
      <div>@{new Date().getFullYear()} All Rights Reserved By Kop</div>
      <div className="flex items-center gap-2">
        <Image
          src="/1.png"
          width={15}
          height={15}
          className="cursor-pointer"
          alt="FB"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className="cursor-pointer"
          alt="Insta"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className="cursor-pointer"
          alt="Twitter"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className="cursor-pointer "
          alt="YT"
        />
      </div>
    </div>
  );
};
export default Footer;
