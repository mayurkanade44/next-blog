"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?email=${session?.data?.user.email}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  return (
    <div className="flex gap-1">
      <div className="flex-1">
        {isLoading
          ? "loading"
          : data?.map((post) => (
              <div
                className="flex items-center justify-between my-10"
                key={post._id}
              >
                <div className="w-[200px] h-[100px]">
                  <Image
                    src={post.img}
                    alt=""
                    width={200}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl">{post.title}</h2>
                <span
                  className="cursor-pointer text-red-700"
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))}
      </div>
    </div>
  );
};
export default Dashboard;
