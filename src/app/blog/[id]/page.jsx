import Image from "next/image";

const BlogPost = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-4xl">Test</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aperiam quae beatae voluptates a vel ex voluptatem
            consectetur maxime, fugiat in debitis quo perspiciatis mollitia
            quisquam architecto hic. Distinctio, iusto!
          </p>
          <div className="flex items-center gap-5">
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          delectus magnam nesciunt. Sunt sit, labore dicta tempora libero
          possimus nostrum repellat fuga repudiandae commodi laboriosam delectus
          voluptates accusantium voluptatibus nulla.
        </p>
      </div>
    </div>
  );
};
export default BlogPost;
