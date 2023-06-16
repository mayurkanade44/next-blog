import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category)
  return (
    <div>
      <div className="text-2xl text-green-500">{params.category}</div>
      {data.map((item) => (
        <div
          className="flex gap-5 mt-5 mb-10 flex-row-reverse even:flex-row"
          key={item.id}
        >
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h1 className="text-2xl">{item.title}</h1>
            <p>{item.desc}</p>
            <button className="p-1 cursor-pointer bg-green-500 rounded w-28 hover:text-black">
              See More
            </button>
          </div>
          <div className="flex-1 relative h-[400px]">
            <Image
              className="object-cover"
              fill={true}
              src={item.image}
              alt="img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Category;
