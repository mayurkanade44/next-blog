import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Server error");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className="flex items-center gap-10 mb-10"
          key={item._id}
        >
          <div className="">
            <Image
              src={item.img}
              alt=""
              width={600}
              height={250}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl">{item.title}</h1>
            <p>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Blog;
