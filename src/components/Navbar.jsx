import Link from "next/link";
import DarkMode from "./DarkMode";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className="h-16 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        Blog
      </Link>
      <div className="flex items-center gap-10">
        <DarkMode />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="hover:text-green-500">
            {link.title}
          </Link>
        ))}
        <button className="p-1 bg-green-500 cursor-pointer rounded">
          Logout
        </button>
      </div>
    </div>
  );
};
export default Navbar;
