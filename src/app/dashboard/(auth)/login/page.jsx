"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div>
      <div className="flex flex-col mt-2 gap-5 items-center justify-center">
        <h2 className="text-xl">Please sign up to see the dashboard.</h2>
        <form onSubmit={handleSubmit} className="w=[300px] flex flex-col gap-5">
          <input
            type="text"
            placeholder="Email"
            required
            className="p-2 bg-transparent border-2 border-gray-400 rounded-md text-lg font-bold"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="p-2 bg-transparent border-2 border-gray-400 rounded-md text-lg font-bold"
          />
          <button className="w-[300px] p-3 cursor-pointer bg-green-500 rounded font-bold">
            Login
          </button>
        </form>
        <span>- OR -</span>
        <button
          className="p-2 cursor-pointer bg-green-500 rounded w-48 hover:text-black"
          onClick={() => signIn("google")}
        >
          Log in with google
        </button>
        <Link className="text-blue-800" href="/dashboard/register">
          Create new account
        </Link>
      </div>
    </div>
  );
};
export default Login;
