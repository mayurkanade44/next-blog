import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <Link href={`/blog/1`} className="flex items-center gap-10 mb-10 ">
        <div className="">
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={600}
            height={250}
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl">Blog</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            explicabo voluptate unde error obcaecati exercitationem nisi
            asperiores nostrum consequuntur delectus deleniti, tempora,
            voluptatum aperiam nam. Autem rem asperiores quidem veniam.
          </p>
        </div>
      </Link>
      <Link href={`/blog/1`} className="flex items-center gap-10 mb-10">
        <div className="">
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={600}
            height={250}
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl">Blog</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            explicabo voluptate unde error obcaecati exercitationem nisi
            asperiores nostrum consequuntur delectus deleniti, tempora,
            voluptatum aperiam nam. Autem rem asperiores quidem veniam.
          </p>
        </div>
      </Link>
    </div>
  );
};
export default Blog;
