import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data.title,
    description: data.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-4xl">{data.title}</h1>
          <p>{data.desc}</p>
          <div className="flex items-center gap-5">
            <Image
              src={data.img}
              alt="blog-img"
              width={40}
              height={40}
              className="object-cover rounded"
            />
            <span>Mayur</span>
          </div>
        </div>
        <div className="flex-1 h-[300px] relative">
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-10 text-md text-justify">
        <p>{data.content}</p>
      </div>
    </div>
  );
};
export default BlogPost;
